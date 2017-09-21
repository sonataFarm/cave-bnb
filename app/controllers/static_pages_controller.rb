class StaticPagesController < ApplicationController
  def root
    current_user
  end
end
