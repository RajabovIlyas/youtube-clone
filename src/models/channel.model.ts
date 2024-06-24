// https://youtube.googleapis.com/youtube/vnumber/channels?part=snippet&id=UCnumberWXzTgknumberncJXnumbereOxHElCg&key=AIzaSyByblBnumberPzBhpc

export interface ResChannelItemModel {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    title: string;
    description: string;
    customUrl: string;
    publishedAt: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
    };
    localized: {
      title: string;
      description: string;
    };
    country: string;
  };
}

export interface ResChannelModel {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: ResChannelItemModel[];
}
