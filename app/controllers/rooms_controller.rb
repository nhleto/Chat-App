class RoomsController < ApplicationController
  def index; end

  def create
    @room = current_user.rooms.build(room_params)
    @room.owner_id = current_user.id
    if @room.save
      @room.users << current_user
      flash[:notice] = 'New room created'
      redirect_to @room
    else
      flash[:alert] = @room.errors.first[1]
      redirect_to request.referrer
    end
  end

  def show
    @room = Room.find(params[:id])
    @rooms = Room.includes(:users)
    @message = Message.new
    @messages = @room.messages.where(room_id: @room.id).last(75).reverse
    @users = @room.users.order('online DESC NULLS LAST')
    @all_users = User.all.order('online DESC NULLS LAST')
  end

  def destroy
    @room = Room.find(params[:id])
    @room.destroy
    flash[:alert] = "Deleted #{@room.name}"
    redirect_to root_path
  end

  private

  def room_params
    params.require(:room).permit(:name, :owner_id)
  end
end
