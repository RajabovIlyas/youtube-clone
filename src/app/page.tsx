import VideoContainer from "@/components/VideoContainer";
import { getVideos, getVideosBySearchQuery } from "@/servers/video.sever";

interface HomeProps {
  searchParams: { searchQuery?: string };
}

export default async function Home({
  searchParams: { searchQuery },
}: HomeProps) {
  const props = await (searchQuery
    ? getVideosBySearchQuery(searchQuery)
    : getVideos("", 16));

  return <VideoContainer {...props} />;
}
