import React from 'react';

export default class VideoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { video, className } = this.props;

    return (
      <li className={`${className}`}>
        <img className="video-demo-thumbnail" src={window.demoThumbnail} />
        <div className="video-text">{video.title}</div>
      </li>
    );
  }
}