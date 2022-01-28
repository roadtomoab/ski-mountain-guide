class Favorite < ApplicationRecord
  belongs_to :mountain
  belongs_to :user

  # validates :user_id, presence: :true
end
