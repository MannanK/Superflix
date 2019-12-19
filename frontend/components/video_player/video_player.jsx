import React from 'react';
import { Link } from 'react-router-dom';

export default class VideoPlayer extends React.Component {
  constructor(props) {
    super(props); // props tell us what type of player we are

    this.state = {
      showLinkText: false,
      mouseMoving: false
    }

    this.clearArrow;

    this.handleFocus = this.handleFocus.bind(this);
    this.handleMouse = this.handleMouse.bind(this);
  }

  componentWillUnmount() {
    clearTimeout(this.clearArrow);
  }

  handleMouse(e) {
    e.preventDefault();

    this.setState({
      mouseMoving: true
    });

    let showArrow = () => {
      clearTimeout(this.clearArrow);
      this.clearArrow = setTimeout(() => this.setState({ mouseMoving: false }), 3500);
    };

    showArrow();
  }

  handleFocus(value) {
    return e => {
      this.setState({
        showLinkText: value
      });
    };
  }

  renderFullPlayer() {
    const { showLinkText, mouseMoving } = this.state;

    let arrow = mouseMoving ? (
      <div className="links" onMouseEnter={this.handleFocus(true)} onMouseLeave={this.handleFocus(false)}>
        <Link
          to={"/browse"}
          className="button-link"
        >
          <button className="back">
            <i className="fas fa-arrow-left"></i>
          </button>
        </Link>

        {showLinkText ? <Link to="/browse" className="a-link">Back to Browse</Link> : ""}
      </div>
    ) : (
      ""
    );

    return (
      <div className={`full-video-player`} onMouseMove={this.handleMouse}>
        { arrow }

        <video
          src="https://media.w3.org/2010/05/sintel/trailer.mp4"
          controls
          className="full-video-player-video"
          type="video/mp4"
          autoPlay={true}
        >
          video player is not working!
        </video>
      </div>
    );
  }

  renderMainPlayer() {
    const { visibility } = this.props;

    return (
      <div className={`main-video-player ${visibility}`}>
        <video
          src="https://media.w3.org/2010/05/sintel/trailer.mp4"
          autoPlay={visibility === "visible" ? true : false} // first autoplay is true, just testing with false right now
          muted={true}
          loop={true}
          className="main-video-player-video"
          type="video/mp4"
        >
          video player is not working!
        </video>
      </div>
    );
  }

  renderDetailsPlayer() {
    const { visibility } = this.props;

    return (
      <div className={`details-video-player ${visibility}`}>
        <video
          src="https://media.w3.org/2010/05/sintel/trailer.mp4"
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
      case "mainPlayer":
        return this.renderMainPlayer();
      case "fullPlayer":
        return this.renderFullPlayer();
      default:
        return <div>Oh no, this is an error..</div>
    }
  }
}