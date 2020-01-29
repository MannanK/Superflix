import React from 'react';
import VideoRowContainer from '../videos/video_row_container';
import { isEmpty, isEqual } from 'lodash';

export default class MyListIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.props.clearVideos();
  }

  componentDidMount() {
    this.props.fetchListVideos();
  }

  componentDidUpdate(prevProps) {
    let currentListVideoIds = this.props.users[this.props.currentUserId].listVideoIds;
    let prevListVideoIds = prevProps.users[this.props.currentUserId].listVideoIds;

    if (!isEqual(currentListVideoIds, prevListVideoIds)) {
      this.props.clearVideos();
      this.props.fetchListVideos();
    }
  }

  render() {
    const { videos, errors } = this.props;

    let myListVideos = [];

    if (!isEmpty(videos)) {
      let vidsArray = Object.values(videos);
      let videoRow = [];

      for(let i=0; i < vidsArray.length; i++) {
        videoRow.push(vidsArray[i]);

        if ((i + 1) % 6 === 0) {
          myListVideos.push(
            <VideoRowContainer key={i} index={i} videos={videoRow} type="my-list" />
          );
          videoRow = [];
        } else if (i === vidsArray.length-1) {
          myListVideos.push(
            <VideoRowContainer key={i} index={i} videos={videoRow} type="my-list" />
          );
        }
      }
    }

    return errors.length === 0 ? (
      <div className="my-list-index-container">
        <span className="my-list-index-container-bg"></span>
        <div id="my-list-index-empty">
          <div className="my-list-header">My List</div>
        </div>
        <div className="my-list-video-container">
          <section className="my-list-row-container">
            {myListVideos}
          </section>
        </div>
      </div>
    ) : (
      <div className="my-list-index-container">
        <span className="my-list-index-container-bg"></span>
        <div id="my-list-index-empty">
          <div className="my-list-header">My List</div>
        </div>
        <div className="my-list-no-results-container">
          <p id="no-titles">
            You haven't added any titles to your list yet.
          </p>
        </div>
      </div>
    )
  }
}