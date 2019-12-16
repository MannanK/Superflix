import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import VideoDetails from './video_details';

const msp = (state, ownProps) => ({

});

const mdp = dispatch => ({

});

export default withRouter(connect(msp, mdp)(VideoDetails));