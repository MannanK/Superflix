import React from 'react';
import VideoItem from './video_item';

export default class VideoRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: this.props.videos,
      genre: this.props.genre,
      // every time our movies to display in a scroll will go over our last movie in our state, we want to readd the rest of
      // the movies to the end of the list, so that an infinite scroll can be achieved
      pageNum: 0,
      numMoviesPerScroll: 6,
      // state to check if either of the buttons have ever been clicked, change this state only ever once on first click
        // need this for row to no longer be padded on the left?
    }

    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
    this.updateVideos = this.updateVideos.bind(this);
  }

  scrollLeft(e) {
    e.preventDefault();
    const { pageNum, videos } = this.state;
  }

  scrollRight() {

  }

  updateVideos(videos) {
    return (videos.length - this.state.lastMovie < 12) ? movies.concat(movies) : movies;
  }

  render() {
    const { genre } = this.props;
    const { videos, pageNum, numMoviesPerScroll } = this.state;

    let videoItems = videos.map(video => (
      <VideoItem key={video.id} video={video} />
    ));

    return (
      <ul className="video-row-outer">
        
        {/* if movies.length <= 6, don't show any buttons */}
        <button className="left-button" type="button" onClick={this.scrollLeft}>Go left</button>

        <ul className="video-row-inner">
          {/* <h1 style={{ color: 'yellow' }}>VideoRow: {this.props.genre.name}</h1> */}
          {videoItems}
        </ul>

        <button className="right-button" type="button" onClick={this.scrollRight}>Go right</button>
      </ul>
    )
  }
}