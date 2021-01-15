Rails.application.routes.draw do
  devise_for :users
  root controller: :application, action: :find_first_rooom
  resources :rooms, only: %i[create destroy show new] do
    resources :messages, only: [:create]
  end
  resources :memberships, only: %i[create destroy]
end
