import React from 'react';
import VideoItem from './video_item';

export default class VideoRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { videos } = this.props;

    let videoItems = videos.map(video => (
      <VideoItem key={video.id} video={video} />
    ));

    return (
      <div className="video-row">
        <h1 style={{ color: 'yellow' }}>VideoRow: { this.props.genre.name }</h1>
        { videoItems }
      </div>
    )
  }
}