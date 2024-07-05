"use client";

import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { RecommendationVideoModel } from "@/models/video-card.model";
import {
  getChannelPageUrl,
  getVideoWatchUrl,
} from "@/constants/endpoints.constant";
import "./recommendation-card.style.css";

const RecommendationCard: FC<RecommendationVideoModel> = ({
  id,
  title,
  img,
  channelName,
  time,
  views,
  publishedAt,
  channelId,
}) => {
  const videoWatchUrl = getVideoWatchUrl(id);
  const channelUrl = getChannelPageUrl(channelId);
  return (
    <div className="recommendation-card-container">
      <div className="recommendation-card_img-box">
        <Link href={videoWatchUrl}>
          <Image
            src={img}
            width={160}
            height={90}
            className="recommendation-card_img"
            alt={title}
            loading="lazy"
          />
          <div className="recommendation-card_img-time-box">
            <span className="recommendation-card_img-time">{time}</span>
          </div>
        </Link>
      </div>
      <div className="flex gap-2 ">
        <Link href={videoWatchUrl}>
          <div className="recommendation-card_description">
            <p className="line-clamp-2 font-bold text-sm  max-w-64">{title}</p>
            <Link href={channelUrl}>
              <p className="recommendation-card_channel-title">{channelName}</p>
            </Link>
            <div className="text-zinc-700 dark:text-gray-400 flex gap-1 items-center text-xs">
              <span className="text-sm">{views} views</span>
              <span>•</span>
              <span className="recommendation-card_publish">{publishedAt}</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RecommendationCard;
