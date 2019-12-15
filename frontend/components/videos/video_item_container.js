import { connect } from 'react-redux';
import VideoItem from './video_item';

const msp = state => ({
  genres: state.entities.genres
});

export default connect(msp)(VideoItem);