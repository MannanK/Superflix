import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import VideoItem from './video_item';

const msp = state => ({
  genres: state.entities.genres
});

export default withRouter(connect(msp)(VideoItem));