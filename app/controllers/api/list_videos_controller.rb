class Api::ListVideosController < ApplicationController
  def index
    if logged_in?
      @list_videos = current_user.videos
      if @list_videos
        render :index
      else
        # Or some other error?
        render json: ['User has no videos in their list'], status: 400
      end
    else
      render json: ['Not logged in!'], status: 401
    end
  end

  def create
    if logged_in?
      list_video = ListVideo.new(user_id: current_user.id, video_id: params[:video_id])

      if list_video.save
        @list_videos = current_user.videos
        render :index
      else
        render json: ["This video is already in the user's list"], status: 400
      end
    else
      render json: ['Not logged in!'], status: 401
    end
  end

  def destroy
    if logged_in?
      list_video = currentUser.list_videos.find_by(video_id: params[:id])

      if list_video
        list_video.destroy

        @list_videos = current_user.videos
        render :index
      else
        render json: ['Video not in list or incorrect user'], status: 401
      end
    else
      render json: ['Not logged in!'], status: 401
    end
  end
end