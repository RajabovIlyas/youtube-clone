import { z } from "zod";

export const querySearchSchema = z.object({
  searchQuery: z.string(),
});

export const checkSearchPrams = (url: string) => {
  const { searchParams } = new URL(url);
  return querySearchSchema.parse({
    searchQuery: searchParams.get("searchQuery"),
    videoId: searchParams.get("videoId"),
  });
};
