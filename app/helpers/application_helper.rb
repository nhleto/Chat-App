module ApplicationHelper
  def pluralize(obj, word)
    obj == 1 ? "\u0020#{word}" : "\u0020#{word}s"
  end

  def picked_room(room)
    return unless room.id == request.fullpath.split.map {|x| x[/\d+/]}.join.to_i

    'picked'
  end
end
