import React from 'react';

export default class VideoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      detailsHidden: true
    };

    this.hideDetails = this.hideDetails.bind(this);
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

  render() {
    const { video, className, genres } = this.props;

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
        </div>
      </section>
    );

    return (
      <li className={`${className}`}>
        <img className="video-demo-thumbnail" src={window.demoThumbnail} />

        {/* <div className="video-details" hidden={detailsHidden}>
          test
        </div> */}

        {videoDetails}
      </li>
    );
  }
}