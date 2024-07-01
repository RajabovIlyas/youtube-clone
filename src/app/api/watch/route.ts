import { NextRequest, NextResponse } from "next/server";
import {
  chooseFormat,
  downloadFromInfo,
  getInfo,
  videoFormat,
} from "ytdl-core";
import { checkWatchPrams } from "@/app/api/watch/query-watch.schema";
import { ZodError } from "zod";
import axios from "axios";

interface NextApiResponse extends NextResponse {
  params: { videoName: string };
}

const getHeader = async (format: videoFormat) => {
  const { headers } = await axios.head(format.url);

  const responseHeader = new Headers();

  Object.keys(headers).forEach((key) => {
    responseHeader.set(key, headers[key]);
  });
  return responseHeader;
};

export async function GET(request: NextRequest, response: NextApiResponse) {
  try {
    const { videoId, quality } = checkWatchPrams(request.url);

    const info = await getInfo(videoId);
    const format = chooseFormat(info.formats, { quality: quality || 18 });

    const data = downloadFromInfo(info, { format, highWaterMark: 1024 * 1024 });

    return new Response(data as any, {
      headers: await getHeader(format),
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return new NextResponse(error.message, { status: 400 });
    }
    if (error instanceof Error) {
      return new NextResponse(JSON.stringify({ error: error.message }), {
        status: 400,
      });
    }
  }
}
