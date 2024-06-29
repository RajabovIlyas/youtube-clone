import { VideoModel } from "@/models/video.model";
import { getTimeByDuration } from "@/converters/format.converter";
import moment from "moment";
import { fetcher } from "@/services/fetcher.service";
import { getChannelUrl } from "@/constants/endpoints-api.constant";
import { ResChannelModel } from "@/models/channel.model";
import { VideoCardModel } from "@/models/video-card.model";

export const videoConverter = async ({
  id,
  snippet,
  statistics,
  contentDetails,
}: Pick<
  VideoModel,
  "id" | "snippet" | "statistics" | "contentDetails"
>): Promise<VideoCardModel> => {
  const channel = await fetcher<ResChannelModel>(
    getChannelUrl(snippet.channelId),
  );

  return {
    id: id,
    img: snippet.thumbnails.medium.url,
    title: snippet.title,
    channelId: snippet.channelId,
    channelName: snippet.channelTitle,
    channelImg: channel.items[0].snippet.thumbnails.default.url,
    description: snippet.description,
    time: getTimeByDuration(contentDetails.duration),
    views: Intl.NumberFormat("en", { notation: "compact" }).format(
      +statistics.viewCount,
    ),
    publishedAt: moment(snippet.publishedAt).fromNow(),
  };
};
