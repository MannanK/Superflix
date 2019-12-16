import React from 'react';
import VideoPlayerContainer from '../video_player/video_player_container';

export default class VideoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      detailsHidden: true
    };

    this.hideDetails = this.hideDetails.bind(this);
    this.playVideo = this.playVideo.bind(this);
    this.stopVideo = this.stopVideo.bind(this);
  }

  hideDetails(value) {
    // return e => {
    //   this.setState({
    //     detailsHidden: value
    //   });
    // };

    return e => {
      setTimeout(() => this.setState({
        detailsHidden: value
      }), value ? 0 : 300);
    };
  }

  playVideo(e) {
    let video = e.currentTarget.childNodes[1].childNodes[0];
    video.play();

    setTimeout(this.setState({
      detailsHidden: false
    }), 400);
  }

  stopVideo(e) {
    let video = e.currentTarget.childNodes[1].childNodes[0];
    video.pause();

    this.setState({
      detailsHidden: true
    });
  }

  render() {
    const { video, className, genres } = this.props;
    const { detailsHidden } = this.state;

    let formattedDuration = `${Math.floor(video.duration / 60)}h ${video.duration % 60}m`;

    let genreNames = video.genreIds.map(id => (
      genres[id].name
    )).slice(0,3);
    genreNames = genreNames.join(" • ");

    let videoDetails = (
      <section className="video-details-container">
        <div className="video-details">
          <div className="details-play-icon"><i className="far fa-play-circle"></i></div>
          <h3>{video.title}</h3>
          <h2>{video.maturity_rating}, {formattedDuration}</h2>
          <h2>{genreNames}</h2>
        </div>
        
        <div className="details-down-arrow">
          <i className="fas fa-chevron-down"></i>
          {/* This will be a link that renders a new component on the same page with
          more details about the video, doesn't redirect to a new page */}
        </div>
      </section>
    );

    return (
      <li className={`${className}`} onMouseEnter={this.playVideo} onMouseLeave={this.stopVideo}>
        {detailsHidden ? (
          <>
            <img className="video-demo-thumbnail visible" src={window.demoThumbnail} />
            <VideoPlayerContainer miniPlayer={true} visibility="invisible"/>
          </>
        ) : (
          <>
            <img className="video-demo-thumbnail invisible" src={window.demoThumbnail}/>
            <VideoPlayerContainer miniPlayer={true} visibility="visible" />
          </>
        )}

        {/* <div className="video-details" hidden={detailsHidden}>
          test
        </div> */}

        {videoDetails}
      </li>
    );
  }
}