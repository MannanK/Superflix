import React from 'react';
import { Link } from 'react-router-dom';
import VideoPlayerContainer from '../video_player/video_player_container';

export default class VideoDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      detailsShowing: true, // for the CSS slide up transition to show
      videoShowing: true,
      muted: true
    };

    this.userPressedPlay = false;
    this.closeDetails = this.closeDetails.bind(this);
    this.toggleMute = this.toggleMute.bind(this);
    this.toggleList = this.toggleList.bind(this);
  }

  componentWillUnmount() {
    let currentPathname = this.props.location.pathname;
    let currentPath = currentPathname.split("/");
    let historyPath = this.props.history.location.pathname.split("/");

    let pathIndex = currentPathname.startsWith("/browse/genre") ? 4 : 2;

    if (this.state.detailsShowing && // detail pane was showing
      !this.userPressedPlay && // user isn't trying to go to the watch page
      historyPath[1] !== "watch" && //  user isn't trying to go to the watch page
      currentPath[pathIndex] === historyPath[pathIndex]) { // user is trying to close the current details pane
      if (currentPath[1] === 'search' || currentPath[2] === 'my-list') {
        this.closeDetails(null);
      } else {
        this.closeDetails();
      }
    }

    if (historyPath[1] === currentPath[1]) {
      this.closeDetails("inRow");
    }
  }

  componentDidMount() {
    this.userPressedPlay = false;
  }

  closeDetails(inRow) {
    this.props.closeDetails(inRow);

    this.setState({
      detailsShowing: false
    });
  }

  getGenreNames() {
    const { video, genres } = this.props;

    let genreNames = video.genreIds.map(id => (
      genres[id].name
    )).slice(0, 4);

    return genreNames.join(", ");
  }

  toggleMute(e) {
    e.preventDefault();

    let videoEl = document.getElementsByClassName("details-video-player-video")[0];

    this.setState({
      muted: !this.state.muted
    });
    videoEl.muted = !videoEl.muted;
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

  render() {
    const { detailsShowing, videoShowing, muted } = this.state;
    const { video, watched } = this.props;

    let closingClass = detailsShowing ? "" : " not-showing";
    let formattedDuration = `${Math.floor(video.duration / 60)}h ${video.duration % 60}m`;

    let volumeButton = muted ? (
      <button onClick={this.toggleMute}>
        <i className="material-icons">volume_off</i>
      </button>
    ) : (
      <button onClick={this.toggleMute}>
        <i className="material-icons">volume_up</i>
      </button>
    );

    let myListButtonClass = watched ? "fas fa-check" : "fas fa-plus";

    let videoPlayer = videoShowing ? (
      <VideoPlayerContainer video={video} type="detailsPlayer" visibility="visible" />
    ) : (
      <VideoPlayerContainer video={video} type="detailsPlayer" visibility="closing" />
    );

    let pathname = this.props.location.pathname;
    let closeDetailsProp;
    if (pathname.startsWith("/search")) {
      closeDetailsProp = "closing-search";
    } else if (pathname.startsWith("/browse/genre/shows")) {
      closeDetailsProp = "closing-shows";
    } else if (pathname.startsWith("/browse/genre/movies")) {
      closeDetailsProp = "closing-movies"
    } else if (pathname.startsWith("/browse/my-list")) {
      closeDetailsProp = "closing-list"
    } else {
      closeDetailsProp = "closing";
    }

    return (
      <section className={`video-details-container${closingClass}`}>
        <button className="close-button" onClick={() => this.closeDetails(closeDetailsProp)}>
          <i className="fas fa-times"></i>
        </button>

        {/* <img className="video-logo" src={video.logo} /> */}
        <img className="video-logo" src={window.logo} />

        <section className="video-details">
          <section className="info">
            <h2>{video.title}</h2>
            <h2>{video.year}, {video.maturity_rating}, {formattedDuration}</h2>
            <h2>Genres: {this.getGenreNames()}</h2>
          </section>

          <section className="description">
            <p>{video.description}</p>
          </section>

          <section className="buttons">
            <Link to={`/watch/${video.id}`} onClick={() => this.userPressedPlay = true}>
              <button className="play">
                <i className="fas fa-play"></i> PLAY
              </button>
            </Link>

            <Link to="#">
              <button className="my-list" onClick={this.toggleList}>
                <i className={myListButtonClass}></i> MY LIST
              </button>
            </Link>
          </section>
        </section>

        <aside>
          {volumeButton}
        </aside>

        { videoPlayer }
      </section>
    );
  }
}