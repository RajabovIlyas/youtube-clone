import { urlForSearchVariation } from "@/constants/endpoints-api.constant";

export const getVideoWatchUrl = (id: string) => `/watch?v=${id}`;
export const getChannelPageUrl = (channelId: string) => `/channel/${channelId}`;

interface VideoUrlParams {
  nextPageToken?: string;
  searchQuery?: string;
}

interface CommentUrlParams extends Omit<VideoUrlParams, "searchQuery"> {
  videoId: string;
}

export const getVideoUrl = ({ searchQuery, nextPageToken }: VideoUrlParams) =>
  `/api/videos?&nextPageToken=${nextPageToken || ""}`;

export const getCommentUrl = ({ videoId, nextPageToken }: CommentUrlParams) =>
  `/api/comments?videoId=${videoId}&nextPageToken=${nextPageToken || ""}`;

export const getVideoForWatchUrl = (videoId: string) =>
  `/api/watch?id=${videoId}`;

export const getSearchVariation = (searchQuery: string) =>
  `/api/search?searchQuery=${searchQuery}`;
