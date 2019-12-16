import React from 'react';

export default class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);

    // props tell us if we're currently a mini player or not
    this.playVideo = this.playVideo.bind(this);
    this.pauseVideo = this.pauseVideo.bind(this);
  }

  playVideo(e) {

  }

  pauseVideo(e) {

  }

  renderMiniPlayer() {
    console.log("got here");
    const { visibility } = this.props;

    return (
      <div className={`mini-video-player ${visibility}`}>
        {/* <img className="video-demo-thumbnail" src={window.logo} /> */}
        {/* onMouseOver, play the video, onMouseLeave, stop the video */}
        <video
          src="http://techslides.com/demos/sample-videos/small.mp4"
          autoPlay={visibility === "invisible" ? false : true}
          muted={true}
          className="mini-video-player-video"
          type="video/mp4"
        >
          video player is not working!
        </video>
      </div>
    );
  }

  render() {
    const { miniPlayer } = this.props;

    return miniPlayer ? this.renderMiniPlayer() : <div>test</div>;
  }
}