import { connect } from 'react-redux';
import { fetchVideos, clearVideos } from '../../actions/video_actions';
import VideoIndex from './video_index';

const msp = state => ({
  videos: state.entities.videos,
  genres: state.entities.genres
});

const mdp = dispatch => ({
  fetchVideos: () => dispatch(fetchVideos()),
  clearVideos: () => dispatch(clearVideos())
});

export default connect(msp, mdp)(VideoIndex);