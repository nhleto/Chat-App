class RoomChannel < ApplicationCable::Channel
  def subscribed
    stream_for room
  end

  def room
    Room.find(params[:room])
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
