import React from 'react';

export default class VideoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className={`${this.props.className}`}>
        <img className="video-demo-thumbnail" src={window.demoThumbnail} />
        <div className="video-text">{this.props.video.title}</div>
      </li>
    );
  }
}