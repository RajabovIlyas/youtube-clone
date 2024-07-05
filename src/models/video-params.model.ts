import {
  RecommendationVideoModel,
  VideoCardModel,
} from "@/models/video-card.model";
import { CommentModel } from "@/models/comment.model";

export interface VideoParamsModel {
  nextPageToken?: string;
  searchQuery?: string;
}

export interface ResponseVideo {
  videos: VideoCardModel[];
  nextPageToken?: string;
  totalResults: number;
}

export interface ResponseRecommendations extends Omit<ResponseVideo, "videos"> {
  videos: RecommendationVideoModel[];
}

export interface ResponseComments
  extends Omit<ResponseVideo, "videos" | "totalResults"> {
  comments: CommentModel[];
  totalResults: string;
}
