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
    <div className="w-full flex flex-col gap-4">
      <div className="w-full min-h-96 max-h-128 bg-zinc-900 block rounded-2xl">
        <video controls autoPlay className="w-full max-h-128 rounded-2xl">
          <source src={watchUrl} type="video/mp4" />
        </video>
      </div>
      <div>
        <h1 className="text-xl font-bold mb-2">{title}</h1>
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <div className="flex gap-3 items-center">
              <Link href={channelUrl}>
                <Image
                  width={40}
                  height={40}
                  src={channelImg}
                  className="rounded-full w-10 h-10 object-cover hover:border-2 border-solid border-sky-600 transition-all duration-75"
                  alt={channelName}
                  loading="lazy"
                />
              </Link>
              <div className="flex flex-col">
                <Link href={channelUrl}>
                  <h4 className="text-base">{channelName}</h4>
                </Link>
                <span className="text-xs text-zinc-400">
                  {channelFollowers} subscribers
                </span>
              </div>
            </div>
            <button className="bg-zinc-900 min-w-10 px-4 h-10 rounded-full text-sm">
              Subscribe
            </button>
          </div>
          <ul className="flex items-center gap-2">
            <li className="flex items-center">
              <button className="bg-zinc-900 min-w-10 pl-4 h-10  rounded-full rounded-r-none text-sm flex items-center gap-1 after:w-px after:ml-2 after:h-3/4 after:bg-zinc-800 ">
                <LikeIcon />
                {likes}
              </button>
              <button className="bg-zinc-900 min-w-10 pr-4 pl-2 h-10 rounded-full rounded-l-none text-sm">
                <DislikeIcon />
              </button>
            </li>
            <li>
              <button className="bg-zinc-900 min-w-10 px-4 h-10 rounded-full text-sm flex items-center gap-1">
                <ShareIcon /> Share
              </button>
            </li>
            <li>
              <button className="bg-zinc-900 min-w-10 px-4 h-10 rounded-full text-sm flex items-center gap-1">
                <DownloadIcon /> Download
              </button>
            </li>
            <li>
              <button className="bg-zinc-900 w-10 h-10 rounded-full text-xs">
                •••
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="rounded-2xl w-full bg-zinc-900 p-4">
        <p className="text-sm font-bold">
          {views} views {publishedAt}
        </p>
        <p className={descriptionStyle}>{description}</p>
        {showDescription || (
          <>
            <div className="flex gap-3 items-center py-4">
              <Link href={channelUrl}>
                <Image
                  width={40}
                  height={40}
                  src={channelImg}
                  className="rounded-full w-10 h-10 object-cover hover:border-2 border-solid border-sky-600 transition-all duration-75"
                  alt={channelName}
                  loading="lazy"
                />
              </Link>
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
                <button className="border border-zinc-800 min-w-10 px-4 h-10 rounded-full text-sm flex items-center gap-1">
                  <VideoIcon /> Videos
                </button>
              </li>
              <li>
                <button className="border border-zinc-800 min-w-10 px-4 h-10 rounded-full text-sm flex items-center gap-1">
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
    </div>
  );
};

export default VideoPlayer;
