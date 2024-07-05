import RecommendationContainer from "@/components/RecommendationContainer";
import LoadingRecommendationCard from "@/components/RecommendationCard/LoadingRecommendationCard";

const VIDEO_CARDS = [...Array(8)].map((e, i) => i);

export default async function Loading() {
  return (
    <main className="pb-5 mx-auto px-4 max-w-screen-2xl flex justify-between gap-4 animate-pulse">
      <div className="w-full max-h-128 bg-zinc-900 block rounded-2xl"></div>
      <div className="basis-1/4 flex flex-col gap-2">
        {VIDEO_CARDS.map((key) => (
          <LoadingRecommendationCard key={key} />
        ))}
      </div>
    </main>
  );
}
