import React from 'react';

export default class VideoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      className: this.props.className,
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
    const { video } = this.props;
    const { className, detailsHidden } = this.state;

    let videoDetails = (
      <section className="video-details">
        <h3>{video.title}</h3>
        <p>{video.maturity_rating}, {video.year}</p>
        {/* button chevron down */}
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