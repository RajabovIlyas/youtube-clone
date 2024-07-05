import { CommentModel } from "@/models/comment.model";
import { FC } from "react";
import ChannelImage from "@/components/ChannelImage";
import LikeIcon from "@/components/icons/LikeIcon";
import DislikeIcon from "@/components/icons/DislikeIcon";

interface VideoCommentProps extends CommentModel {}

const VideoComment: FC<VideoCommentProps> = ({
  id,
  comments,
  commentDisplay,
  channelId,
  channelImg,
  channelName,
  publishedAt,
  likeCount,
}) => {
  return (
    <div className="flex gap-4">
      <ChannelImage
        channelId={channelId}
        channelName={channelName}
        channelImg={channelImg}
      />
      <div className="flex flex-col gap-1">
        <div className="flex gap-2 items-center">
          <h6 className="text-xs">{channelName}</h6>
          <p className="text-xs text-zinc-400">{publishedAt}</p>
        </div>
        <p className="text-sm break-all">{commentDisplay}</p>
        <div className="flex gap-1 items-center">
          <button className="rounded-full p-2 hover:bg-zinc-900 flex gap-1 items-center text-xs">
            <LikeIcon className="size-4" /> {likeCount === "0" ? "" : likeCount}
          </button>
          <button className="rounded-full p-2 hover:bg-zinc-900">
            <DislikeIcon className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoComment;
