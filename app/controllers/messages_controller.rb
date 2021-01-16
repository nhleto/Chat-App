class MessagesController < ApplicationController
  def create
    @room = Room.find(params[:room_id])
    @message = @room.messages.new(message_params)
    @message.user = current_user
    @message.save
    RoomChannel.broadcast_to(@room, user: current_user, users: @room.users.uniq, room: @room, message: @message)
  end

  private

  def message_params
    params.require(:message).permit(:body)
  end
end
