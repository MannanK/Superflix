class Api::VideosController < ApplicationController
  def index
    @videos = Video.all

    render :index
  end

  def show
    @video = Video.find(params[:id])
  end
end
