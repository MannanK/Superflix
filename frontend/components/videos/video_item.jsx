import React from 'react';
import VideoPlayerContainer from '../video_player/video_player_container';
import { Link } from 'react-router-dom';

export default class VideoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //when item is a background item, show the respective background details
        // (play button or down arrow)
      backgroundDetails: false
    };

    // https://stackoverflow.com/questions/50466734/delay-react-onmouseover-event

    this.timeoutForHover = false;

    this.toggleList = this.toggleList.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
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

  toggleList(e) {
    e.preventDefault();
    const { watched, video } = this.props;

    if (watched) {
      this.props.deleteFromList(video.id);

      if (this.props.location.pathname.startsWith("/browse/my-list")) {
        this.props.history.push(`/browse/my-list`);
      }
    } else {
      this.props.addToList(video.id);
    }
  }

  renderBackgroundItem() {
    const { video, myGenre, location, type, myRow } = this.props;
    const { backgroundDetails } = this.state;

    let videoIndex;
    if (type === "search" || type === "my-list") {
      videoIndex = 4;
    } else if (type === "SHOWS" || type === "MOVIES") {
      videoIndex = 5;
    } else {
      videoIndex = 3;
    }
    const isCurrentItem = location.pathname.split("/")[videoIndex] == video.id;

    let params = this.props.match.params;
    let className = isCurrentItem ? (
      "main inbackground-video-item"
    ) : (
      "inbackground-video-item"
    );

    let playIcon = isCurrentItem ? (
      <Link to={`/watch/${video.id}`} className="background-details">
        <div className="background-play-icon"><i className="far fa-play-circle"></i></div>
      </Link>
    ) : "";

    let dropdownArrow = "";
    if (!isCurrentItem) {
      if (type === "search") {
        dropdownArrow = <Link to={`/search/${params.query}/${myRow}/${video.id}`} className="background-link" >
          <div className="background-down-arrow">
            <i className="fas fa-chevron-down"></i>
          </div>
        </Link>;
      } else if (type === "my-list") {
        dropdownArrow = <Link to={`/browse/my-list/${myRow}/${video.id}`} className="background-link" >
          <div className="background-down-arrow">
            <i className="fas fa-chevron-down"></i>
          </div>
        </Link>;
      } else {
        let route;

        if (type === "SHOWS") {
          route = "/browse/genre/shows";
        } else if (type === "MOVIES") {
          route = "/browse/genre/movies";
        } else {
          route = "/browse";
        }

        dropdownArrow = <Link to={`${route}/${myGenre.name.toLowerCase()}/${video.id}`} className="background-link" >
          <div className="background-down-arrow">
            <i className="fas fa-chevron-down"></i>
          </div>
        </Link>
      }
    }

    let details = backgroundDetails ? (
      <section className="background-details-container">
        { playIcon }
        { dropdownArrow }
      </section>
    ) : "";

    return (
      <li className={`${className}`} onMouseEnter={this.showBackgroundDetails(true)} onMouseLeave={this.showBackgroundDetails(false)}>
        {/* <img className="video-demo-thumbnail visible" src={video.thumbnail} /> */}
        <img className="video-demo-thumbnail visible" src={window.demoThumbnail} />
        {details}
      </li>
    );
  }

  handleMouseEnter(e) {
    e.persist();
    e.stopPropagation();

    this.timeoutForHover = setTimeout(() => {
      this.props.playVideo(e);
    }, 400);

    // this.props.playVideo(e);
  }

  handleMouseLeave(e) {
    clearTimeout(this.timeoutForHover);

    this.props.stopVideo(e);
  }

  renderThumbnail(className) {
    const { video, myGenre, detailsHidden, type, myRow, watched } = this.props;

    let formattedDuration = `${Math.floor(video.duration / 60)}h ${video.duration % 60}m`;
    let params = this.props.match.params;

    let downArrowLink;
    if (type === "search") {
      downArrowLink = <Link to={`/search/${params.query}/${myRow}/${video.id}`}>
        <div className="details-down-arrow">
          <i className="fas fa-chevron-down"></i>
        </div>
      </Link>;
    } else if (type === "my-list") {
      downArrowLink = <Link to={`/browse/my-list/${myRow}/${video.id}`}>
        <div className="details-down-arrow">
          <i className="fas fa-chevron-down"></i>
        </div>
      </Link>;
    } else {
      let route;

      if (type === "SHOWS") {
        route = "/browse/genre/shows";
      } else if (type === "MOVIES") {
        route = "/browse/genre/movies";
      } else {
        route = "/browse";
      }

      downArrowLink = <Link to={`${route}/${myGenre.name.toLowerCase()}/${video.id}`}>
        <div className="details-down-arrow">
          <i className="fas fa-chevron-down"></i>
        </div>
      </Link >
    }

    let myListButtonClass = watched ? "fas fa-check" : "fas fa-plus";

    let videoDetails = (
      <section className="thumbnail-details-container">
        <div className="thumbnail-details">
          <Link to={`/watch/${video.id}`}>
            <div className="details-play-icon"><i className="far fa-play-circle"></i></div>
          </Link>
          <h3>{video.title}</h3>
          <h2>{video.maturity_rating}, {formattedDuration}</h2>
          <h2>{this.getGenreNames()}</h2>
          <Link to="#" className="item-list-link">
            <button className="item-list-button" onClick={this.toggleList}>
              <i className={myListButtonClass}></i>
            </button>
          </Link>
        </div>

        { downArrowLink }
      </section>
    );

    return (
      <li className={`${className}`} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        {/* currently the visibility isnt changing because the detailsHidden.id changes after 400ms because of setTimeout */}
        {(detailsHidden.id !== video.id) ? (
          <>
            {/* <img className="video-demo-thumbnail visible" src={video.thumbnail}/> */}
            <img className={`video-demo-thumbnail visible`} src={window.demoThumbnail} /> 
            <VideoPlayerContainer video={video} type="miniplayer" visibility="invisible" />
          </>
        ) : (
          <>
            {/* <img className="video-demo-thumbnail visible" src={video.thumbnail} /> */}
            <img className={`video-demo-thumbnail invisible`} src={window.demoThumbnail} />
            <VideoPlayerContainer video={video} type="miniplayer" visibility="visible" />
          </>
        )}

        {videoDetails}
      </li>
    );
  }

  render() {
    const { location, myGenre, type } = this.props;
    let { className, myRow } = this.props;

    let pathname = location.pathname;

    if ((pathname === "/browse" ||
      pathname === "/browse/" ||
      pathname === "/browse/genre/shows" ||
      pathname === "/browse/genre/shows/" ||
      pathname === "/browse/genre/movies" ||
      pathname === "/browse/genre/movies/" ||
      pathname === "/browse/my-list" ||
      pathname === "/browse/my-list/" ||
      pathname === "/search" ||
      pathname === "/search/"
    )) {
      className = className;
    } else {
      let rowIndex;
      let genreIndex;

      if (type === 'SHOWS' || type === 'MOVIES') {
        rowIndex = 5;
        genreIndex = 4;
      } else {
        rowIndex = 3;
        genreIndex = 2;
      }

      if (pathname.split("/")[rowIndex] == myRow ||
          myGenre && pathname.split("/")[genreIndex] === myGenre.name.toLowerCase()) {
        className = "inbackground-video-item";
      } else {
        className = className;
      }
    };

    return className === "inbackground-video-item" ? (
      this.renderBackgroundItem()
    ) : (
      this.renderThumbnail(className)
    );
  }
}