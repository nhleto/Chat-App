class ApplicationController < ActionController::Base
  before_action :authenticate_user!
  before_action :default_room
  before_action :configure_permitted_parameters, if: :devise_controller?

  def find_first_rooom
    @room = Room.first
    redirect_to @room
  end

  private

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:username, :email, :password, :password_confirmation) }

    devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:username, :email, :password, :password_confirmation) }
  end

  def default_room
    Room.where(name: 'Home Room').first_or_create!
  end
end
