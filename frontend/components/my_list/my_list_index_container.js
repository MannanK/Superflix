import { fetchListVideos, clearVideos } from '../../actions/video_actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import MyListIndex from './my_list_index';

const msp = state => {
  const users = state.entities.users;
  const currentUserId = state.session.currentUserId;

  return {
    users,
    currentUserId,
    videos: state.entities.videos,
    genres: state.entities.genres,
    errors: state.errors.list
  };
};

const mdp = dispatch => ({
  fetchListVideos: () => dispatch(fetchListVideos()),
  clearVideos: () => dispatch(clearVideos())
});

export default withRouter(connect(msp, mdp)(MyListIndex));