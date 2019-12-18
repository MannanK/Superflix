import React from 'react';
import { Link } from 'react-router-dom';
import VideoPlayerContainer from '../video_player/video_player_container';

export default class VideoDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      detailsShowing: true,
      videoShowing: true
    };

    this.closeDetails = this.closeDetails.bind(this);
  }

  componentWillUnmount() {
    if (this.state.detailsShowing) this.closeDetails();
  }

  closeDetails(e) {
    this.props.closeDetails(e);

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
        <button className="close-button" onClick={this.closeDetails}>
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
            <Link to={`/watch/${video.id}`}>
              <button className="play">
                <i className="fas fa-play"></i> PLAY
              </button>
            </Link>

            <button className="my-list">
              <i className="fas fa-check"></i> MY LIST
            </button>
          </section>
        </section>

        { videoPlayer }
      </section>
    );
  }
}