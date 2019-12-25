import React from 'react';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';

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
    this.handleGoBack = this.handleGoBack.bind(this);
  }

  componentDidMount() {
    // if ((isEmpty(this.props.video) || this.props.video === undefined) && this.props.type === "fullPlayer") {
    if (this.props.type === "fullPlayer") {
      this.props.fetchVideo(this.props.match.params.mediaId);
    }
  }

  componentDidUpdate(prevProps) {
    // if ((isEmpty(this.props.video) || this.props.video === undefined || prevProps.type !== this.props.type) && this.props.type === "fullPlayer") {
    if (this.props.type === "fullPlayer" && prevProps.match.params.mediaId !== this.props.match.params.mediaId) {
      this.props.fetchVideo(this.props.match.params.mediaId);
    }
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

  handleGoBack(e) {
    e.preventDefault();

    this.props.history.goBack();
    // this.props.history.push("/");
  }

  renderFullPlayer() {
    const { showLinkText, mouseMoving } = this.state;
    const { video } = this.props;

    let arrow = mouseMoving ? (
      <div className="links" onMouseEnter={this.handleFocus(true)} onMouseLeave={this.handleFocus(false)}>
        <div
          className="button-link"
          onClick={this.handleGoBack}
        >
          <button className="back">
            <i className="fas fa-arrow-left"></i>
          </button>
        </div>

        {showLinkText ? <div to="/" className="a-link" onClick={this.handleGoBack}>Go Back</div> : ""}
      </div>
    ) : (
      ""
    );

    return video ? (
      <div className={`full-video-player`} onMouseMove={this.handleMouse}>
        {arrow}

        <video
          src="https://media.w3.org/2010/05/sintel/trailer.mp4"
          // src={video.url}
          controls
          className="full-video-player-video"
          type="video/mp4"
          autoPlay={true}
        >
          video player is not working!
        </video>
      </div>
    ) : "";
  }

  renderMainPlayer() {
    const { visibility, video } = this.props;

    return video ? (
      <div className={`main-video-player ${visibility}`}>
        <video
          src="https://media.w3.org/2010/05/sintel/trailer.mp4"
          // src={video.url}
          autoPlay={visibility === "visible" ? true : false}
          // muted={muted ? true : false}
          muted={true}
          className="main-video-player-video"
          type="video/mp4"
        >
          video player is not working!
        </video>
      </div>
    ) : "";
  }

  renderDetailsPlayer() {
    const { visibility, video } = this.props;

    return video ? (
      <div className={`details-video-player ${visibility}`}>
        <video
          src="https://media.w3.org/2010/05/sintel/trailer.mp4"
          // src={video.url}
          autoPlay={visibility === "visible" ? true : false} // first autoplay is true, just testing with false right now
          muted={true}
          className="details-video-player-video"
          type="video/mp4"
        >
          video player is not working!
        </video>
      </div>
    ) : "";
  }

  renderMiniPlayer() {
    const { visibility, video } = this.props;

    return video ? (
      <div className={`mini-video-player ${visibility}`}>
        <video
          src="https://media.w3.org/2010/05/sintel/trailer.mp4"
          // src={video.url}
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
    ) : "";
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