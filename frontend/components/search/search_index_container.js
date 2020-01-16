import { searchVideos, clearVideos } from '../../actions/video_actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchIndex from './search_index';

const msp = state => ({
  videos: state.entities.videos,
  genres: state.entities.genres,
  errors: state.errors.search
});

const mdp = dispatch => ({
  searchVideos: (query) => dispatch(searchVideos(query)),
  clearVideos: () => dispatch(clearVideos())
});

export default withRouter(connect(msp, mdp)(SearchIndex));