Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy] # login, logout
    resources :users, only: [:show, :create, :destroy] # sign up, delete account
  end
end
