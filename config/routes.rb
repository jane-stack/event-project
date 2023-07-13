Rails.application.routes.draw do
  
  resources :events do
    resources :attendances, except: [:index]
  end
  resources :users, except: [:update]
  resources :attendances, only: [:index]

  # Users
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  # Sessions
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
