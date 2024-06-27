import { VideoModel } from "@/models/video.model";

export type VideoPart = Pick<
  VideoModel,
  "kind" | "etag" | "id" | "contentDetails" | "statistics"
>;
export interface ResVideoPartsModel {
  kind: string;
  etag: string;
  items: VideoPart[];
  nextPageToken: string;
  prevPageToken?: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}
