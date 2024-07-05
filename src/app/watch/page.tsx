import RecommendationCard from "@/components/RecommendationCard";
import { RecommendationVideoModel } from "@/models/video-card.model";
import {
  getVideoByMainVideo,
  getVideoComment,
  getVideoInfo,
} from "@/servers/watch-video.server";
import RecommendationContainer from "@/components/RecommendationContainer";
import LoadingRecommendationCard from "@/components/RecommendationCard/LoadingRecommendationCard";
import VideoPlayer from "@/components/VideoPlayer";
import CommentContainer from "@/components/CommentContainer";
import { LOADER_ITEMS } from "@/constants/default.constant";
import LoadingVideoComment from "@/components/VideoComment/LoadingVideoComment";

interface WatchProps {
  searchParams: { v: string };
}

export default async function Watch({ searchParams: { v } }: WatchProps) {
  const videoInfo = await getVideoInfo(v);

  const recommendations = await getVideoByMainVideo(
    videoInfo?.keywords ?? [""],
  );

  const comments = await getVideoComment(v);
  return (
    <main className="pb-5 mx-auto px-4 max-w-screen-2xl flex justify-between gap-4">
      <div className="w-full flex flex-col gap-4">
        <VideoPlayer {...videoInfo} />
        <CommentContainer
          {...comments}
          videoId={v}
          totalResults={videoInfo.commentCount}
        />
      </div>
      <div className="basis-1/4">
        <RecommendationContainer {...recommendations} />
      </div>
    </main>
  );
}
