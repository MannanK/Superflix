import React from 'react';

export default class VideoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1 style={{ color: 'purple' }}>VideoItem: { this.props.video.title }</h1>
    );
  }
}