class Room < ApplicationRecord
  has_many :memberships, dependent: :destroy
  has_many :messages, dependent: :destroy
  has_many :users, through: :memberships
end