import { z } from "zod";

export const queryWatchSchema = z.object({
  videoId: z.string().min(1),
  quality: z.number().default(18).nullish(),
});

export const checkWatchPrams = (url: string) => {
  const { searchParams } = new URL(url);
  return queryWatchSchema.parse({
    videoId: searchParams.get("id"),
    quality: searchParams.get("quality"),
  });
};
