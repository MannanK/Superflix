class Api::VideosController < ApplicationController
  def index
    @videos = Video.all
      .with_attached_thumbnail
      .with_attached_url
      .includes(:genres)

    @genres = Genre.all

    render :index
  end

  def show
    @video = Video.find(params[:id])
      .with_attached_thumbnail
      .with_attached_url

    @genres = @video.genres
  end
end
