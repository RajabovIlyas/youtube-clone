import { VideoCardModel } from "@/models/video-card.model";

export interface VideoParamsModel {
  nextPageToken?: string;
  searchQuery?: string;
}

export interface ResponseVideo {
  videos: VideoCardModel[];
  nextPageToken?: string;
  totalResults: number;
}
