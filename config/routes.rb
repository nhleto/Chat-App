Rails.application.routes.draw do
  devise_for :users
  root to: 'rooms#index'
  resources :messages, only: [:create]
  resources :rooms, only: %i[create destroy show new]
  resources :memberships, only: %i[create destroy]
end
