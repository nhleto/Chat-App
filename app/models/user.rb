class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable

  validates :username, presence: { message: 'Please provide a username...' }

  # allows devise to skip email validation, instad use username
  def email_required?
    false
  end

  def email_changed?
    false
  end
end
