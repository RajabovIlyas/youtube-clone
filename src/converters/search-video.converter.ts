import { getTimeByDuration } from "@/converters/format.converter";
import moment from "moment";
import { fetcher } from "@/services/fetcher.server";
import {
  getChannelUrl,
  getVideoPartUrl,
} from "@/constants/endpoints-api.constant";
import { SearchVideoModel } from "@/models/search.model";
import { ResVideoPartsModel } from "@/models/video-part.model";
import { VideoCardModel } from "@/models/video-card.model";
import { ResChannelModel } from "@/models/channel.model";

export const searchVideoConverter = async ({
  id,
  snippet,
}: SearchVideoModel): Promise<VideoCardModel> => {
  const [videoPart, channel] = await Promise.all([
    fetcher<ResVideoPartsModel>(getVideoPartUrl(id.videoId)),
    fetcher<ResChannelModel>(getChannelUrl(snippet.channelId)),
  ]);

  const { contentDetails, statistics } = videoPart.items[0];

  return {
    id: id.videoId,
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
