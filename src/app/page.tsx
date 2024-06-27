import { getVideoUrl } from "@/constants/endpoints-api.constant";
import { ResVideosModel } from "@/models/video.model";
import { fetcher } from "@/services/fetcher.server";
import { videoConverter } from "@/converters/video.converter";
import VideoCard from "@/components/VideoCard";
import { VideoCardModel } from "@/models/video-card.model";

const getVideos = async (
  nextPageToken = "",
): Promise<VideoCardModel[] | undefined> => {
  try {
    const res = await fetcher<ResVideosModel>(getVideoUrl(nextPageToken, 16));

    const items = await Promise.all(res.items.map(videoConverter));

    return items;
  } catch (error) {
    if (error instanceof Error) {
      console.log("error", error.message);
    }
  }
};

export default async function Home() {
  const videos = await getVideos();

  return (
    <main className="pt-5 mx-auto px-4 max-w-screen-2xl">
      <div className="grid grid-cols-auto-fit-320 gap-3">
        {Array.isArray(videos) &&
          videos.map((video) => <VideoCard key={video.id} {...video} />)}
      </div>
    </main>
  );
}
