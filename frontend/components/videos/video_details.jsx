import React from 'react';

export default class VideoDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      detailsShowing: this.props.detailsShowing
    };

    // this.closeDetails = this.closeDetails.bind(this);
  }

  render() {
    return (
      <section className="video-details-container">
        <button className="close-button" onClick={this.props.closeDetails}>
          <i className="fas fa-times"></i>
        </button>

        Inside the video details!
      </section>
    );
  }
}