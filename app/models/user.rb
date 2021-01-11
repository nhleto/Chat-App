class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable

  has_many :messages, dependent: :destroy
  has_many :memberships
  has_many :rooms, through: :memberships
  validates :username, presence: { message: 'Please provide a username...' }

  def is_online
    update_attributes(online: true)
  end

  def is_offline
    update_attributes(online: false)
  end

  # allows devise to skip email validation, instad use username
  def email_required?
    false
  end

  def email_changed?
    false
  end
end
