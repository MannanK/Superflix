# README
![alt text][logo]

[logo]: https://raw.githubusercontent.com/MannanK/Superflix/master/app/assets/images/superflix_logo.png "Superflix Logo"

## [**_Link to Superflix_**](https://superflix-aa.herokuapp.com/)

### Basic Overview

Superflix is a Netflix clone made specifically for comic-book movie/show lovers and superhero lovers. Like Netflix, Superflix allows you to stream videos (in this case, trailers for shows and movies) at any time you please, as long as you have registered for an account on the site. The app was made using **Ruby on Rails** for the backend, **PostgreSQL** for the backend database, **React/Redux** for the frontend, and **Amazon AWS S3** for cloud storage of image and video files.

![alt text][mainpage]

[mainpage]: https://raw.githubusercontent.com/MannanK/Superflix/master/app/assets/images/mainpage_1.png "Main page"

### Features

* User authentication on the frontend and backend (implemented using **session tokens** in the backend and **bootstrapping** + **protected/auth routes** in the frontend
* Ability to login as a demo user if signing up is too much of a hassle and you want to access the site's full features
* Ability to watch videos from anywhere on the site
* Expanded details are available for each movie/show in the database, including information like the media's duration, maturity rating, year of release, and a lengthy description that gives you a preview of what the movie or show is about
* A search feature which searches the database based on title and/or year matches; like Netflix, the search bar activates only after the user has stopped typing for a certain amount of time (implemented using **debounce**)

### Netflix Carousel and Hovering over Videos

![alt text][mainpage_2]

[mainpage_2]: https://github.com/MannanK/Superflix/blob/master/app/assets/images/mainpage_2.png?raw=true "Main page 2"

* A video starts playing once the user has hovered over a thumbnail (using event handlers **onMouseEnter** and **onMouseLeave**)
* Using CSS3 transitions, thumbnails scale by a factor of 1.9 when hovered over, while also pushing the thumbnails on both sides in the same row so they aren't scaled over and blocked (with the use of **translate3d** on the X axis)
* Buttons are displayed on both sides of the screen if more items are present in the row, allowing you to "scroll" left or right; if the end of the list is reached, you are redirected back to the beginning

```
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
```

```
const { showButtonArrow } = this.state;

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
```

```
.video-item:hover {
  transform: scale(1.9) !important;
  transition-delay: 400ms;
}
```

```
.first.video-item:hover ~ .video-item {	
  transform: translate3d(90%, 0, 0);	
  transition-delay: 400ms;	
}
```

### Details Pane

![alt text][detailspage_1]

[detailspage_1]: https://github.com/MannanK/Superflix/blob/master/app/assets/images/detailspage_1.png?raw=true "Details pane"

* A user can click on the down arrow in any thumbnail to see extended details about each video (a new component is rendered at a new route; each details pane can be accessed directly via the route **/browse/{genre-name}/{video-id}**)
* Upon the pane opening, the rest of the items in the current row get grayed out (using **rgba** values), but are still accessible
* **Keyframe animations** are present to make the pane slide down smoothly rather than appear abruptly
* Once inside the details pane, a larger version of the video plays, the video's logo is displayed, along with its full description and genres list
* As with everywhere else on the website, a play button is present to watch the video in fullscreen (also accessible directly via the route **/watch/{video-id}**)

```
<Route
  exact path={`/browse/${genre.name.toLowerCase()}/:movieId`}
  render={(props) => <VideoDetailsContainer closeDetails={this.closeDetails} {...props} />}
/>
```

```
@keyframes slideDown {
  from {
    height: 0;
    opacity: 0;
  }

  to {
    max-height: 61vh;
    opacity: 1;
  }
}
```

### Search

* A new component is rendered that displays the search results, and unrenders as soon as the search bar becomes empty again
* A request is fired off to the server once the user hasn't typed for 450ms, using a debounced function
* Each specific search results page can be accessed directly via the route **/search?q={query}**

```
constructor(props) {
  ...

  this.debouncedMakeRequest = debounce(this.debouncedMakeRequest, 450);
}
```

```
handleInput(e) {
  let query = e.currentTarget.value;

  this.setState({
    query
  });

  if (query === "") {
    this.setState({ query: "" });
    this.props.history.push("/");
  } else {
    this.debouncedMakeRequest(query);
  }
}
```

```
debouncedMakeRequest(query) {
  this.props.history.push({
    pathname: '/search',
    search: `?q=${query}`
  });
}
```

### Future Features

* Ability to have a watchlist of videos specific to each user
* Sound buttons to unmute videos on the main page and details pane, as well as start/stop buttons
* Separate genres pages to further filter based on Marvel or DC videos, and even more specific genres thereafter (action, animated, comedy, etc).
* Multiple profiles per user
* Customized video player