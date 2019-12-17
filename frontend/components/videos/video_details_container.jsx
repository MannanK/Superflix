import { connect } from 'react-redux';
import { fetchVideo } from '../../actions/video_actions';
import VideoDetails from './video_details';

const msp = (state, ownProps) => ({
  video: state.entities.videos[ownProps.match.params.movieId],
  genres: state.entities.genres
});

const mdp = dispatch => ({
  fetchVideo: id => dispatch(fetchVideo(id))
});

export default connect(msp, mdp)(VideoDetails);