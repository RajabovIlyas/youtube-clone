import {
  getVideoByMainVideo,
  getVideoComment,
  getVideoInfo,
} from "@/servers/watch-video.server";
import RecommendationContainer from "@/components/RecommendationContainer";
import VideoPlayer from "@/components/VideoPlayer";
import CommentContainer from "@/components/CommentContainer";

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
