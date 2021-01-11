class RoomsController < ApplicationController
  def index
    @message = Message.new
    @messages = Message.where(room_id: nil)
    @rooms = Room.all
    @room = Room.new
  end

  def new
    @room = Room.new
  end

  def create
    @room = current_user.rooms.build(room_params)
    if @room.save
      flash[:notice] = 'New room created'
      redirect_to @room
    else
      flash[:alert] = 'Failed to create room'
      redirect_to request.referrer
    end
  end

  def show
    @room = Room.find(params[:id])
    @message = Message.new
    @messages = Message.where(room_id: @room.id)
  end

  private

  def room_params
    params.require(:room).permit(:name, :owner_id)
  end
end
