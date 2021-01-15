class MessagesController < ApplicationController
  def create
    @message = current_user.messages.build(message_params)
    @message.save
    room = Room.find_by(id: @message.room_id)
    RoomChannel.broadcast_to(room, user: room.users.uniq, room: room, message: @message)
    ActionCable.server.broadcast('message', @message.as_json(include: :user))
  end

  private

  def message_params
    params.require(:message).permit(:body, :room_id)
  end
end
