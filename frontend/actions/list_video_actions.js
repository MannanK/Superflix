import * as ListVideoAPIUtil from '../util/list_videos_api_util';

export const RECEIVE_LIST_VIDEOS = "RECEIVE_LIST_VIDEOS";

const receiveListVideos = payload => ({
  type: RECEIVE_LIST_VIDEOS,
  payload
});

export const addToList = (videoId) => dispatch => (
  ListVideoAPIUtil.addToList(videoId).then(payload => dispatch(receiveListVideos(payload)))
);

export const deleteFromList = (videoId) => dispatch => (
  ListVideoAPIUtil.deleteFromList(videoId).then(payload => dispatch(receiveListVideos(payload)))
);