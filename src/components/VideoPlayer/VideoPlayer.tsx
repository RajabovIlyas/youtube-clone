"use client";
import { FC, useMemo, useState } from "react";
import { VideoWatchModel } from "@/models/video-card.model";
import Image from "next/image";
import Link from "next/link";
import {
  getChannelPageUrl,
  getVideoForWatchUrl,
} from "@/constants/endpoints.constant";
import LikeIcon from "@/components/icons/LikeIcon";
import DislikeIcon from "@/components/icons/DislikeIcon";
import ShareIcon from "@/components/icons/ShareIcon";
import DownloadIcon from "@/components/icons/DownloadIcon";
import VideoIcon from "@/components/icons/VideoIcon";
import AboutIcon from "@/components/icons/AboutIcon";
import ChannelImage from "@/components/ChannelImage";
import "./video-player.style.css";

interface VideoPlayerProps extends VideoWatchModel {}

const VideoPlayer: FC<VideoPlayerProps> = ({
  id,
  title,
  channelId,
  channelImg,
  channelName,
  channelFollowers,
  likes,
  description,
  views,
  publishedAt,
}) => {
  const [showDescription, setShowDescription] = useState(true);
  const watchUrl = getVideoForWatchUrl(id);
  const channelUrl = getChannelPageUrl(channelId);

  const descriptionStyle = useMemo(() => {
    return `text-sm whitespace-pre-line ${
      showDescription ? "line-clamp-3" : ""
    }`;
  }, [showDescription]);

  const onShowDescription = () => setShowDescription((value) => !value);
  return (
    <>
      <div className="video-player">
        <video controls autoPlay className="w-full max-h-128 rounded-2xl">
          <source src={watchUrl} type="video/mp4" />
        </video>
      </div>
      <div>
        <h1 className="text-xl font-bold mb-2">{title}</h1>
        <div className="flex justify-between gap-2">
          <div className="flex items-center gap-4">
            <div className="flex gap-3 items-center">
              <ChannelImage
                channelId={channelId}
                channelName={channelName}
                channelImg={channelImg}
              />
              <div className="flex flex-col">
                <Link href={channelUrl}>
                  <h4 className="text-base">{channelName}</h4>
                </Link>
                <span className="text-xs text-zinc-400">
                  {channelFollowers} subscribers
                </span>
              </div>
            </div>
            <button className="video-player_btn ">Subscribe</button>
          </div>
          <ul className="items-center gap-2 xl:flex hidden">
            <li className="flex items-center">
              <button className="video-player_btn-like">
                <LikeIcon />
                {likes}
              </button>
              <button className="video-player_btn-dislike">
                <DislikeIcon />
              </button>
            </li>
            <li>
              <button className="video-player_btn-icon ">
                <ShareIcon /> Share
              </button>
            </li>
            <li>
              <button className="video-player_btn-icon ">
                <DownloadIcon /> Download
              </button>
            </li>
          </ul>
          <button className="video-player_btn text-xs xl:hidden block ">
            •••
          </button>
        </div>
      </div>
      <div className="rounded-2xl w-full bg-zinc-200 dark:bg-zinc-900 p-4">
        <p className="text-sm font-bold">
          {views} views {publishedAt}
        </p>
        <p className={descriptionStyle}>{description}</p>
        {showDescription || (
          <>
            <div className="flex gap-3 items-center py-4">
              <ChannelImage
                channelId={channelId}
                channelName={channelName}
                channelImg={channelImg}
              />
              <div className="flex flex-col">
                <Link href={channelUrl}>
                  <h4 className="text-base">{channelName}</h4>
                </Link>
                <span className="text-xs text-zinc-400">
                  {channelFollowers} subscribers
                </span>
              </div>
            </div>
            <ul className="py-4 flex items-center gap-4">
              <li>
                <button className="video-player_btn-icon border border-zinc-800">
                  <VideoIcon /> Videos
                </button>
              </li>
              <li>
                <button className="video-player_btn-icon border border-zinc-800">
                  <AboutIcon /> About
                </button>
              </li>
            </ul>
          </>
        )}
        <button
          className="font-bold text-sm hover:underline"
          onClick={onShowDescription}
        >
          {showDescription ? "show more" : "show less"}
        </button>
      </div>
    </>
  );
};

export default VideoPlayer;
