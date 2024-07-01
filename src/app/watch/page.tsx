interface WatchProps {
  searchParams: { v?: string };
}

export default async function Watch({ searchParams: { v } }: WatchProps) {
  const url = `/api/watch?id=${v}`;

  return (
    <main className="pb-5 mx-auto px-4 max-w-screen-2xl flex justify-center">
      <video controls autoPlay>
        <source src={url} type="video/mp4" />
      </video>
    </main>
  );
}
