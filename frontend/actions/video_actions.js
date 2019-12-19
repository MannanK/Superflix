import * as VideoAPIUtil from '../util/video_api_util';

export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const CLEAR_VIDEOS = "CLEAR_VIDEO";

const receiveVideos = payload => ({
  type: RECEIVE_VIDEOS,
  payload
});

const receiveVideo = payload => ({
  type: RECEIVE_VIDEO,
  payload
});

export const clearVideos = () => ({
  type: CLEAR_VIDEOS
})

export const fetchVideos = () => dispatch => (
  VideoAPIUtil.fetchVideos().then(payload => dispatch(receiveVideos(payload)))
);

export const fetchVideo = (id) => dispatch => (
  VideoAPIUtil.fetchVideo(id).then(payload => dispatch(receiveVideo(payload)))
);

export const searchVideos = (query) => dispatch => (
  VideoAPIUtil.searchVideos(query).then(payload => dispatch(receiveVideos(payload)))
);