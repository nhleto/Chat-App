class RoomChannel < ApplicationCable::Channel
  def subscribed
    stream_for room
  end

  def receive(data)
    data['user'] = current_user
    data['room'] = room
    data['users'] = users
    data['message'] = message
    ActionCable.server.broadcast(room, data)
  end

  def room
    Room.find(params[:room])
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
