import { connect } from 'react-redux';
import { fetchOnlyShows, fetchOnlyMovies, clearVideos } from '../../actions/video_actions';
import GenreIndex from './genre_index';

const msp = state => ({
  videos: state.entities.videos,
  genres: state.entities.genres
});

const mdp = dispatch => ({
  fetchOnlyShows: () => dispatch(fetchOnlyShows()),
  fetchOnlyMovies: () => dispatch(fetchOnlyMovies()),
  clearVideos: () => dispatch(clearVideos())
});

export default connect(msp, mdp)(GenreIndex);