export interface ResCommentModel {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    channelId: string;
    videoId: string;
    topLevelComment: {
      kind: string;
      etag: string;
      id: string;
      snippet: {
        channelId: string;
        videoId: string;
        textDisplay: string;
        textOriginal: string;
        authorDisplayName: string;
        authorProfileImageUrl: string;
        authorChannelUrl: string;
        authorChannelId: {
          value: string;
        };
        canRate: true;
        viewerRating: string;
        likeCount: number;
        publishedAt: string;
        updatedAt: string;
      };
    };
    canReply: boolean;
    totalReplyCount: number;
    isPublic: boolean;
  };
  replies: {
    comments: Pick<ResCommentModel, "replies">[];
  };
}

export interface ResComments {
  kind: string;
  etag: string;
  nextPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: ResCommentModel[];
}

export interface CommentModel {
  id: string;
  publishedAt: string;
  likeCount: string;
  channelName: string;
  channelImg: string;
  channelId: string;
  commentDisplay: string;
  comments: Omit<CommentModel, "comments">[];
}
