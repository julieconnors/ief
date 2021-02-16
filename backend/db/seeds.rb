# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Country.destroy_all
Rider.destroy_all

Country.create(name: "Switzerland", flag_image: "/images/switzerland.png")
Country.create(name: "Germany", flag_image: "/images/germany.png")
Country.create(name: "Sweden", flag_image: "/images/sweden.png")
Country.create(name: "Belgium", flag_image: "/images/belgium.png")
Country.create(name: "Great Britain", flag_image: "/images/united-kingdom.png")
Country.create(name: "USA", flag_image: "/images/united-states-of-america.png")
Country.create(name: "Ireland", flag_image: "/images/ireland.png")

Rider.create(name: "Steve Guerdat", points: 3627, image: "https://s3-eu-west-1.amazonaws.com/fei-bios/Images/10011463/Profile.jpg?1541409788", country_id: 1)
Rider.create(name: "Martin Fuchs", points: 3373, image: "https://s3-eu-west-1.amazonaws.com/fei-bios/Images/10030545/Profile.jpg?1541407845", country_id: 1)
Rider.create(name: "Daniel Deusser", points: 3362, image: "https://s3-eu-west-1.amazonaws.com/fei-bios/Images/10008871/Profile.jpg?1440633366", country_id: 2)
Rider.create(name: "Peder Fredricson", points: 3021, image: "https://s3-eu-west-1.amazonaws.com/fei-bios/Images/10002504/Profile.jpg?1537439303", country_id: 3)
Rider.create(name: "Ben Maher", points: 2958, image: "https://s3-eu-west-1.amazonaws.com/fei-bios/Images/10000837/Profile.jpg?1440633366", country_id: 5)
