class Room < ApplicationRecord
  has_many :messages, dependent: :destroy
  has_many :users, through: :messages

  validates :name, presence: {message: 'Room name can\'t be blank'}, length: { maximum: 50, message: 'Group name maximum 50 characters' }
end
