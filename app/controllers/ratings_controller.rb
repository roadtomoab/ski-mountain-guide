class RatingsController < ApplicationController
    before_action :authorize
    
    def create
        user_id = session[:user_id]
        params[:user_id] = user_id
        rating = Rating.create(rating_params)
        if rating.valid?
            render json: rating, status: :created
        else
            render json: { errors: rating.errors.full_message }, status: :unprocessable_entity
        end
    end

    def update
        user_id = session[:user_id]
        params[:user_id] = user_id
    end

    private

    def authorize
        return render json: { error: "Must be logged in to leave a rating" }, status: :unauthorized unless session.include? :user_id
    end

    def rating_params
        params.permit(:town_rating, :ski_rating, :mountain_id, :user_id)
    end
end