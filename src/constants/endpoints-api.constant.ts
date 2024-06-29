export const BASE_URL = "https://youtube.googleapis.com/youtube/v3";

export const getVideoUrl = (nextPageToken?: string, maxResult = 8) =>
  `${BASE_URL}/videos?&part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=RU&maxResults=${maxResult}&` +
  `pageToken=${nextPageToken ?? ""}&key=${process.env.GOOGLE_API_KEY_4}`;

export const getChannelUrl = (channelId: string) =>
  `${BASE_URL}/channels?part=snippet&id=${channelId}&key=${process.env.GOOGLE_API_KEY_10}`;

export const getSearchUrl = (
  search_query: string,
  pageToken = "",
  maxResult = 8,
) =>
  `${BASE_URL}/search?part=snippet&type=video&videoDuration=medium` +
  `&maxResults=${maxResult}&pageToken=${pageToken}&q=${search_query}&key=${process.env.GOOGLE_API_KEY_7}`;

export const getVideoPartUrl = (idVideo: string, pageToken = "") =>
  `${BASE_URL}/videos?part=contentDetails, statistics` +
  `&id=${idVideo}&key=${process.env.GOOGLE_API_KEY_3}`;
