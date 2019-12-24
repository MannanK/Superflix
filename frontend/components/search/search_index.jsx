import React from 'react';
import VideoRowContainer from '../videos/video_row_container';
import { isEmpty } from 'lodash';

export default class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.props.clearVideos();
  }

  componentDidMount() {
    let queryParams = this.props.match.params.query;
    this.props.searchVideos(queryParams);
  }

  componentDidUpdate(prevProps) {
    let currentQuery = this.props.match.params.query;
    let prevQuery = prevProps.match.params.query;

    if (currentQuery !== prevQuery) {
      this.props.searchVideos(currentQuery);
    }
  }

  render() {
    const { videos } = this.props;

    let videoRows = [];

    if (!isEmpty(videos)) {
      let vidsArray = Object.values(videos);
      let videoRow = [];

      for(let i=0; i < vidsArray.length; i++) {
        videoRow.push(vidsArray[i]);

        if ((i + 1) % 6 === 0) {
          videoRows.push(
            <VideoRowContainer key={i} index={i} videos={videoRow} type="search" />
          );
          videoRow = [];
        } else if (i === vidsArray.length-1) {
          videoRows.push(
            <VideoRowContainer key={i} index={i} videos={videoRow} type="search" />
          );
        }
      }
    }

    if (videoRows.length === 0) videoRows = "";

    return (
      <div className="search-index-container">
        <span className="search-index-container-bg"></span>
        <div id="search-index-empty"></div>
        <div className="search-video-container">
          <section className="search-row-container">
            {videoRows}
          </section>
        </div>
      </div>
    );
  }
}