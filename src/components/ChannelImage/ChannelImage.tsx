import Link from "next/link";
import { getChannelPageUrl } from "@/constants/endpoints.constant";
import { FC } from "react";
import "./channel-image.style.css";

interface ChannelImageProps {
  channelId: string;
  channelName: string;
  channelImg: string;
}

const ChannelImage: FC<ChannelImageProps> = ({
  channelName,
  channelId,
  channelImg,
}) => {
  const channelUrl = getChannelPageUrl(channelId);
  return (
    <Link href={channelUrl}>
      <img
        src={channelImg}
        className="channel-img"
        alt={channelName}
        loading="lazy"
      />
    </Link>
  );
};

export default ChannelImage;
