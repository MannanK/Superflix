import React from 'react';

export default class VideoDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      detailsShowing: true
    };

    this.closeDetails = this.closeDetails.bind(this);
  }

  closeDetails(e) {
    e.preventDefault();

    this.setState({
      detailsShowing: false
    });

    setTimeout(() => {
      this.props.history.push("/browse");
    }, 400);
  }

  render() {
    return (
      <section className="video-details-container">
        <button className="close-button" onClick={this.closeDetails}>
          <i className="fas fa-times"></i>
        </button>

        Inside the video details!
      </section>
    );
  }
}