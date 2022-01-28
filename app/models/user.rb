class User < ApplicationRecord
    has_secure_password

    has_many :ratings
    has_many :rated_mountains, through: :ratings, source: :mountain
    has_many :favorites
    has_many :favorite_mountains, through: :favorites, source: :mountain

    validates :email, presence: :true, uniqueness: :true
    validates :username, presence: :true, uniqueness: :true
end