"use client";
import { FC } from "react";
import { VideoCardModel } from "@/models/video-card.model";
import { getVideoWatchUrl } from "@/constants/endpoints.constant";
import "./video-card.style.css";
import Link from "next/link";
import ChannelImage from "@/components/ChannelImage";

const VideoCard: FC<VideoCardModel> = ({
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
  return (
    <div className="video-card-container">
      <div className="video-card_img-box">
        <Link href={videoWatchUrl}>
          <img
            src={img}
            className="video-card_img"
            alt={title}
            loading="lazy"
          />
          <div className="video-card_img-time-box">
            <span className="video-card_img-time">{time}</span>
          </div>
        </Link>
      </div>
      <div className="flex gap-2">
        <div className="min-w-10">
          <ChannelImage
            channelId={channelId}
            channelName={channelName}
            channelImg={channelImg}
          />
        </div>
        <Link href={videoWatchUrl}>
          <div className="video-card_description">
            <p className="line-clamp-2 font-bold">{title}</p>
            <p className="video-card_channel-title">{channelName}</p>
            <div className="text-zinc-700 dark:text-gray-400 flex gap-1 items-center">
              <span className="text-sm">{views} views</span>
              <span>•</span>
              <span className="video-card_publish">{publishedAt}</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default VideoCard;
