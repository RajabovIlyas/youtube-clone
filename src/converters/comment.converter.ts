import { CommentModel, ResCommentModel } from "@/models/comment.model";
import moment from "moment";

export const commentConverter = ({
  id,
  snippet,
  replies,
}: ResCommentModel): CommentModel => {
  const {
    topLevelComment: {
      snippet: {
        authorDisplayName,
        authorProfileImageUrl,
        textDisplay,
        publishedAt,
        likeCount,
      },
    },
  } = snippet;

  return {
    id,
    commentDisplay: textDisplay,
    comments: [],
    likeCount: Intl.NumberFormat("en", { notation: "compact" }).format(
      +likeCount,
    ),
    publishedAt: moment(publishedAt).fromNow(),
    channelName: authorDisplayName,
    channelId: snippet.channelId,
    channelImg: authorProfileImageUrl,
  };
};
