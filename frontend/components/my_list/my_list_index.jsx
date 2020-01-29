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
      <div className="search-index-container">
        <span className="search-index-container-bg"></span>
        <div id="search-index-empty"></div>
        <div className="search-video-container">
          <section className="search-row-container">
            {myListVideos}
          </section>
        </div>
      </div>
    ) : (
      <div className="search-index-container">
        <span className="search-index-container-bg"></span>
        <div id="search-index-empty"></div>
        <div className="search-no-results-container">
          <p id="did-not-match">
            Your search for "{this.props.match.params.query}" did not have any matches.
          </p>
          <p id="suggestions">Suggestions:</p>
          <ul className="error-suggestions-list">
            <li>Try different keywords</li>
            <li>Looking for a movie or TV show?</li>
            <li>Try using a movie, TV show title, or year</li>
            <li>Try a genre, like comedy, action, Marvel, or DC</li>
          </ul>
        </div>
      </div>
    )
  }
}