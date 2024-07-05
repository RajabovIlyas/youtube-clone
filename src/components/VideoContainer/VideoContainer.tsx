"use client";
import { FC } from "react";
import VideoCard from "@/components/VideoCard";
import { useVideoContainer } from "@/components/VideoContainer/video-container.hook";
import { ResponseVideo } from "@/models/video-params.model";
import LoadingVideoCard from "@/components/VideoCard/LoadingVideoCard";
import { LOADER_ITEMS } from "@/constants/default.constant";

interface VideoContainerProps extends ResponseVideo {}

const VideoContainer: FC<VideoContainerProps> = (props) => {
  const { videos, loading } = useVideoContainer(props);
  return (
    <main className="pb-5 mx-auto px-4 max-w-screen-2xl">
      <div className="grid grid-cols-auto-fit-320 gap-3">
        {Array.isArray(videos) &&
          videos.map((video) => <VideoCard key={video.id} {...video} />)}
        {loading && LOADER_ITEMS.map((key) => <LoadingVideoCard key={key} />)}
      </div>
    </main>
  );
};

export default VideoContainer;
