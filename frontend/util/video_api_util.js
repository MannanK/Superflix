export const fetchVideos = () => (
  $.ajax({
    url: "/api/videos"
  })
);

export const fetchVideo = (id) => (
  $.ajax({
    url: `/api/videos/${id}`
  })
);