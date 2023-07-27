Rails.application.routes.draw do
  
  resources :events do
    resources :attendances, except: [:show, :create]
  end

  resources :attendances, only: [:create]

  # Users
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  # Sessions
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # Attendances
  get '/attending', to: 'attendances#attending'
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
