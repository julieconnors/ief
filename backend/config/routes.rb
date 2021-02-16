Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
        resources :riders, only: [:index, :create]
        resources :countries, only: [:index]
    end
  end
end
