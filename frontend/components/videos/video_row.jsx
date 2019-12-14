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
      pageNum: 0,
      numVideosPerScroll: 6, // make this 8? we always render 8 videos, the ones on the side are underneath the button
        // and only show a little bit. so always need to have a buffer of 18
      // state to check if either of the buttons have ever been clicked, change this state only ever once on first click
        // need this for row to no longer be padded on the left?
      currentVideosToRender: this.props.videos.slice(0, 12)
    }

    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
    this.updateVideos = this.updateVideos.bind(this);
  }

  scrollLeft(e) {
    e.preventDefault();
    const { pageNum, videos } = this.state;

    let newVideos = this.updateVideos(videos);

    this.setState({
      pageNum: pageNum-1,
      videos: newVideos
    });
  }

  scrollRight(e) {
    e.preventDefault();
    const { pageNum, currentVideosToRender } = this.state;

    let newVideos = this.updateVideos(currentVideosToRender);

    this.setState({
      pageNum: pageNum + 1,
      currentVideosToRender: newVideos
    });
  }

  updateVideos(videos) {
    // let numMovies = this.props.videos.length;
    // return (numMovies - this.state.numVideosPerScroll < 6) ? videos.concat(videos) : videos;

    let prevVideos = this.state.currentVideosToRender.slice(0, 6);
    let currentVideos = this.state.currentVideosToRender.slice(6, 12);
    
  }

  renderLessThanSixVideos() {
    const { currentVideosToRender } = this.state;
    const { genre } = this.props;

    let videoItems = currentVideosToRender.map((video, i) => {
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
    const { currentVideosToRender } = this.state;
    const { genre } = this.props;
    let length = currentVideosToRender.length;

    let videoItems = currentVideosToRender.map((video, i) => {
      if (length <= 12 ? i === 0 : i === 6) {
        return <VideoItem key={i} video={video} genre={genre} className="first video-item" />
      } else if (length <= 12 ? i === 5 : i === 11) {
        return <VideoItem key={i} video={video} genre={genre} className="last video-item" />
      } else if (length <= 12 ? i > 5 : i > 11) {
        return <VideoItem key={i} video={video} genre={genre} className="off-screen video-item" />
      } else {
        return <VideoItem key={i} video={video} genre={genre} className="video-item" />
      }
    });

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
    const { currentVideosToRender, pageNum, numVideosPerScroll } = this.state;

    console.log(pageNum);

    // let translateStyle = pageNum > oldPageNum ? ({
    //   transform: `translateX(-${100*pageNum}%)`,
    //   transition: "all 800ms ease-out"
    // }) : ({
    //   transform: `translateX(${100*oldPageNum}%)`,
    //   transition: "all 800ms ease-out"
    // });

    let translateStyle = {
      transform: `translateX(-${100*pageNum}%)`,
      transition: "all 800ms ease-out"
    };

    return currentVideosToRender.length <= 6 ? (
      this.renderLessThanSixVideos()
    ) : (
      this.renderMoreThanSixVideos(translateStyle)
    )
  }
}