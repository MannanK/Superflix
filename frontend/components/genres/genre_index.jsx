import React from 'react';
import VideoMain from '../videos/video_main';
import VideoRowContainer from '../videos/video_row_container';
import { isEmpty } from 'lodash';

export default class GenreIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // fetch based on type prop or location.pathname?
    // need to account for only shows URL or specific shows/<genre> url?

    if (this.props.type === "SHOWS") {
      this.props.fetchOnlyShows();
    } else if (this.props.type === "MOVIES") {
      this.props.fetchOnlyMovies();
    }
  }

  componentDidUpdate(prevProps) {
    if (isEmpty(this.props.videos) ||
      Object.keys(this.props.videos).length === 1 ||
      prevProps.location.pathname.startsWith("watch")
    ) this.props.fetchVideos();
  }

  componentWillUnmount() {
    this.props.clearVideos();
  }

  render() {
    const { videos, genres } = this.props;
    const videosLength = Object.keys(videos).length;

    let videoMain = isEmpty(videos) || videosLength === 1 ? "" : <VideoMain video={Object.values(videos)[0]} genres={genres} />;
    let videoRows = isEmpty(videos) || videosLength === 1 ? "" : (
      Object.values(genres).map(genre => {
        if (genre.name !== "Marvel" && genre.name !== "DC") {
          let videoIds = genre["videoIds"];
          let genreVideos = [];

          videoIds.forEach(id => {
            genreVideos.push(videos[id]);
          });

          return <VideoRowContainer key={genre.id} videos={genreVideos} genre={genre} />
        }
      })
    );

    return (
      <div className="video-index-container">
        <span className="video-index-container-bg"></span>
        <div id="video-main-empty">
          {videoMain}
        </div>
        <section className="video-row-container">
          {videoRows}
        </section>
      </div>
    );
  }
}