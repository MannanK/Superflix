class Api::VideosController < ApplicationController
  def index
    @videos = Video.all.includes(:genres)
    @genres = Genre.all

    render :index
  end

  def show
    @video = Video.find(params[:id])
    @genres = @video.genres
  end
end
