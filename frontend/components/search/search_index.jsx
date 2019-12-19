import React from 'react';
import queryString from 'query-string';

export default class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.props.clearVideos();
  }

  componentDidMount() {
    let queryParams = queryString.parse(this.props.location.search);
    this.props.searchVideos(queryParams.q);
  }

  render() {
    return (
      <div className="search-index-container">
        <span className="search-index-container-bg"></span>
        <div id="search-index-empty"></div>
        <div className="search-video-container">
          Inside the search component!
          query params: {this.props.location.search}
        </div>
      </div>
    );
  }
}