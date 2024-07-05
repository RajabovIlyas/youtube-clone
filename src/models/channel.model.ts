// https://youtube.googleapis.com/youtube/vnumber/channels?part=snippet&id=UCnumberWXzTgknumberncJXnumbereOxHElCg&key=AIzaSyByblBnumberPzBhpc

import { ThumbnailsModel } from "@/models/thumbnails.model";
import { StatisticsModel } from "@/models/statistics.model";

export interface ResChannelItemModel {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    title: string;
    description: string;
    customUrl: string;
    publishedAt: string;
    thumbnails: ThumbnailsModel;
    localized: {
      title: string;
      description: string;
    };
    country: string;
  };
  statistics: StatisticsModel;
}

export interface ResChannelModel {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: Omit<ResChannelItemModel, "statistics">[];
}

export interface ResChannelWithStatisticModel {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: ResChannelItemModel[];
}
