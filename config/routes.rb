Rails.application.routes.draw do
  devise_for :users
  root controller: :application, action: :find_first_rooom
  resources :rooms, only: %i[create destroy show destroy] do
    resources :messages, only: [:create]
  end
end
