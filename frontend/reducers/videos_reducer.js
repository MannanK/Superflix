import { RECEIVE_VIDEO, RECEIVE_VIDEOS } from '../actions/video_actions';
import { merge } from 'lodash';

const videosReducer = (state = {}, action) => {
  Object.freeze(action);

  switch (action.type) {
    case RECEIVE_VIDEOS:
      return action.videos.videos;
    case RECEIVE_VIDEO:
      return merge({}, state, { [action.video.id]: action.video });
    default:
      return state;
  }
};

export default videosReducer;