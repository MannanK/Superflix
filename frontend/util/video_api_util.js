export const fetchVideos = () => (
  $.ajax({
    url: "/api/videos"
  })
);

export const fetchOnlyShows = (genreQuery) => (
  $.ajax({
    url: "/api/videos/shows",
    data: { query_params: genreQuery }
  })
);

export const fetchOnlyMovies = (genreQuery) => (
  $.ajax({
    url: "/api/videos/movies",
    data: { query_params: genreQuery }
  })
);

export const fetchListVideos = () => (
  $.ajax({
    url: "/api/videos/mylist"
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