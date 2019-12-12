import React from 'react';
import VideoMain from './video_main';
import { isEmpty } from 'lodash';

export default class VideoIndex extends React.Component {
  componentDidMount() {
    this.props.fetchVideos();
  }

  render() {
    const { videos } = this.props;

    let videoMain = isEmpty(videos) ? "" : <VideoMain video={Object.values(videos)[0]} />;
    let videoRows = isEmpty(videos) ? "" : (
      "a"
    );

    return (
      <div className="video-index-container">
        <span className="video-index-container-bg"></span>
        { videoMain }
        { videoRows }
        <h1 style={{ color: 'yellow' }}>We're on the browse page in the VideoIndexContainer!</h1>
      </div>
    );
  }
}