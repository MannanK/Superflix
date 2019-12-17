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
    this.props.closeDetails(e);

    this.setState({
      detailsShowing: false
    });
  }

  render() {
    const { detailsShowing } = this.state;

    let closingClass = detailsShowing ? "" : " not-showing";

    return (
      <section className={`video-details-container${closingClass}`}>
        <button className="close-button" onClick={this.closeDetails}>
          <i className="fas fa-times"></i>
        </button>

        <img src={window.logo} />
      </section>
    );
  }
}