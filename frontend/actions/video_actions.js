import * as VideoAPIUtil from '../util/video_api_util';
import * as ListVideoAPIUtil from '../util/list_videos_api_util';

export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const CLEAR_VIDEOS = "CLEAR_VIDEOS";
export const RECEIVE_SEARCH_ERRORS = "RECEIVE_SEARCH_ERRORS";
export const RECEIVE_LIST_ERRORS = "RECEIVE_LIST_ERRORS";

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
});

const receiveSearchErrors = errors => ({
  type: RECEIVE_SEARCH_ERRORS,
  errors
});

const receiveListErrors = errors => ({
  type: RECEIVE_LIST_ERRORS,
  errors
});

export const fetchVideos = () => dispatch => (
  VideoAPIUtil.fetchVideos().then(payload => dispatch(receiveVideos(payload)))
);

export const fetchOnlyShows = (genre) => dispatch => (
  VideoAPIUtil.fetchOnlyShows(genre).then(payload => dispatch(receiveVideos(payload)))
);

export const fetchOnlyMovies = (genre) => dispatch => (
  VideoAPIUtil.fetchOnlyMovies(genre).then(payload => dispatch(receiveVideos(payload)))
);

export const fetchVideo = (id) => dispatch => (
  VideoAPIUtil.fetchVideo(id).then(payload => dispatch(receiveVideo(payload)))
);

export const fetchListVideos = () => dispatch => (
  VideoAPIUtil.fetchListVideos().then(
    payload => dispatch(receiveVideos(payload)),
    res => dispatch(receiveListErrors(res.responseJSON))
  )
);

export const searchVideos = (query) => dispatch => (
  VideoAPIUtil.searchVideos(query).then(
    payload => dispatch(receiveVideos(payload)),
    res => dispatch(receiveSearchErrors(res.responseJSON))
  )
);