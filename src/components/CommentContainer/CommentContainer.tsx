"use client";
import { FC } from "react";
import SortIcon from "@/components/icons/SortIcon";
import { ResponseComments } from "@/models/video-params.model";
import VideoComment from "@/components/VideoComment";
import { useCommentContainer } from "@/components/CommentContainer/comment-container.hook";
import LoadingVideoComment from "@/components/VideoComment/LoadingVideoComment";
import { LOADER_ITEMS } from "@/constants/default.constant";

interface CommentContainerProps extends ResponseComments {
  videoId: string;
}

const CommentContainer: FC<CommentContainerProps> = (props) => {
  const { comments, totalResults, loading } = useCommentContainer(props);
  return (
    <>
      <div className="flex gap-6 items-center">
        <span className="font-bold text-base">{totalResults} Comments</span>
        <button className="flex items-center gap-1 text-base hover:underline">
          <SortIcon /> Sort by
        </button>
      </div>
      <div className="flex flex-col gap-3">
        {comments.map((comment) => (
          <VideoComment key={comment.id} {...comment} />
        ))}

        {loading && (
          <div className="flex flex-col gap-3 animate-pulse">
            {LOADER_ITEMS.map((key) => (
              <LoadingVideoComment key={key} />
            ))}
          </div>
        )}
        <LoadingVideoComment />
      </div>
    </>
  );
};

export default CommentContainer;
