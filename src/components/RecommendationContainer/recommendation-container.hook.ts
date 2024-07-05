import { useCallback, useEffect, useState } from "react";
import {
  ResponseRecommendations,
  ResponseVideo,
  VideoParamsModel,
} from "@/models/video-params.model";
import { RecommendationVideoModel } from "@/models/video-card.model";

interface VideoContainerProps extends ResponseRecommendations {}
export const useRecommendationContainer = ({
  videos: firstVideos,
  nextPageToken: nextPage,
  totalResults,
}: VideoContainerProps) => {
  const [videos, setVideos] = useState<RecommendationVideoModel[]>(firstVideos);
  const [nextPageToken, setNextPageToken] = useState(nextPage);
  const [loading, setLoading] = useState(false);

  const getNewVideo = async () => {
    try {
      // if (videos.length >= totalResults) {
      //   return;
      // }
      // setLoading(true);
      // const newData = await fetcher<ResponseVideo>(
      //   getVideoUrl({ searchQuery, nextPageToken }),
      // );
      // setVideos((videos) => [...videos, ...newData.videos]);
      // setNextPageToken(newData.nextPageToken);
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
      await getNewVideo();
    }
  }, [loading]); // Dependencies

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return { videos, loading, getNewVideo };
};
