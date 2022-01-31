class RatingsController < ApplicationController
    before_action :authorize
    skip_before_action :authorize, only: [:index]

    def my_ratings
        user = current_user
        ratings = user.ratings
        render json: ratings
    end

    def index
        render json: Rating.all
    end
    
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
        rating = Rating.find_by(id: params[:id])
        rating.update(rating_params)
        render json: rating, status: :accepted
    end

    def destroy
        rating = Rating.find_by(id: params[:id])
        if rating
            rating.destroy
            head :no_content
        else
            render_not_found_message
        end
    end

    private

    def authorize
        return render json: { error: "Must be logged in to leave a rating" }, status: :unauthorized unless session.include? :user_id
    end

    def rating_params
        params.permit(:town_rating, :ski_rating, :mountain_id, :user_id)
    end

    def render_not_found_message
        render json: { error: "Rating not found"}, status: :not_found
    end
end