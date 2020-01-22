import { connect } from 'react-redux';
import { addToList, deleteFromList } from '../../actions/list_video_actions';
import VideoMain from './video_main';

const msp = (state, ownProps) => {
  const users = state.entities.users;
  const currentUserId = state.session.currentUserId;
  const watched = users[currentUserId].listVideoIds.includes(ownProps.video.id) ? true : false;

  return {
    currentUserId,
    users,
    watched
  };
};

const mdp = dispatch => ({
  addToList: videoId => dispatch(addToList(videoId)),
  deleteFromList: videoId => dispatch(deleteFromList(videoId))
});

export default connect(msp, mdp)(VideoMain);