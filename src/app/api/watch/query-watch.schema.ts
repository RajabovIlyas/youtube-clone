import { z } from "zod";

export const queryWatchSchema = z.object({
  videoId: z.string().min(1),
  quality: z.number().default(18).nullish(),
});

export const checkWatchPrams = (url: string) => {
  const { searchParams } = new URL(url);
  const videoId = searchParams.get("id");
  const quality = searchParams.get("quality");
  return queryWatchSchema.parse({
    videoId,
    quality,
  });
};
