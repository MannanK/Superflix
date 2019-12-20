import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchVideo } from '../../actions/video_actions';
import VideoPlayer from './video_player';

const msp = (state, ownProps) => ({
  video: state.entities.videos[ownProps.match.params.mediaId]
});

const mdp = dispatch => ({
  fetchVideo: id => dispatch(fetchVideo(id))
});

export default withRouter(connect(msp, mdp)(VideoPlayer));