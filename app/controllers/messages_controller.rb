class MessagesController < ApplicationController
  def create
    @room = Room.find(params[:room_id])
    @message = @room.messages.new(message_params)
    @message.user = current_user
    @message.save
    room = Room.find_by(id: @message.room_id)
    RoomChannel.broadcast_to(room, user: @message.user, users: room.users.uniq, room: room, message: @message)
    # ActionCable.server.broadcast('message', @message.as_json(include: :user))
  end

  private

  def message_params
    params.require(:message).permit(:body)
  end
end
