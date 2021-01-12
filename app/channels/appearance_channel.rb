class AppearanceChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'appearance_channel'
    # current_user.is_online
  end

  def unsubscribed
    current_user.is_offline
    ActionCable.server.broadcast 'appearance_channel', current_user
  end

  def appear
    current_user.is_online
    ActionCable.server.broadcast 'appearance_channel', current_user
  end
end
