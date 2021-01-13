module ApplicationHelper
  def pluralize(obj, word)
    obj == 1 ? "\u0020#{word}" : "\u0020#{word}s"
  end
end
