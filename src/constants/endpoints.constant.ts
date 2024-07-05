export const getVideoWatchUrl = (id: string) => `/watch?v=${id}`;
export const getChannelPageUrl = (channelId: string) => `/channel/${channelId}`;

interface VideoUrlParams {
  nextPageToken?: string;
  searchQuery?: string;
}

export const getVideoUrl = ({ searchQuery, nextPageToken }: VideoUrlParams) =>
  `/api/videos?&nextPageToken=${nextPageToken || ""}`;

export const getVideoForWatchUrl = (videoId: string) =>
  `/api/watch?id=${videoId}`;
