import LoadingRecommendationCard from "@/components/RecommendationCard/LoadingRecommendationCard";
import { LOADER_ITEMS } from "@/constants/default.constant";
import LoadingVideoComment from "@/components/VideoComment/LoadingVideoComment";

export default async function Loading() {
  return (
    <main className="pb-5 mx-auto px-4 max-w-screen-2xl flex justify-between gap-4 animate-pulse">
      <div className="w-full flex flex-col gap-4">
        <div className="w-full  h-128 rounded-2xl bg-zinc-200 dark:bg-zinc-900" />
        {LOADER_ITEMS.slice(0, 3).map((key) => (
          <LoadingVideoComment key={key} />
        ))}
      </div>
      <div className="basis-1/4 flex-col gap-2 hidden lg:flex">
        {LOADER_ITEMS.map((key) => (
          <LoadingRecommendationCard key={key} />
        ))}
      </div>
    </main>
  );
}
