import LoadingVideoCard from "@/components/VideoCard/LoadingVideoCard";

const VIDEO_CARDS = [...Array(8)].map((e, i) => i);

export default async function Loading() {
  return (
    <main className="pt-5 mx-auto px-4 max-w-screen-2xl">
      <div className="grid grid-cols-auto-fit-320 gap-3">
        {VIDEO_CARDS.map((video) => (
          <LoadingVideoCard key={video} />
        ))}
      </div>
    </main>
  );
}
