import React from 'react';
import VideoPlayerContainer from '../video_player/video_player_container';

export default class VideoMain extends React.Component {
  constructor(props) {
    super(props);
  }

  getGenreNames() {
    const { video, genres } = this.props;

    let genreNames = video.genreIds.map(id => (
      genres[id].name
    )).slice(0, 4);

    return genreNames.join(", ");
  }

  render() {
    const { video } = this.props;

    // return (
    //   <div className="main-video-details-container">
    //     {/* TODO replace img src with video["thumbnail"] */}
    //     <div className="video">
    //       <img className="main-video" src={window.demoThumbnail} />
    //     </div>

    //   </div>
    // );

    let formattedDuration = `${Math.floor(video.duration / 60)}h ${video.duration % 60}m`;
    let videoPlayer = <VideoPlayerContainer type="mainPlayer" visibility="visible" />;

    return (
      <section className={`main-video-details-container`}>
        {videoPlayer}

        {/* replace this with the logo for the show, video["logo"]? */}
        <img className="main-video-logo" src={window.logo} />

        <section className="main-video-details">
          <section className="info">
            <h2>{video.title}</h2>
            <h2>{video.year}, {video.maturity_rating}, {formattedDuration}</h2>
            <h2>Genres: {this.getGenreNames()}</h2>
          </section>

          <section className="description">
            <p>{video.description}</p>
          </section>

          <section className="buttons">
            <button className="play">
              <i className="fas fa-play"></i> Play
            </button>

            <button className="my-list">
              <i className="fas fa-check"></i> My List
            </button>
          </section>
        </section>
      </section>
    );
  }
}