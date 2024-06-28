import { getSearchUrl, getVideoUrl } from "@/constants/endpoints-api.constant";
import { ResVideosModel } from "@/models/video.model";
import { fetcher } from "@/services/fetcher.server";
import { videoConverter } from "@/converters/video.converter";
import VideoCard from "@/components/VideoCard";
import { VideoCardModel } from "@/models/video-card.model";
import { ResSearchModel } from "@/models/search.model";
import { searchVideoConverter } from "@/converters/search-video.converter";

interface HomeProps {
  searchParams: { search_query: string };
}

const getVideosBySearchQuery = async (
  search_query: string,
  nextPageToken = "",
): Promise<VideoCardModel[] | undefined> => {
  try {
    const res = await fetcher<ResSearchModel>(
      getSearchUrl(search_query, nextPageToken),
    );

    return Promise.all(res.items.map(searchVideoConverter));
  } catch (error) {
    if (error instanceof Error) {
      console.log("error", error.message);
    }
  }
};

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

export default async function Home({
  searchParams: { search_query },
}: HomeProps) {
  const videos = await (search_query
    ? getVideosBySearchQuery(search_query)
    : getVideos());

  return (
    <main className="pt-5 mx-auto px-4 max-w-screen-2xl">
      <div className="grid grid-cols-auto-fit-320 gap-3">
        {Array.isArray(videos) &&
          videos.map((video) => <VideoCard key={video.id} {...video} />)}
      </div>
    </main>
  );
}
