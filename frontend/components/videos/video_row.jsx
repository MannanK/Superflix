import React from 'react';
import VideoItem from './video_item';

export default class VideoRow extends React.Component {
  constructor(props) {
    super(props);

    let videosLength = this.props.videos.length;

    this.state = {
      // originalVideos: this.props.videos,
      videos: this.props.videos, // all the videos ever in this genre
      genre: this.props.genre,
      // every time our movies to display in a scroll will go over our last movie in our state, we want to readd the rest of
      // the movies to the end of the list, so that an infinite scroll can be achieved
      pageNum: 0,
      numVideosPerScroll: 6, // make this 8? we always render 8 videos, the ones on the side are underneath the button
        // and only show a little bit. so always need to have a buffer of 18
      // state to check if either of the buttons have ever been clicked, change this state only ever once on first click
        // need this for row to no longer be padded on the left?
      videosRemaining: this.props.videos.length,
      resetList: false
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

    if (newVideosRemaining < 0) {
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
      if (i === 0) {
        return <VideoItem key={i} video={video} genre={genre} className="first video-item"/>
      // } else if (i === currentVideosToRender.length-1) {
      //   return <VideoItem key={i} video={video} genre={genre} className="last-item"/>
      // } else {
      } else {
        return <VideoItem key={i} video={video} genre={genre} className="video-item"/>
      }
    });

    return (
      <ul className="video-row-outer">
        <ul className="video-row-inner">
          {videoItems}
        </ul>
      </ul>
    );
  }

  renderMoreThanSixVideos(translateStyle) {
    const { videos, videosRemaining, pageNum } = this.state;
    const { genre } = this.props;
    let currentIndex = pageNum*6;
    let videoItems;

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
      <ul className="video-row-outer">
        {/* if videos.length <= 6, don't show any buttons */}
        <button className="left-button" type="button" onClick={this.scrollLeft}>Go left</button>

        <ul className="video-row-inner" style={translateStyle}>
          {videoItems}
        </ul>

        <button className="right-button" type="button" onClick={this.scrollRight}>Go right</button>
      </ul >
    );
  }

  render() {
    const { genre } = this.props;
    const { videos, pageNum } = this.state;

    let translateStyle = pageNum === 0 ? ({
      transform: `none`,
      transition: "all 400ms ease-out"
    }) : ({
      transform: `translateX(-${100 * pageNum}%)`,
      transition: "all 800ms ease-out"
    });

    return videos.length <= 6 ? (
      this.renderLessThanSixVideos()
    ) : (
      this.renderMoreThanSixVideos(translateStyle)
    )
  }
}