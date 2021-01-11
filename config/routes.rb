Rails.application.routes.draw do
  get 'rooms/index'
  devise_for :users
  root to: 'rooms#index'
  resources :messages, only: [:create]
end
