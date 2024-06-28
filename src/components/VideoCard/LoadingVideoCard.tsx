"use client";
import { FC } from "react";
import "./video-card.style.css";

const LoadingVideoCard: FC = () => {
  return (
    <div className="video-card-container animate-pulse">
      <div className="video-card-img-box">
        <div className="video-card-img dark:bg-zinc-900"></div>
      </div>
      <div className="flex gap-2">
        <div className="video-card-channel-img dark:bg-zinc-900 hover:border-none"></div>
        <div className="video-card-description flex-grow">
          <div className="w-full h-7  dark:bg-zinc-900 rounded-lg" />
          <div className="w-1/2 h-5  dark:bg-zinc-900 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default LoadingVideoCard;
