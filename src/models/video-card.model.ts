export interface VideoCardModel {
  id: string;
  img: string;
  title: string;
  channelId: string;
  channelName: string;
  channelImg: string;
  description: string;
  time: string;
  views: string;
  publishedAt: string;
}

export type RecommendationVideoModel = Omit<
  VideoCardModel,
  "channelImg" | "description"
>;

export type VideoWatchModel = Omit<VideoCardModel, "img"> & {
  likes: string;
  channelFollowers: string;
};
