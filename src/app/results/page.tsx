import { fetcher } from "@/services/fetcher.server";
import { getSearchUrl } from "@/constants/endpoints-api.constant";
import { ResSearchModel } from "@/models/search.model";
import VideoCard from "@/components/VideoCard";
import { searchVideoConverter } from "@/converters/search-video.converter";
import { VideoCardModel } from "@/models/video-card.model";

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

    const items = await Promise.all(res.items.map(searchVideoConverter));

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
  const videos = await getVideosBySearchQuery(search_query);

  return (
    <main className="pt-5 mx-auto px-4 max-w-screen-2xl">
      <div className="grid grid-cols-auto-fit-320 gap-3">
        {Array.isArray(videos) &&
          videos.map((video) => <VideoCard key={video.id} {...video} />)}
      </div>
    </main>
  );
  return <main className="pt-5 mx-auto px-4 max-w-screen-2xl"></main>;
}
