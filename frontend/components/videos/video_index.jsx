import React from 'react';
import VideoMain from './video_main';
import VideoRow from './video_row';
import { isEmpty } from 'lodash';

export default class VideoIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchVideos();
  }

  render() {
    const { videos, genres } = this.props;

    let videoMain = isEmpty(videos) ? "" : <VideoMain video={Object.values(videos)[0]} />;
    let videoRows = isEmpty(videos) ? "" : (
      Object.values(genres).map(genre => {
        let videoIds = genre["videoIds"];
        let genreVideos = [];

        videoIds.forEach(id => {
          genreVideos.push(videos[id]);
        });

        return <VideoRow key={genre.id} videos={genreVideos} genre={genre} />
      })
    );

    return (
      <div className="video-index-container">
        <span className="video-index-container-bg"></span>
        { videoMain }
        { videoRows }
      </div>
    );
  }
}