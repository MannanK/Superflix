import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import VideoRow from './video_row';

const msp = (state, ownProps) => ({

});

const mdp = dispatch => ({
  
});

export default withRouter(connect(msp, mdp)(VideoRow));