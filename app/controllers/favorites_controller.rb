class FavoritesController < ApplicationController
    before_action :authorize

    def index
        user = current_user
        favs = user.favorites
        render json: favs
    end

    def create
        user_id = session[:user_id]
        params[:user_id] = user_id
        params[:mountain_id] = params[:favorite][:mountain_id]
        favorite = Favorite.create(favorite_params)
        if favorite.valid?
            render json: favorite, status: :created
        else
            render json: "User must be logged in to add favorites", status: :unauthorized
        end
    end

    def destroy
        favorite = Favorite.find_by(id: params[:id])
        if favorite
            favorite.destroy
            head :no_content
        else
            render_not_found_message
        end
    end

    private

    def favorite_params
        params.permit(:mountain_id, :user_id)
    end

    def authorize
        return render json: { error: "Must be logged in to view your favorites" }, status: :unauthorized unless session.include? :user_id
    end

    def render_not_found_message
        render json: { error: "Favorite not found"}, status: :not_found
    end
end
