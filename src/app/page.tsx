import VideoContainer from "@/components/VideoContainer";
import { getVideos, getVideosBySearchQuery } from "@/servers/video.server";

interface HomeProps {
  searchParams: { searchQuery?: string };
}

export default async function Home({
  searchParams: { searchQuery },
}: HomeProps) {
  const props = await (searchQuery
    ? getVideosBySearchQuery(searchQuery, "", 16)
    : getVideos("", 16));

  return <VideoContainer {...props} />;
}
