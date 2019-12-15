import React from 'react';
import VideoItem from './video_item';

export default class VideoRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: this.props.videos, // all the videos ever in this genre
      genre: this.props.genre,
      pageNum: 0,
      videosRemaining: this.props.videos.length,
    }
    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
  }

  scrollLeft(e) {
    e.preventDefault();
    const { pageNum, videosRemaining } = this.state;

    this.setState({
      pageNum: pageNum-1,
      videosRemaining: videosRemaining + 6
    });
  }

  scrollRight(e) {
    e.preventDefault();
    const { pageNum, videosRemaining } = this.state;
    let newVideosRemaining = videosRemaining-6;
    let newPageNum;

    if (newVideosRemaining <= 0) {
      newPageNum = 0;
      newVideosRemaining = this.props.videos.length;
    } else {
      newPageNum = pageNum+1;
    }

    this.setState({
      pageNum: newPageNum,
      videosRemaining: newVideosRemaining
    });
  }

  renderLessThanSixVideos() {
    const { videos } = this.state;
    const { genre } = this.props;
    
    let videoItems = videos.map((video, i) => {
      let className = "video-item";
      if (i === 0) className = "first " + className;

      return <VideoItem key={i} video={video} className={className} />
    });
    
    return (
      <>
        <h1 className="video-row-genre">{genre.name}</h1>
        <ul className="video-row-outer">
          {/* <h1 className="video-row-genre">{genre.name}</h1> */}
          <ul className="video-row-inner">
            {videoItems}
          </ul>
        </ul>
      </>
    );
  }

  renderMoreThanSixVideos() {
    const { videos, videosRemaining, pageNum } = this.state;
    const { genre } = this.props;
    let currentIndex = pageNum*6;
    let videoItems;

    let translateStyle = pageNum === 0 ? ({
      transform: `none`,
      transition: "all 400ms ease-out"
    }) : ({
      transform: `translate3d(-${100 * pageNum}%, 0, 0)`,
      transition: "all 800ms ease-out"
    });

    if (videosRemaining > 0) {
      videoItems = videos.map((video, i) => {
        if (i === currentIndex) {
          return <VideoItem key={i} video={video} genre={genre} className="first video-item" />
        } else if (i === currentIndex + 5) {
          return <VideoItem key={i} video={video} genre={genre} className="last video-item" />
        } else if (i < currentIndex || i > currentIndex + 5) {
          return <VideoItem key={i} video={video} genre={genre} className="off-screen video-item" />
        } else {
          return <VideoItem key={i} video={video} genre={genre} className="video-item" />
        }
      });
    } else {
      videoItems = videos.map((video, i) => {
        if (i === currentIndex) {
          return <VideoItem key={i} video={video} genre={genre} className="first video-item" />
        } else if (i < currentIndex) {
          return <VideoItem key={i} video={video} genre={genre} className="off-screen video-item" />
        } else {
          return <VideoItem key={i} video={video} genre={genre} className="video-item" />
        }
      });
    }

    return (
      <>
        <h1 className="video-row-genre">{genre.name}</h1>
        <ul className="video-row-outer">
          {/* if videos.length <= 6, don't show any buttons */}
          {(pageNum !== 0) ? <button className="left-button" type="button" onClick={this.scrollLeft}>Go left</button> : ""}

          <ul className="video-row-inner" style={translateStyle}>
            {videoItems}
          </ul>

          <button className="right-button" type="button" onClick={this.scrollRight}>Go right</button>
        </ul >
      </>
    );
  }

  render() {
    const { genre } = this.props;
    const { videos } = this.state;

    return videos.length <= 6 ? (
      this.renderLessThanSixVideos()
    ) : (
      this.renderMoreThanSixVideos()
    )
  }
}