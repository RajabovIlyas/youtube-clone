import RecommendationCard from "@/components/RecommendationCard";
import { RecommendationVideoModel } from "@/models/video-card.model";
import {
  getVideoByMainVideo,
  getVideoInfo,
} from "@/servers/watch-video.server";
import RecommendationContainer from "@/components/RecommendationContainer";
import LoadingRecommendationCard from "@/components/RecommendationCard/LoadingRecommendationCard";
import VideoPlayer from "@/components/VideoPlayer";

interface WatchProps {
  searchParams: { v: string };
}

const LOADER_ITEMS = Array.from({ length: 8 }).map((v, i) => i);

export default async function Watch({ searchParams: { v } }: WatchProps) {
  const videoInfo = await getVideoInfo(v);

  // const recommendations = await getVideoByMainVideo(
  //   videoInfo?.videoDetails.keywords ?? [""],
  // );
  return (
    <main className="pb-5 mx-auto px-4 max-w-screen-2xl flex justify-between gap-4">
      <VideoPlayer {...videoInfo} />
      <div className="basis-1/4">
        <div className="flex flex-col gap-2">
          {LOADER_ITEMS.map((key) => (
            <LoadingRecommendationCard key={key} />
          ))}
        </div>
        {/*<RecommendationContainer {...recommendations} />*/}
      </div>
    </main>
  );
}
