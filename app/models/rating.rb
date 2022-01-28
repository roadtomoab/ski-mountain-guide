class Rating < ApplicationRecord
  belongs_to :mountain
  belongs_to :user

  validates :town_rating, numericality: { greater_than_or_equal_to: 0.00, less_than_or_equal_to: 10.00}
  validates :ski_rating, numericality: { greater_than_or_equal_to: 0.00, less_than_or_equal_to: 10.00}
end
