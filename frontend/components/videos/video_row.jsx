import React from 'react';
import VideoItem from './video_item';

export default class VideoRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: this.props.videos,
      genre: this.props.genre
      // state to check if either of the buttons have ever been clicked, change this state only ever once on first click
        // need this for row to no longer be padded on the left?
    }
  }

  render() {
    const { videos } = this.props;

    let videoItems = videos.map(video => (
      <VideoItem key={video.id} video={video} />
    ));

    return (
      <ul className="video-row-outer">
        {/* button goes here */}
        <button className="left-button" type="button">Go left</button>

        <ul className="video-row-inner">
          {/* <h1 style={{ color: 'yellow' }}>VideoRow: {this.props.genre.name}</h1> */}
          {videoItems}
        </ul>

        <button className="right-button" type="button">Go right</button>

        {/* button goes here */}
      </ul>
    )
  }
}