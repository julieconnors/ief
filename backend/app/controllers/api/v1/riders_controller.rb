class Api::V1::RidersController < ApplicationController

    def index
        riders = Rider.all
        render json: riders
    end

    def create
        rider = Rider.new(rider_params)
        if rider.save
            render json: rider
        else
            render json: { errors: rider.errors.full_messages }
        end
    end

    private

    def rider_params
        params.require(:rider).permit(:name, :points, :image, :country_id)
    end
end
