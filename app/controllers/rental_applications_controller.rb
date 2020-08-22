class RentalApplicationsController < ApplicationController
    def index
    end

    def create
        @rental_application = RentalApplication.create(params[:rental_application])
    end

    def success_page
    end
end
