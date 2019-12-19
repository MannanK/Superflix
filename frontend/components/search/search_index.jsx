import React from 'react';
import VideoRowContainer from '../videos/video_row_container';
import queryString from 'query-string';
import { isEmpty } from 'lodash';

export default class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.props.clearVideos();
  }

  componentDidMount() {
    let queryParams = queryString.parse(this.props.location.search);
    this.props.searchVideos(queryParams.q);
  }

  componentDidUpdate(prevProps) {
    let currentQuery = queryString.parse(this.props.location.search);
    let prevQuery = queryString.parse(prevProps.location.search);

    if (currentQuery.q !== prevQuery.q) {
      this.props.searchVideos(currentQuery.q);
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
            <VideoRowContainer key={i} videos={videoRow} type="search" />
          );
          videoRow = [];
        } else if (i === vidsArray.length-1) {
          videoRows.push(
            <VideoRowContainer key={i} videos={videoRow} type="search" />
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