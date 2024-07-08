export const BASE_URL = "https://youtube.googleapis.com/youtube/v3";

export const YOUTUBE_URL = "https://www.youtube.com";

export const getVideoUrl = (nextPageToken?: string, maxResult = 8) =>
  `${BASE_URL}/videos?&part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=RU&maxResults=${maxResult}&` +
  `pageToken=${nextPageToken ?? ""}&key=${process.env.GOOGLE_API_KEY_4}`;

export const getVideoByIdUrl = (videoId: string) =>
  `${BASE_URL}/videos?&part=snippet,contentDetails,statistics&id=${videoId}` +
  `&key=${process.env.GOOGLE_API_KEY_4}`;

export const getChannelUrl = (channelId: string) =>
  `${BASE_URL}/channels?part=snippet&id=${channelId}&key=${process.env.GOOGLE_API_KEY_10}`;

export const getChannelWithStatisticUrl = (channelId: string) =>
  `${BASE_URL}/channels?part=snippet,statistics&id=${channelId}&key=${process.env.GOOGLE_API_KEY_10}`;

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

export const getVideoByMainVideoUrl = (videoTitle: string, pageToken = "") =>
  `${BASE_URL}/search?part=snippet&maxResults=8&type=video&order=viewCount&videoDuration=medium&order=rating` +
  `&q=${videoTitle}&key=${process.env.GOOGLE_API_KEY_98}`;
export const getCommentByVideoUrl = (videoId: string, pageToken = "") =>
  `${BASE_URL}/commentThreads?part=snippet,replies&order=relevance&textFormat=plainText&maxResults=8` +
  `&pageToken=${pageToken}&videoId=${videoId}&key=${process.env.GOOGLE_API_KEY_1}`;

export const videoInfoUrl = `${YOUTUBE_URL}/youtubei/v1/player`;

export const getVideoInfoBody = (videoId: string) => ({
  videoId: videoId,
  context: {
    client: { clientName: "WEB", clientVersion: "2.20230810.05.00" },
  },
});

export const urlForSearchVariation = (searchQuery: string) =>
  `https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchQuery}`;
