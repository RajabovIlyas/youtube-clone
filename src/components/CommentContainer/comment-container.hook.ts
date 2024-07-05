"use client";
import { ResponseComments, ResponseVideo } from "@/models/video-params.model";
import { useCallback, useEffect, useState } from "react";
import { fetcher } from "@/services/fetcher.service";
import { getCommentUrl, getVideoUrl } from "@/constants/endpoints.constant";

interface CommentContainerProps extends ResponseComments {
  videoId: string;
}

export const useCommentContainer = ({
  comments: firstComments,
  nextPageToken: nextPage,
  totalResults,
  videoId,
}: CommentContainerProps) => {
  const [comments, setComments] = useState(firstComments);
  const [nextPageToken, setNextPageToken] = useState(nextPage);
  const [loading, setLoading] = useState(false);

  const getNewComments = async () => {
    try {
      if (comments.length >= +totalResults) {
        return;
      }
      setLoading(true);
      const newData = await fetcher<ResponseComments>(
        getCommentUrl({ videoId, nextPageToken }),
      );
      setComments((comments) => [...comments, ...newData.comments]);
      setNextPageToken(newData.nextPageToken);
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  const onScroll = useCallback(async () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
      !loading
    ) {
      await getNewComments();
    }
  }, [loading]); // Dependencies

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return { comments, loading, getNewComments, totalResults };
};
