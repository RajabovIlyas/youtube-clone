import { NextRequest, NextResponse } from "next/server";
import { checkVideoPrams } from "@/app/api/videos/query-videos.schema";
import { getVideos, getVideosBySearchQuery } from "@/servers/video.sever";

interface NextApiResponse extends NextResponse {
  params: { videoName: string };
}

export async function GET(request: NextRequest, response: NextApiResponse) {
  try {
    const { searchQuery, nextPageToken } = checkVideoPrams(request.url);

    if (searchQuery && searchQuery?.length !== 0) {
      return Response.json(
        await getVideosBySearchQuery(searchQuery, nextPageToken || ""),
      );
    }

    return Response.json(await getVideos(nextPageToken || ""));
  } catch (error) {
    if (error instanceof Error) {
      return new NextResponse(JSON.stringify({ error: error.message }), {
        status: 400,
      });
    }
  }
}
