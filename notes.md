Country
    :name
    :flag_image

    has_many :riders

Rider
    :name
    :points
    :image

    belongs_to :country

***add horse model to add horses to riders

rails g model Country name flag_image

rails g model Rider name points:integer horses image country:references

*creating a new branch
git branch <branch name>
git switch <branch name>

create namespaced routes in config folder
    namespace :api do
        namespace :v1 do
            resources :riders, only: [:index]
        end
    end

- add validations to model classes

- create controllers
    rails g controller api/v1/riders
    rails g controller api/v1/countries

install 'fast_jsonapi'
    run bundle install
    rails g serializer rider
    rails g serializer country

    *add attributes to serializer classes

**build index.html file

before fetching*
    - include gem 'rack-cors'
    cors - cross origin resource sharing
    - update cors.rb in config/initializers

when gathering input from form to POST:
    - include debugger to view capture data in console
    - try document.querySelector("#${input-id}").value  

creating POST fetch:
    fetch(endpoint, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            rider attributes
            name: name,
            country_id: country_id,
            image_url: image_url,
            horses: horses
        })
    })
        .then(res => res.json())
        .then(rider => {
            console.log(rider)
    })
    


*what is up with tmp file 

Add validation and catch errors?

Stretch goals: 
    - rendering images - rider profile and flag icon