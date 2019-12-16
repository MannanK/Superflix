import React from 'react';
import VideoPlayerContainer from '../video_player/video_player_container';
import { Link } from 'react-router-dom';

export default class VideoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      detailsHidden: true,
      backgroundDetails: false
    };

    this.hideDetails = this.hideDetails.bind(this);
    this.playVideo = this.playVideo.bind(this);
    this.stopVideo = this.stopVideo.bind(this);
  }

  hideDetails(value) {
    return e => {
      setTimeout(() => this.setState({
        detailsHidden: value
      }), value ? 0 : 300);
    };
  }

  playVideo(e) {
    let video = e.currentTarget.childNodes[1].childNodes[0];
    video.play();

    setTimeout(this.setState({
      detailsHidden: false
    }), 400);
  }

  stopVideo(e) {
    let video = e.currentTarget.childNodes[1].childNodes[0];
    video.pause();

    this.setState({
      detailsHidden: true
    });
  }

  getGenreNames() {
    const { video, genres } = this.props;

    let genreNames = video.genreIds.map(id => (
      genres[id].name
    )).slice(0, 3);

    return genreNames.join(" • ");
  }

  showBackgroundDetails(value) {
    return e => {
      this.setState({
        backgroundDetails: value
      });
    };
  }

  renderBackgroundItem(className) {
    const { video, myGenre } = this.props;
    const { backgroundDetails } = this.state;

    let videoDetails = backgroundDetails ? (
      <section className="background-details-container">
        <div className="background-details">
          <div className="background-play-icon"><i className="far fa-play-circle"></i></div>
        </div>

        <Link to={`/browse/${myGenre.name.toLowerCase()}/${video.id}`}>
          <div className="background-down-arrow">
            <i className="fas fa-chevron-down"></i>
          </div>
        </Link>
      </section>
    ) : "";

    return (
      <li className={`${className}`} onMouseEnter={this.showBackgroundDetails(true)} onMouseLeave={this.showBackgroundDetails(false)}>
        <img className="video-demo-thumbnail visible" src={window.demoThumbnail} />
        {videoDetails}
      </li>
    );
  }

  renderThumbnail(className) {
    const { video, myGenre } = this.props;
    const { detailsHidden } = this.state;

    let formattedDuration = `${Math.floor(video.duration / 60)}h ${video.duration % 60}m`;

    let videoDetails = (
      <section className="thumbnail-details-container">
        <div className="thumbnail-details">
          <div className="details-play-icon"><i className="far fa-play-circle"></i></div>
          <h3>{video.title}</h3>
          <h2>{video.maturity_rating}, {formattedDuration}</h2>
          <h2>{this.getGenreNames()}</h2>
        </div>

        <Link to={`/browse/${myGenre.name.toLowerCase()}/${video.id}`}>
          <div className="details-down-arrow">
            <i className="fas fa-chevron-down"></i>
          </div>
        </Link>
      </section>
    );

    return (
      <li className={`${className}`} onMouseEnter={this.playVideo} onMouseLeave={this.stopVideo}>
        {detailsHidden ? (
          <>
            <img className="video-demo-thumbnail visible" src={window.demoThumbnail} />
            <VideoPlayerContainer miniPlayer={true} visibility="invisible" />
          </>
        ) : (
            <>
              <img className="video-demo-thumbnail invisible" src={window.demoThumbnail} />
              <VideoPlayerContainer miniPlayer={true} visibility="visible" />
            </>
          )}

        {videoDetails}
      </li>
    );
  }

  render() {
    const { location } = this.props;
    let { className } = this.props;

    className = (location.pathname === "/browse" || location.pathname === "/browse/") ? (
      className
    ) : (
      "inbackground-video-item"
    );

    return className === "inbackground-video-item" ? (
      this.renderBackgroundItem(className)
    ) : (
      this.renderThumbnail(className)
    );
  }
}