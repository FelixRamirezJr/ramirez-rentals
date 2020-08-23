class RentalApplicationNotifierMailer < ApplicationMailer
    default :from => 'newapplication@ramirezrentals.com'

    # send a signup email to the user, pass in the user object that   contains the user's email address
    def new_application(rental_application)
        subject = "New Application from #{rental_application.first_name} #{rental_application.last_name}"
        @body = "" 
        rental_application.attributes.except(:created_at, :updated_at).each_pair do |name, value|
            @body += "#{name} <=> #{value} <br/>"
        end
        mail(:to => 'frj.investments@gmail.com', subject: subject)
    end
end
