export interface VideoFormat {
  itag: number;
  mimeType: string;
  bitrate: number;
  width: number;
  height: number;
  lastModified: string;
  contentLength: string;
  quality: string;
  fps: number;
  qualityLabel: string;
  projectionType: string;
  averageBitrate: number;
  audioQuality: string;
  approxDurationMs: string;
  audioSampleRate: string;
  audioChannels: number;
  signatureCipher: string;
}

export interface VideoStreaming {
  expiresInSeconds: string;
  formats: VideoFormat[];
  adaptiveFormats: VideoFormat[];
  probeUrl: string;
  serverAbrStreamingUrl: string;
}

export interface VideoDetails {
  videoId: string;
  title: string;
  lengthSeconds: string;
  keywords: string[];
  channelId: string;
  isOwnerViewing: boolean;
  shortDescription: string;
  isCrawlable: boolean;
  thumbnail: {
    thumbnails: {
      url: string;
      width: number;
      height: number;
    }[];
  };
  allowRatings: boolean;
  viewCount: string;
  author: string;
  isLowLatencyLiveStream: boolean;
  isPrivate: boolean;
  isUnpluggedCorpus: boolean;
  latencyClass: string;
  isLiveContent: boolean;
}

export interface ResVideoInfoModel {
  responseContext: {
    visitorData: string;
    serviceTrackingParams: {
      service: string;
      params: {
        key: string;
        value: string;
      }[];
    }[];
    maxAgeSeconds: number;
    mainAppWebResponseContext: {
      loggedOut: boolean;
      trackingParam: string;
    };
    webResponseContextExtensionData: {
      hasDecorated: boolean;
    };
  };
  playabilityStatus: {
    status: string;
    playableInEmbed: boolean;
    miniplayer: {
      miniplayerRenderer: {
        playbackMode: string;
      };
    };
    contextParams: string;
  };
  streamingData: VideoStreaming;
  playbackTracking: {
    videostatsPlaybackUrl: {
      baseUrl: string;
    };
    videostatsDelayplayUrl: {
      baseUrl: string;
    };
    videostatsWatchtimeUrl: {
      baseUrl: string;
    };
    ptrackingUrl: {
      baseUrl: string;
    };
    qoeUrl: {
      baseUrl: string;
    };
    atrUrl: {
      baseUrl: string;
      elapsedMediaTimeSeconds: number;
    };
    videostatsScheduledFlushWalltimeSeconds: number[];
    videostatsDefaultFlushIntervalSeconds: number;
    youtubeRemarketingUrl: {
      baseUrl: string;
      elapsedMediaTimeSeconds: number;
    };
  };

  videoDetails: VideoDetails;
}
