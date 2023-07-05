export interface YouTubeVideoItem {
    id: string
    snippet: {
      publishedAt: string
      title: string
      thumbnails: { standard: { url: string } }
      resourceId: {
        videoId: string
      }
    }
  }