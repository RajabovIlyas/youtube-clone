"use server";
import {
  ResponseRecommendations,
  ResponseVideo,
} from "@/models/video-params.model";
import { fetcher } from "@/services/fetcher.service";
import { ResSearchModel } from "@/models/search.model";
import {
  getCommentByVideoUrl,
  getSearchUrl,
  getVideoByIdUrl,
  getVideoByMainVideoUrl,
  getVideoInfoBody,
  videoInfoUrl,
} from "@/constants/endpoints-api.constant";
import { ResVideoInfoModel } from "@/models/video-info.model";
import axios from "axios";
import { ResComments } from "@/models/comment.model";
import { recommendationVideoConverter } from "@/converters/recommendation-video.converter";
import { ResVideosModel } from "@/models/video.model";
import { videoInfoConverter } from "@/converters/video-info.converter";
import { VideoWatchModel } from "@/models/video-card.model";

export const getVideoInfo = async (
  videoId: string,
): Promise<VideoWatchModel> => {
  const { items } = await fetcher<ResVideosModel>(getVideoByIdUrl(videoId));

  return videoInfoConverter(items[0]);
};

export const getVideoComment = async (videoId: string, nextPage = "") => {
  try {
    const { items, nextPageToken } = await fetcher<ResComments>(
      getCommentByVideoUrl(videoId, nextPage),
    );

    return {
      items,
      nextPageToken,
    };
  } catch (error) {
    if (error instanceof Error) {
      console.log("error", error.message);
    }
  }
};

export const getVideoByMainVideo = async (
  videoKeys: string[],
  nextPage = "",
): Promise<ResponseRecommendations> => {
  try {
    const {
      data: { items, nextPageToken, pageInfo },
    } = await axios.get<ResSearchModel>(
      getVideoByMainVideoUrl(videoKeys.slice(0, 3).join("|"), nextPage),
    );

    return {
      videos: await Promise.all(items.map(recommendationVideoConverter)),
      nextPageToken,
      totalResults: pageInfo.totalResults,
    };
  } catch (error) {
    if (error instanceof Error) {
      console.error("error", error.message);
    }
  }
  return { totalResults: 0, videos: [] };
};
