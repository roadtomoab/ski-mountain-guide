class Mountain < ApplicationRecord
    has_many :ratings
    has_many :users_w_ratings, through: :ratings, source: :user
    has_many :favorites
    has_many :users_w_favorites, through: :favorites, source: :user

    def average_town_rating
        ratings = self.ratings.map { |r| r.town_rating }
        (ratings.sum(0.0) / ratings.size).round(2)
    end

    def average_ski_rating
        ratings = self.ratings.map { |r| r.ski_rating }
        (ratings.sum(0.0) / ratings.size).round(2)
    end
end
