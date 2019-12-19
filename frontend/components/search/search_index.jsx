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
    debugger;
    
    let queryParams = queryString.parse(this.props.location.search);
    this.props.searchVideos(queryParams.q);
  }

  componentDidUpdate(prevProps) {
    debugger;
    let currentQuery = queryString.parse(this.props.location.search);
    let prevQuery = queryString.parse(prevProps.location.search);

    if (currentQuery.q !== prevQuery.q) {
      this.props.searchVideos(currentQuery.q);
    }
  }

  render() {
    debugger;

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