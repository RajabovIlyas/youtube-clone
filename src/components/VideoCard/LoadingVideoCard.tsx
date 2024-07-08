"use client";
import { FC } from "react";
import "./video-card.style.css";

const LoadingVideoCard: FC = () => {
  return (
    <div className="video-card-container animate-pulse">
      <div className="video-card_img-box">
        <div className="video-card_img"></div>
      </div>
      <div className="flex gap-2">
        <div className="video-card_channel-img bg-zinc-200 dark:bg-zinc-900 hover:border-none"></div>
        <div className="video-card_description flex-grow">
          <div className="w-full h-7 rounded-lg bg-zinc-200 dark:bg-zinc-900" />
          <div className="w-1/2 h-5  rounded-lg bg-zinc-200 dark:bg-zinc-900" />
        </div>
      </div>
    </div>
  );
};

export default LoadingVideoCard;
