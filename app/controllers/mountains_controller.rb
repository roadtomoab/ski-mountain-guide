class MountainsController < ApplicationController
    def index
        render json: Mountain.all
    end

    def show
        mountain = Mountain.find_by_id(params[:id])
        if mountain
            render json: mountain
        else
            render_not_found_message
        end
    end

    private

    def render_not_found_message
        render json: { error: "Mountain not found"}, status: :not_found
    end
end