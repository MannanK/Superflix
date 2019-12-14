import React from 'react';

export default class VideoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="video-item">
        <img className="video-demo-thumbnail" src={window.demoThumbnail} />
        <div className="video-text">{this.props.genre.name}</div>
      </li>
    );
  }
}