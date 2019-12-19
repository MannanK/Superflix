import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import VideoPlayer from './video_player';

const msp = (state, ownProps) => ({
  
});

const mdp = dispatch => ({

});

export default withRouter(connect(msp, mdp)(VideoPlayer));