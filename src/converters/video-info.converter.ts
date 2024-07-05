import { ResVideoInfoModel } from "@/models/video-info.model";
import { getTimeByDuration } from "@/converters/format.converter";
import moment from "moment/moment";
import { fetcher } from "@/services/fetcher.service";
import {
  ResChannelModel,
  ResChannelWithStatisticModel,
} from "@/models/channel.model";
import {
  getChannelUrl,
  getChannelWithStatisticUrl,
} from "@/constants/endpoints-api.constant";
import { VideoModel } from "@/models/video.model";
import { VideoWatchModel } from "@/models/video-card.model";

export const videoInfoConverter = async ({
  id,
  snippet,
  statistics,
  contentDetails,
}: Pick<
  VideoModel,
  "id" | "snippet" | "statistics" | "contentDetails"
>): Promise<VideoWatchModel> => {
  const channelData = await fetcher<ResChannelWithStatisticModel>(
    getChannelWithStatisticUrl(snippet.channelId),
  );

  const channel = channelData.items[0];

  return {
    id: id,
    title: snippet.title,
    channelId: snippet.channelId,
    channelName: snippet.channelTitle,
    channelFollowers: Intl.NumberFormat("en", { notation: "compact" }).format(
      +channel.statistics.subscriberCount,
    ),
    keywords: snippet.tags,
    channelImg: channel.snippet.thumbnails.default.url,
    description: snippet.description,
    time: getTimeByDuration(contentDetails.duration),
    views: Intl.NumberFormat("en", { notation: "compact" }).format(
      +statistics.viewCount,
    ),
    likes: Intl.NumberFormat("en", { notation: "compact" }).format(
      +statistics.likeCount,
    ),
    publishedAt: moment(snippet.publishedAt).format("ll"),
    commentCount: statistics.commentCount,
  };
};
