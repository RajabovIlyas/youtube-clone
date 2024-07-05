import { getTimeByDuration } from "@/converters/format.converter";
import moment from "moment";
import { fetcher } from "@/services/fetcher.service";
import { getVideoPartUrl } from "@/constants/endpoints-api.constant";
import { SearchVideoModel } from "@/models/search.model";
import { ResVideoPartsModel } from "@/models/video-part.model";
import { RecommendationVideoModel } from "@/models/video-card.model";

export const recommendationVideoConverter = async ({
  id,
  snippet,
}: SearchVideoModel): Promise<RecommendationVideoModel> => {
  const [videoPart] = await Promise.all([
    fetcher<ResVideoPartsModel>(getVideoPartUrl(id.videoId)),
  ]);

  const { contentDetails, statistics } = videoPart.items[0];

  return {
    id: id.videoId,
    img: snippet.thumbnails.medium.url,
    title: snippet.title,
    channelId: snippet.channelId,
    channelName: snippet.channelTitle,
    time: getTimeByDuration(contentDetails.duration),
    views: Intl.NumberFormat("en", { notation: "compact" }).format(
      +statistics.viewCount,
    ),
    publishedAt: moment(snippet.publishedAt).fromNow(),
  };
};
