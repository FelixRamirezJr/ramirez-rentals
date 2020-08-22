class CreateRentalApplications < ActiveRecord::Migration[6.0]
  def change
    create_table :rental_applications do |t|
      t.text :first_name
      t.text :last_name
      t.text :email
      t.text :lease_agreement
      t.text :phone_number
      t.text :home
      t.integer :number_of_tenants
      t.text :additional_info

      t.timestamps
    end
    add_index :rental_applications, :home
  end
end
