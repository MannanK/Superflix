import React from 'react';

export default class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);

    // props tell us what type of player we are
  }

  renderDetailsPlayer() {
    const { visibility } = this.props;

    return (
      <div className={`details-video-player ${visibility}`}>
        {/* <img className="video-demo-thumbnail" src={window.logo} /> */}
        {/* onMouseOver, play the video, onMouseLeave, stop the video */}
        <video
          src="http://techslides.com/demos/sample-videos/small.mp4"
          autoPlay={visibility === "visible" ? true : false} // first autoplay is true, just testing with false right now
          muted={true}
          loop={true}
          className="details-video-player-video"
          type="video/mp4"
        >
          video player is not working!
        </video>
      </div>
    );
  }

  renderMiniPlayer() {
    const { visibility } = this.props;

    return (
      <div className={`mini-video-player ${visibility}`}>
        {/* <img className="video-demo-thumbnail" src={window.logo} /> */}
        {/* onMouseOver, play the video, onMouseLeave, stop the video */}
        <video
          src="https://media.w3.org/2010/05/sintel/trailer.mp4"
          autoPlay={visibility === "invisible" ? false : true}
          muted={true}
          loop={true}
          className="mini-video-player-video"
          type="video/mp4"
          preload="none"
        >
          video player is not working!
        </video>
      </div>
    );
  }

  render() {
    const { type } = this.props;

    switch (type) {
      case "miniplayer":
        return this.renderMiniPlayer()
      case "detailsPlayer":
        return this.renderDetailsPlayer();
      default:
        return <div>Oh no, this is an error..</div>
    }
  }
}