class RoomsController < ApplicationController
  def index
    @message = Message.new
    @messages = Message.where(room_id: nil).reverse_order
    @rooms = Room.all
    @room = Room.new
    @users = User.all
  end

  def new
    @room = Room.new
  end

  def create
    @room = current_user.rooms.build(room_params)
    @room.owner_id = current_user.id
    if @room.save
      @room.memberships.create(room_id: @room.id, user_id: current_user.id)
      flash[:notice] = 'New room created'
      redirect_to @room
    else
      flash[:alert] = 'Failed to create room'
      redirect_to request.referrer
    end
  end

  def show
    @room = Room.find(params[:id])
    @rooms = Room.all
    @message = Message.new
    @messages = Message.where(room_id: @room.id).reverse_order
    @users = User.all
  end

  private

  def room_params
    params.require(:room).permit(:name, :owner_id)
  end
end
