class Api::GenresController < ApplicationController
  def index
    @genres = Genre.all

    render :index
  end

  def show
    @genre = Genre.find(params[:id])
  end
end
