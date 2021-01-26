class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable

  has_many :messages, dependent: :destroy
  has_many :rooms, through: :messages
  validates :username, presence: { message: 'Please provide a username...' },
                       uniqueness: { message: 'That name is already in use' }

  validates_confirmation_of :password

  def is_online
    update(online: true)
  end

  def is_offline
    update(online: false)
  end

  # allows devise to skip email validation, instad use username
  def email_required?
    false
  end

  def email_changed?
    false
  end
end
