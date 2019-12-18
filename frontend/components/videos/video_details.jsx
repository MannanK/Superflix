import React from 'react';
import { Link } from 'react-router-dom';
import VideoPlayerContainer from '../video_player/video_player_container';

export default class VideoDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      detailsShowing: true, // for the CSS slide up transition to show
      videoShowing: true
    };

    this.userPressedPlay = false;
    this.closeDetails = this.closeDetails.bind(this);
  }

  componentWillUnmount() {
    let historyPath = this.props.history.location.pathname.split("/");
    let currentPath = this.props.location.pathname.split("/");
    
    // debugger;

    if (this.state.detailsShowing && // detail pane was showing
        !this.userPressedPlay && // user isn't trying to go to the watch page
        historyPath[1] !== "watch" && //  user isn't trying to go to the watch page
        currentPath[2] === historyPath[2]) // user is trying to close the current details pane
      this.closeDetails();

    // maybe check if closing the current video details?

    if (historyPath[1] === currentPath[1]) {
      this.closeDetails("inRow");
    }
  }

  componentDidMount() {
    this.userPressedPlay = false;
  }

  componentDidUpdate() {
    // check if props paramsId is same as last one, if it is then dont change userPressedPlay?
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

  render() {
    const { detailsShowing, videoShowing } = this.state;
    const { video } = this.props;

    let closingClass = detailsShowing ? "" : " not-showing";
    let formattedDuration = `${Math.floor(video.duration / 60)}h ${video.duration % 60}m`;

    let videoPlayer = videoShowing ? (
      <VideoPlayerContainer type="detailsPlayer" visibility="visible" />
    ) : (
      <VideoPlayerContainer type="detailsPlayer" visibility="closing" />
    );

    return (
      <section className={`video-details-container${closingClass}`}>
        <button className="close-button" onClick={() => this.closeDetails("closing")}>
          <i className="fas fa-times"></i>
        </button>

        {/* replace this with the logo for the show, video["logo"]? */}
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

            <Link to={`/login`}>
              <button className="my-list">
                <i className="fas fa-check"></i> MY LIST
            </button>
            </Link>
          </section>
        </section>

        { videoPlayer }
      </section>
    );
  }
}