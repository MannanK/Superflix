export const addToList = (videoId) => (
  $.ajax({
    method: 'POST',
    url: '/api/list_videos',
    data: { video_id: videoId }
  })
);

export const deleteFromList = (videoId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/list_videos/${videoId}`
  })
);