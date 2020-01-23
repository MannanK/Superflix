import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addToList, deleteFromList } from '../../actions/list_video_actions';
import VideoItem from './video_item';

const msp = (state, ownProps) => {
  const users = state.entities.users;
  const currentUserId = state.session.currentUserId;
  const watched = users[currentUserId].listVideoIds.includes(ownProps.video.id) ? true : false;

  return {
    genres: state.entities.genres,
    currentUserId,
    users,
    watched
  };
};

const mdp = dispatch => ({
  addToList: videoId => dispatch(addToList(videoId)),
  deleteFromList: videoId => dispatch(deleteFromList(videoId))
});

export default withRouter(connect(msp, mdp)(VideoItem));