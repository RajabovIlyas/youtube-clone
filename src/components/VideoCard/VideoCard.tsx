"use client";
import { FC } from "react";
import { VideoCardModel } from "@/models/video-card.model";
import {
  getChannelPageUrl,
  getVideoWatchUrl,
} from "@/constants/endpoints.constant";
import "./video-card.style.css";
import Link from "next/link";
import Image from "next/image";

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
  const channelUrl = getChannelPageUrl(channelId);
  return (
    <div className="video-card-container">
      <div className="video-card-img-box">
        <Link href={videoWatchUrl}>
          <Image
            src={img}
            width={320}
            height={180}
            className="video-card-img"
            alt={title}
            loading="lazy"
          />
          <div className="video-card-img_time-box">
            <span className="video-card-img_time">{time}</span>
          </div>
        </Link>
      </div>
      <div className="flex gap-2">
        <div className="min-w-10">
          <Link href={channelUrl}>
            <Image
              width={40}
              height={40}
              src={channelImg}
              className="video-card-channel-img"
              alt={channelName}
              loading="lazy"
            />
          </Link>
        </div>
        <Link href={videoWatchUrl}>
          <div className="video-card-description">
            <p className="line-clamp-2 font-bold">{title}</p>
            <p className="video-card-channel_title">{channelName}</p>
            <div className="text-gray-400">
              <span className="text-sm">{views} views</span>
              <span className="video-card-publish">{publishedAt}</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default VideoCard;
