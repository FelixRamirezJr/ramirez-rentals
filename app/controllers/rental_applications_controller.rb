class RentalApplicationsController < ApplicationController
    def index
    end

    def create
        @rental_application = RentalApplication.create(rental_application_params)
        head :ok
    end

    private 

    def rental_application_params
        params.require(:rental_application).permit(:first_name, :last_name, :email, :lease_agreement, :phone_number, :home, :number_of_tenants, :additional_info)
    end
end
