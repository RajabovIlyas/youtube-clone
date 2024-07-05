import LikeIcon from "@/components/icons/LikeIcon";
import DislikeIcon from "@/components/icons/DislikeIcon";

const LoadingVideoComment = () => {
  return (
    <div className="flex gap-4 w-full">
      <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-900"></div>
      <div className="flex flex-col gap-1 w-full">
        <div className="max-w-72 h-8 rounded-lg bg-zinc-200 dark:bg-zinc-900" />
        <div className="w-3/4 h-8 rounded-lg bg-zinc-200 dark:bg-zinc-900" />
      </div>
    </div>
  );
};

export default LoadingVideoComment;
