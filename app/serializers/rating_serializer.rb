class RatingSerializer < ActiveModel::Serializer
  attributes :id, :town_rating, :ski_rating
  has_one :mountain
  has_one :user
end
