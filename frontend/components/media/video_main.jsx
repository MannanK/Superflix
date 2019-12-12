import React from 'react';

export default class VideoMain extends React.Component {
  constructor(props) {
    super(props);

    console.log( this.props.video )
  }

  render() {
    const { video } = this.props;

    return (
      <div className="video-main-container">
        {/*<h1 style={{ color: 'yellow' }}>We're on the browse page in the VideoMain!</h1> */}

        {/* TODO replace img src with video["thumbnail"] */}
        <img className="main-video" src={window.demoThumbnail} />
      </div>
    );
  }
}