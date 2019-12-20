import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchVideo } from '../../actions/video_actions';
import VideoPlayer from './video_player';

const msp = (state, ownProps) => {
  let video;

  if (ownProps.video === undefined) {
    video = state.entities.videos[ownProps.match.params.mediaId];
  } else {
    video = ownProps.video;
  }

  return ({
    video
  });
};

const mdp = dispatch => ({
  fetchVideo: id => dispatch(fetchVideo(id))
});

export default withRouter(connect(msp, mdp)(VideoPlayer));