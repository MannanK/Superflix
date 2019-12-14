import React from 'react';
import VideoItem from './video_item';

export default class VideoRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // originalVideos: this.props.videos,
      videos: this.props.videos, // all the videos ever in this genre
      genre: this.props.genre,
      // every time our movies to display in a scroll will go over our last movie in our state, we want to readd the rest of
      // the movies to the end of the list, so that an infinite scroll can be achieved
      oldPageNum: 0, // have prevPageNum & newPageNum? so in render we can check whether we scrolled left or right
      newPageNum: 0,
      numVideosPerScroll: 6, // make this 8? we always render 8 videos, the ones on the side are underneath the button
        // and only show a little bit. so always need to have a buffer of 18
      // state to check if either of the buttons have ever been clicked, change this state only ever once on first click
        // need this for row to no longer be padded on the left?
      currentPage: this.props.videos.slice(0, 6)
    }

    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
    this.updateVideos = this.updateVideos.bind(this);
  }

  scrollLeft(e) {
    e.preventDefault();
    const { newPageNum, videos } = this.state;

    let newVideos = this.updateVideos(videos);

    this.setState({
      oldPageNum: newPageNum,
      newPageNum: newPageNum-1,
      videos: newVideos
    });
  }

  scrollRight(e) {
    e.preventDefault();
    const { newPageNum, videos } = this.state;

    let newVideos = this.updateVideos(videos);

    this.setState({
      oldPageNum: newPageNum,
      newPageNum: newPageNum + 1,
      videos: newVideos
    });
  }

  updateVideos(videos) {
    let numMovies = this.props.videos.length;
    return (numMovies - this.state.numVideosPerScroll < 6) ? videos.concat(videos) : videos;
  }

  render() {
    const { genre } = this.props;
    const { videos, oldPageNum, newPageNum, numVideosPerScroll } = this.state;

    let videoItems = videos.map((video, i) => (
      <VideoItem key={i} video={video} genre={genre} />
    ));

    let translateStyle = oldPageNum > newPageNum ? ({
      transform: `translateX(${91.2*newPageNum}vw)`,
      transition: "all 800ms ease-out"
    }) : ({
      transform: `translateX(-${91.2*newPageNum}vw)`,
      transition: "all 800ms ease-out"
    });

    return (
      <ul className="video-row-outer">
        
        {/* if videos.length <= 6, don't show any buttons */}
        <button className="left-button" type="button" onClick={this.scrollLeft}>Go left</button>

        <ul className="video-row-inner" style={translateStyle}>
          {/* <h1 style={{ color: 'yellow' }}>VideoRow: {this.props.genre.name}</h1> */}
          {videoItems}
        </ul>

        <button className="right-button" type="button" onClick={this.scrollRight}>Go right</button>
      </ul>
    )
  }
}