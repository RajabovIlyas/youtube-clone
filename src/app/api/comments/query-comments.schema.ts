import { z } from "zod";

export const queryCommentsSchema = z.object({
  videoId: z.string().min(1),
  nextPageToken: z.string().nullish(),
});

export const checkCommentsPrams = (url: string) => {
  const { searchParams } = new URL(url);
  return queryCommentsSchema.parse({
    nextPageToken: searchParams.get("nextPageToken"),
    videoId: searchParams.get("videoId"),
  });
};
