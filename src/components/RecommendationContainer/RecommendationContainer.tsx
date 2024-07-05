"use client";
import { FC } from "react";
import { ResponseRecommendations } from "@/models/video-params.model";
import { useRecommendationContainer } from "@/components/RecommendationContainer/recommendation-container.hook";
import RecommendationCard from "@/components/RecommendationCard";
import LoadingRecommendationCard from "@/components/RecommendationCard/LoadingRecommendationCard";
import { LOADER_ITEMS } from "@/constants/default.constant";

interface RecommendationContainerProps extends ResponseRecommendations {}

const RecommendationContainer: FC<RecommendationContainerProps> = (props) => {
  const { videos, loading } = useRecommendationContainer(props);
  return (
    <div className="flex flex-col gap-2">
      {Array.isArray(videos) &&
        videos.map((video) => <RecommendationCard key={video.id} {...video} />)}
      {loading &&
        LOADER_ITEMS.map((key) => <LoadingRecommendationCard key={key} />)}
    </div>
  );
};

export default RecommendationContainer;
