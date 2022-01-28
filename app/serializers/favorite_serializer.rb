class FavoriteSerializer < ActiveModel::Serializer
  attributes :id

  # def name_for_mountain
  #   object.name 
  # end
  has_one :mountain
  has_one :user
end