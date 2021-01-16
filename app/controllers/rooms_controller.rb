class RoomsController < ApplicationController
  def index
    @room = Room.find(params[:id])
    @message = @room.messages.build
    @messages = Message.includes(:user).where(room_id: nil).reverse_order
    @rooms = Room.includes(:users)
    @room = Room.new
    @users = User.all.order('online DESC NULLS LAST')
  end

  def create
    @room = current_user.rooms.build(room_params)
    @room.owner_id = current_user.id
    if @room.save
      @room.users << current_user
      flash[:notice] = 'New room created'
      redirect_to @room
    else
      flash[:alert] = 'Failed to create room'
      redirect_to request.referrer
    end
  end

  def show
    @room = Room.find(params[:id])
    @rooms = Room.includes(:users)
    @message = Message.new
    @messages = @room.messages.includes(:user).where(room_id: @room.id).reverse_order
    @users = @room.users.order('online DESC NULLS LAST')
    # RoomChannel.broadcast_to(@room, user: current_user, users: @users.uniq, room: @room)
  end

  private

  def room_params
    params.require(:room).permit(:name, :owner_id)
  end
end
