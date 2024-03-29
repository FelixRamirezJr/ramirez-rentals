class RentalApplicationsController < ApplicationController
    def index
    end

    def create
        # @TODO - Update hardcoded string to take in a parameter for room number and home
        params = rental_application_params.merge({home: 'Almondsbury'})
        rental_application = RentalApplication.create(params)
        # @TODO - Resolve broken mailer, password and username is incorrect?
        # RentalApplicationNotifierMailer.new_application(rental_application).deliver
        head :ok
    end
    
    private 

    def rental_application_params
        params.require(:rental_application).permit(:first_name, :last_name, :email, :lease_agreement, :phone_number, :home, :number_of_tenants, :additional_info)
    end
end
