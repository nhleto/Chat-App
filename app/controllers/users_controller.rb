class UsersController < ApplicationController
  def index
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      @user.rooms << Room.find(1)
      flash[:notice] = 'User created successfully!'
      redirect_to root_path
    else
      flash[:alert] = 'User failed to save...'
      redirect_to request.referrer
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
