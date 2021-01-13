class Room < ApplicationRecord
  has_many :messages
  has_many :users, through: :messages

  # not sure if we need to keep memberships around actually
  has_many :memberships, dependent: :destroy
  has_many :users, through: :memberships
end
