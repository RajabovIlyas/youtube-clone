import { NextRequest, NextResponse } from "next/server";
import { getVideos, getVideosBySearchQuery } from "@/servers/video.server";
import { checkCommentsPrams } from "@/app/api/comments/query-comments.schema";
import { getVideoComment } from "@/servers/watch-video.server";

interface NextApiResponse extends NextResponse {
  params: { videoName: string };
}

export async function GET(request: NextRequest, response: NextApiResponse) {
  try {
    const { videoId, nextPageToken } = checkCommentsPrams(request.url);

    return Response.json(await getVideoComment(videoId, nextPageToken || ""));
  } catch (error) {
    if (error instanceof Error) {
      return new NextResponse(JSON.stringify({ error: error.message }), {
        status: 400,
      });
    }
  }
}
