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
    return e => {
      this.setState({
        detailsHidden: value
      });
    };

    // return e => {
    //   setTimeout(() => this.setState({
    //     detailsHidden: value
    //   }), value ? 0 : 600);
    // };
  }

  render() {
    const { video } = this.props;
    const { className, detailsHidden } = this.state;

    let videoDetails = (
      <div className="video-details">
        test
      </div>
    );

    return (
      <li className={`${className}`} onMouseEnter={this.hideDetails(false)} onMouseLeave={this.hideDetails(true)}>
        <img className="video-demo-thumbnail" src={window.demoThumbnail} />

        {/* <div className="video-details" hidden={detailsHidden}>
          test
        </div> */}

        {detailsHidden ? "" : videoDetails}
      </li>
    );
  }
}