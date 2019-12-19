import React from 'react';
import VideoMain from './video_main';
import VideoRowContainer from './video_row_container';
import { isEmpty } from 'lodash';

export default class VideoIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchVideos();
  }

  componentDidUpdate() {
    if (isEmpty(this.props.videos)) this.props.fetchVideos();
  }

  componentWillUnmount() {
    this.props.clearVideos();
  }

  render() {
    const { videos, genres } = this.props;

    let videoMain = isEmpty(videos) ? "" : <VideoMain video={Object.values(videos)[0]} genres={genres} />;
    let videoRows = isEmpty(videos) ? "" : (
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