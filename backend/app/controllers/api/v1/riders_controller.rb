class Api::V1::RidersController < ApplicationController

    def index
        riders = Rider.all
        # options = {
        #     include: [:country]
        # }
        render json: RiderSerializer.new(riders)
    end

    def create
        rider = Rider.new(rider_params)
        # binding.pry
        if rider.save
            render json: RiderSerializer.new(rider)
        else
            render json: { errors: rider.errors.full_messages }
        end
    end

    private

    def rider_params
        params.require(:rider).permit(:name, :points, :image, :country_id)
    end
end
