import React from 'react';
import VideoMainContainer from './video_main_container';
import VideoRowContainer from './video_row_container';
import { isEmpty } from 'lodash';

export default class VideoIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchVideos();
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

    let videoMain = isEmpty(videos) || videosLength === 1 || videosLength !== 32 ? "" : <VideoMainContainer video={Object.values(videos)[0]} genres={genres} />;
    let videoRows = isEmpty(videos) || videosLength === 1 || videosLength !== 32 ? "" : (
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