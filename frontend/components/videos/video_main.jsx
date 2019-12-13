import React from 'react';

export default class VideoMain extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { video } = this.props;

    return (
      <div className="video-main-container">
        {/*<h1 style={{ color: 'yellow' }}>We're on the browse page in the VideoMain!</h1> */}

        {/* TODO replace img src with video["thumbnail"] */}
        <div className="video">
          <img className="main-video" src={window.demoThumbnail} />
        </div>
        <div className="test">Click here to play your video!</div>
      </div>
    );
  }
}