import { connect } from 'react-redux';
import { fetchVideos } from '../../actions/video_actions';
import MediaIndex from './media_index';

const msp = state => ({

});

const mdp = dispatch => ({
  fetchVideos: () => dispatch(fetchVideos())
});

export default connect(msp, mdp)(MediaIndex);