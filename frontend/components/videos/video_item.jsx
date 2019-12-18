import React from 'react';
import VideoPlayerContainer from '../video_player/video_player_container';
import { Link } from 'react-router-dom';

export default class VideoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundDetails: false
    };
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

  renderBackgroundItem() {
    const { video, myGenre, location } = this.props;
    const { backgroundDetails } = this.state;
    const isCurrentItem = location.pathname.split("/")[3] == video.id;

    let className = isCurrentItem ? (
      "main inbackground-video-item"
    ) : (
      "inbackground-video-item"
    );

    // let playIcon = isCurrentItem ? (
    //   <div className="background-details">
    //     <div className="background-play-icon"><i className="far fa-play-circle"></i></div>
    //   </div>
    // ) : "";

    let playIcon = isCurrentItem ? (
      <Link to={`/watch/${video.id}`} className="background-details">
        <div className="background-play-icon"><i className="far fa-play-circle"></i></div>
      </Link>
    ) : "";

    let dropdownArrow = isCurrentItem ? "" : (
      <Link to={`/browse/${myGenre.name.toLowerCase()}/${video.id}`} className="background-link">
        <div className="background-down-arrow">
          <i className="fas fa-chevron-down"></i>
        </div>
      </Link>
    );

    let details = backgroundDetails ? (
      <section className="background-details-container">
        { playIcon }
        { dropdownArrow }
      </section>
    ) : "";

    return (
      <li className={`${className}`} onMouseEnter={this.showBackgroundDetails(true)} onMouseLeave={this.showBackgroundDetails(false)}>
        <img className="video-demo-thumbnail visible" src={window.demoThumbnail} />
        {details}
      </li>
    );
  }

  renderThumbnail(className) {
    const { video, myGenre, detailsHidden } = this.props;

    let formattedDuration = `${Math.floor(video.duration / 60)}h ${video.duration % 60}m`;

    let videoDetails = (
      <section className="thumbnail-details-container">
        <div className="thumbnail-details">
          <Link to={`/watch/${video.id}`}>
            <div className="details-play-icon"><i className="far fa-play-circle"></i></div>
          </Link>
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
      <li className={`${className}`} onMouseEnter={this.props.playVideo} onMouseLeave={this.props.stopVideo}>
        {(detailsHidden.id !== video.id) ? (
          // WE WANT TO ENTER THIS CONDITION TO FIX THE ISSUE OF THUMBNAILS STILL PLAYING AFTER ROWS BEING SWITCHED
          <>
            <img className="video-demo-thumbnail visible" src={window.demoThumbnail} /> 
            <VideoPlayerContainer type="miniplayer" visibility="invisible" />
          </>
        ) : (
          <>
            <img className="video-demo-thumbnail invisible" src={window.demoThumbnail} />
            <VideoPlayerContainer type="miniplayer" visibility="visible" />
          </>
        )}

        {videoDetails}
      </li>
    );
  }

  render() {
    const { location, myGenre } = this.props;
    let { className } = this.props;

    className = (location.pathname === "/browse" || location.pathname === "/browse/") ? (
      className
    ) : (
      location.pathname.split("/")[2] === myGenre.name.toLowerCase() ? (
        "inbackground-video-item"
      ) : (
        className
      )
    );

    return className === "inbackground-video-item" ? (
      this.renderBackgroundItem()
    ) : (
      this.renderThumbnail(className)
    );
  }
}