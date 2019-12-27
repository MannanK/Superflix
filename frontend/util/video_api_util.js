export const fetchVideos = () => (
  $.ajax({
    url: "/api/videos"
  })
);

export const fetchOnlyShows = () => (
  $.ajax({
    url: "/api/videos/shows"
  })
);

export const fetchOnlyMovies = () => (
  $.ajax({
    url: "/api/videos/movies"
  })
);

export const fetchVideo = (id) => (
  $.ajax({
    url: `/api/videos/${id}`
  })
);

export const searchVideos = (query) => (
  $.ajax({
    url: '/api/videos/search',
    data: { query_params : query }
  })
);