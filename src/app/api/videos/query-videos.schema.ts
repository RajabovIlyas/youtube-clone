export const checkVideoPrams = (url: string) => {
  const { searchParams } = new URL(url);
  const nextPageToken = searchParams.get("nextPageToken");
  const searchQuery = searchParams.get("searchQuery");
  return { nextPageToken, searchQuery };
};
