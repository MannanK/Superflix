import React from 'react';
import VideoItemContainer from './video_item_container';
import VideoDetailsContainer from './video_details_container';
import { Route } from 'react-router-dom';

export default class VideoRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: this.props.videos, // all the videos
      genre: this.props.genre,
      pageNum: 0,
      videosRemaining: this.props.videos.length,
      showButtonArrow: false,
      detailsHidden: {id: null, value: true}, // the thumbnail details for the item being hovered over
    }

    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
    this.toggleArrow = this.toggleArrow.bind(this);
    this.playVideo = this.playVideo.bind(this);
    this.stopVideo = this.stopVideo.bind(this);
    this.closeDetails = this.closeDetails.bind(this);
  }

  toggleArrow(e) {
    this.setState({
      showButtonArrow: !this.state.showButtonArrow
    });
  }

  scrollLeft(e) {
    e.preventDefault();
    const { pageNum, videosRemaining, showButtonArrow } = this.state;

    this.setState({
      pageNum: pageNum-1,
      videosRemaining: videosRemaining + 6,
      showButtonArrow: pageNum === 0 ? false : showButtonArrow
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

  playVideo(id) {
    return e => {
      let video = e.currentTarget.childNodes[1].childNodes[0];
      let isPlaying = video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2;
      
      if (!isPlaying) {
        video.play();

        this.setState({ detailsHidden: { id: id, value: false } });
      }
    };
  }

  stopVideo(id) {
    return e => {
      let video = e.currentTarget.childNodes[1].childNodes[0];
      let isPlaying = video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2;

      if (isPlaying) {
        video.pause();

        this.setState({ detailsHidden: { id: null, value: false } });
      }
    };
  }

  closeDetails(closePressed) {
    this.setState({
      detailsHidden: {id: null, value: true}
    });

    // DO THIS ONLY IF CLOSE BUTTON IS PRESSED
    if (closePressed === undefined || closePressed === "closing") {
      setTimeout(() => {
        this.props.history.push("/browse");
      }, 600);
    } else if (closePressed === "closing-search") {
      setTimeout(() => {
        this.props.history.push(`/search/${this.props.match.params.query}`);
      }, 600);
    } else if (closePressed === "closing-shows") {
      setTimeout(() => {
        this.props.history.push(`/browse/genre/shows`);
      }, 600);
    } else if (closePressed === "closing-movies") {
      setTimeout(() => {
        this.props.history.push(`/browse/genre/movies`);
      }, 600);
    } 
  }

  renderSearchVideos() {
    const { videos, detailsHidden } = this.state;
    const { index } = this.props;

    let videoItems = videos.map((video, i) => {
      let className = "video-item";
      if (i === 0) className = "first " + className;
      if (i === 5) className = "last " + className;

      return <VideoItemContainer
        key={i}
        myRow={index}
        video={video}
        className={className}
        type="search"
        playVideo={this.playVideo(video.id)}
        stopVideo={this.stopVideo(video.id)}
        detailsHidden={detailsHidden}
      />;
    });

    return (
      <>
        <div className="individual-search-row-container">
          <ul className="video-row-outer">
            <ul className="video-row-inner">
              {videoItems}
            </ul>
          </ul>

          <Route
            path={`/search/${this.props.match.params.query}/${index}/:movieId`}
            render={(props) => <VideoDetailsContainer closeDetails={this.closeDetails} {...props} />}
          />
        </div>
      </>
    );
  }

  renderLessThanSixVideos() {
    const { videos, detailsHidden } = this.state;
    const { genre, type } = this.props;

    let route;

    switch (type) {
      case "SHOWS":
        route = "/browse/genre/shows";
        break;
      case "MOVIES":
        route = "/browse/genre/movies";
        break;
      default:
        route = "/browse";
        break;
    }
    
    let videoItems = videos.map((video, i) => {
      let className = "video-item";
      if (i === 0) className = "first " + className;
      if (i === 5) className = "last " + className;

      return <VideoItemContainer
        key={i}
        video={video}
        className={className}
        type={type}
        myGenre={genre}
        playVideo={this.playVideo(video.id)}
        stopVideo={this.stopVideo(video.id)}
        detailsHidden={detailsHidden}
      />;
    });
    
    return (
      <>
        <h1 className="video-row-genre">{genre.name}</h1>
        <div className="individual-row-container">
          <ul className="video-row-outer">
            <ul className="video-row-inner">
              {videoItems}
            </ul>
          </ul>

          <Route
            exact path={`${route}/${genre.name.toLowerCase()}/:movieId`}
            render={(props) => <VideoDetailsContainer closeDetails={this.closeDetails} {...props} />}
          />
        </div>
      </>
    );
  }

  renderMoreThanSixVideos() {
    const { videos, videosRemaining, pageNum, showButtonArrow, detailsHidden } = this.state;
    const { genre, type } = this.props;
    let currentIndex = pageNum*6;
    let videoItems;

    let route;

    switch (type) {
      case "SHOWS":
        route = "/browse/genre/shows";
        break;
      case "MOVIES":
        route = "/browse/genre/movies";
        break;
      default:
        route = "/browse";
        break;
    }

    let translateStyle = pageNum === 0 ? ({
      transform: `none`,
      transition: "all 400ms ease-out"
    }) : ({
      transform: `translate3d(-${100 * pageNum}%, 0, 0)`,
      transition: "all 800ms ease-out"
    });

    if (videosRemaining > 0) {
      videoItems = videos.map((video, i) => {
        let className;

        if (i === currentIndex) {
          className = "first video-item";
        } else if (i === currentIndex + 5) {
          className = "last video-item"
        } else if (i < currentIndex || i > currentIndex + 5) {
          className = "off-screen video-item"
        } else {
          className = "video-item"
        }

        return <VideoItemContainer
          key={i}
          video={video}
          className={className}
          type={type}
          myGenre={genre}
          playVideo={this.playVideo(video.id)}
          stopVideo={this.stopVideo(video.id)}
          detailsHidden={detailsHidden} />;
      });
    } else {
      let className;

      videoItems = videos.map((video, i) => {
        if (i === currentIndex) {
          className = "first video-item"
        } else if (i < currentIndex) {
          className = "off-screen video-item"
        } else {
          className = "video-item"
        }

        return <VideoItemContainer
          key={i} video={video}
          className={className}
          type={type}
          myGenre={genre}
          playVideo={this.playVideo(video.id)}
          stopVideo={this.stopVideo(video.id)}
          detailsHidden={detailsHidden} />;
      });
    }

    let leftButton = (
      <button
        className="left row-button"
        type="button"
        onClick={this.scrollLeft}
        onMouseEnter={this.toggleArrow}
        onMouseLeave={this.toggleArrow}
      >
        {showButtonArrow ? <i className="fas fa-chevron-left"></i> : ""}
      </button>
    );

    let rightButton = (
      <button
        className="right row-button"
        type="button"
        onClick={this.scrollRight}
        onMouseEnter={this.toggleArrow}
        onMouseLeave={this.toggleArrow}
      >
        {showButtonArrow ? <i className="fas fa-chevron-right"></i> : ""}
      </button>
    );

    return (
      <>
        <h1 className="video-row-genre">{genre.name}</h1>
        <div className="individual-row-container">
          <ul className="video-row-outer">
            {/* if videos.length <= 6, don't show any buttons */}
            {pageNum !== 0 ? leftButton : ""}

            <ul className="video-row-inner" style={translateStyle}>
              {videoItems}
            </ul>

            {rightButton}
          </ul >
          
          <Route
            exact path={`${route}/${genre.name.toLowerCase()}/:movieId`}
            render={(props) => <VideoDetailsContainer closeDetails={this.closeDetails} {...props} />}
          />
        </div>
      </>
    );
  }

  render() {
    const { videos } = this.state;
    
    if (this.props.type === "search") return this.renderSearchVideos();

    return videos.length <= 6 ? (
      this.renderLessThanSixVideos()
    ) : (
      this.renderMoreThanSixVideos()
    )
  }
}