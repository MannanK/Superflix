import { connect } from 'react-redux';
import { fetchVideos } from '../../actions/video_actions';
import VideoIndex from './video_index';

const msp = state => ({
  videos: state.entities.videos,
  genres: state.entities.genres
});

const mdp = dispatch => ({
  fetchVideos: () => dispatch(fetchVideos())
});

export default connect(msp, mdp)(VideoIndex);