"use client";
import { FC } from "react";
import { VideoModel } from "@/models/video.model";
import {
  getChannelPageUrl,
  getVideoWatchUrl,
} from "@/constants/endpoints.constant";
import "./video-card.style.css";

const VideoCard: FC<VideoModel> = ({
  id,
  title,
  img,
  channelName,
  channelImg,
  description,
  time,
  views,
  publishedAt,
  channelId,
}) => {
  const videoWatchUrl = getVideoWatchUrl(id);
  const channelUrl = getChannelPageUrl(channelId);
  return (
    <div className="video-card-container">
      <div className="video-card-img-box">
        <a href={videoWatchUrl}>
          <img
            src={img}
            className="video-card-img"
            alt={title}
            loading="lazy"
          />
          <div className="video-card-img_time-box">
            <span className="video-card-img_time">{time}</span>
          </div>
        </a>
      </div>
      <div className="flex gap-2">
        <div className="min-w-10">
          <a href={channelUrl}>
            <img
              src={channelImg}
              className="video-card-channel-img"
              alt={channelName}
              loading="lazy"
            />
          </a>
        </div>
        <a href={videoWatchUrl}>
          <div className="video-card-description">
            <p className="line-clamp-2 font-bold">{title}</p>
            <p className="video-card-channel_title">{channelName}</p>
            <div className="text-gray-400">
              <span className="text-sm">{views} views</span>
              <span className="video-card-publish">{publishedAt}</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default VideoCard;
