"use server";
import { fetcher } from "@/services/fetcher.service";
import { ResSearchModel } from "@/models/search.model";
import { getSearchUrl, getVideoUrl } from "@/constants/endpoints-api.constant";
import { searchVideoConverter } from "@/converters/search-video.converter";
import { ResVideosModel } from "@/models/video.model";
import { videoConverter } from "@/converters/video.converter";
import { ResponseVideo } from "@/models/video-params.model";

const DEFAULT_RESPONSE_VIDEO: ResponseVideo = {
  videos: [],
  nextPageToken: "",
  totalResults: 0,
};

export const getVideosBySearchQuery = async (
  searchQuery: string,
  nextPage = "",
): Promise<ResponseVideo> => {
  try {
    const { items, nextPageToken, pageInfo } = await fetcher<ResSearchModel>(
      getSearchUrl(searchQuery, nextPage),
    );

    return {
      videos: await Promise.all(items.map(searchVideoConverter)),
      nextPageToken,
      totalResults: pageInfo.totalResults,
    };
  } catch (error) {
    if (error instanceof Error) {
      console.log("error", error.message);
    }
  }
  return DEFAULT_RESPONSE_VIDEO;
};

export const getVideos = async (
  nextPage = "",
  maxResult = 8,
): Promise<ResponseVideo> => {
  try {
    const { nextPageToken, items, pageInfo } = await fetcher<ResVideosModel>(
      getVideoUrl(nextPage, maxResult),
    );

    return {
      videos: await Promise.all(items.map(videoConverter)),
      nextPageToken,
      totalResults: pageInfo.totalResults,
    };
  } catch (error) {
    if (error instanceof Error) {
      console.log("error", error.message);
    }
  }
  return DEFAULT_RESPONSE_VIDEO;
};
