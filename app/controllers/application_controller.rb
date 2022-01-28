class ApplicationController < ActionController::API
    include ActionController::Cookies 

    private

    def find_by_username
        User.find_by(username: params[:username])
    end

    def current_user
        User.find_by(id: session[:user_id])
    end
end
