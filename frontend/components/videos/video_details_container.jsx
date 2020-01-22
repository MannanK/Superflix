import { connect } from 'react-redux';
import { fetchVideo } from '../../actions/video_actions';
import { addToList, deleteFromList } from '../../actions/list_video_actions';
import { withRouter } from 'react-router-dom';
import VideoDetails from './video_details';

const msp = (state, ownProps) => {
  const video = state.entities.videos[ownProps.match.params.movieId];
  const users = state.entities.users;
  const currentUserId = state.session.currentUserId;
  const watched = users[currentUserId].listVideoIds.includes(video.id) ? true : false;

  return {
    video,
    genres: state.entities.genres,
    currentUserId,
    users,
    watched
  };
};

const mdp = dispatch => ({
  fetchVideo: id => dispatch(fetchVideo(id)),
  addToList: videoId => dispatch(addToList(videoId)),
  deleteFromList: videoId => dispatch(deleteFromList(videoId))
});

export default withRouter(connect(msp, mdp)(VideoDetails));