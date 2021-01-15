class AppearanceChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'appearance_channel'
  end

  def unsubscribed
    current_user.is_offline
    ActionCable.server.broadcast('appearance_channel', current_user)
  end

  # def user_join_room
  #   room = Room.find_by(params[:id])
  #   ActionCable.server.broadcast('appearance_channel', room.users.uniq)
  # end

  def appear
    current_user.is_online
    ActionCable.server.broadcast('appearance_channel', current_user)
  end

  # def receive(data)
  #   ActionCable.server.broadcast("appearance_channel", data)
  # end
end
