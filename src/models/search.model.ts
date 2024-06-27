// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&type=video&q=asdfa&pageToken=&videoDuration=medium&key=AIzaSyANMV8_U1X0_L9121282MVlDw835KUBj34

import { ThumbnailsModel } from "./thumbnails.model";

export interface SearchVideoModel {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: ThumbnailsModel;
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
  };
}

export interface ResSearchModel {
  kind: string;
  etag: string;
  nextPageToken: string;
  prevPageToken?: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: SearchVideoModel[];
}
