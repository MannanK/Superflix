import React from 'react';

export default class MediaIndex extends React.Component {
  componentDidMount() {
    this.props.fetchVideos();
  }

  render() {
    return (
      <div className="media-index-container">
        <span className="media-index-container-bg"></span>
        <h1 style={{ color: 'yellow' }}>We're on the browse page in the MediaIndexContainer!</h1>
      </div>
    );
  }
}