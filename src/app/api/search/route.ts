import { NextRequest, NextResponse } from "next/server";
import { getVideos, getVideosBySearchQuery } from "@/servers/video.server";
import { checkCommentsPrams } from "@/app/api/comments/query-comments.schema";
import { getVideoComment } from "@/servers/watch-video.server";
import { checkSearchPrams } from "@/app/api/search/query-search.schema";
import { getSearchVariation } from "@/servers/search.server";

interface NextApiResponse extends NextResponse {
  params: { videoName: string };
}

export async function GET(request: NextRequest, response: NextApiResponse) {
  try {
    const { searchQuery } = checkSearchPrams(request.url);

    if (searchQuery.length === 0) {
      return Response.json([]);
    }

    return Response.json(await getSearchVariation(searchQuery));
  } catch (error) {
    if (error instanceof Error) {
      return new NextResponse(JSON.stringify({ error: error.message }), {
        status: 400,
      });
    }
  }
}
