class UsersController < ApplicationController

    def index
        render json: User.all
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: :created
        else
            render json: { error: "no current session stored" }, status: :unauthorized
        end
    end

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { erros: user.errors.full_message }, status: :unprocessable_entity
        end
    end

    def update
        user = User.find_by(id: session[:user_id])
        if user
            user.update(user_params)
            render json: user, status: :accepted
        else
            render json: { error: "Need to be logged in" }, status: :unauthorized
        end
    end

    private
    
    def user_params
        params.permit(:username, :password, :email)
    end
end