"use client";
import { FC } from "react";
import "./video-card.style.css";

const LoadingVideoCard: FC = () => {
  return (
    <div className="video-card-container">
      <div className="video-card-img-box">
        <div className="video-card-img animate-pulse"></div>
      </div>
      <div className="flex gap-2">
        <div className="video-card-channel-img animate-pulse"></div>
        <div className="video-card-description">
          <div className="line-clamp-2 font-bold" />
          <div className="video-card-channel_title" />
        </div>
      </div>
    </div>
  );
};

export default LoadingVideoCard;
