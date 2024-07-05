"use client";
import { FC } from "react";
import "./recommendation-card.style.css";

const LoadingRecommendationCard: FC = () => {
  return (
    <div className="recommendation-card-container">
      <div className="recommendation-card_img-box recommendation-card_img dark:bg-zinc-900"></div>

      <div className="recommendation-card_description flex-grow gap-2">
        <div className="w-full h-8 rounded-lg bg-zinc-200 dark:bg-zinc-900" />
        <div className="w-3/4 h-6  rounded-lg bg-zinc-200 dark:bg-zinc-900" />
      </div>
    </div>
  );
};

export default LoadingRecommendationCard;
