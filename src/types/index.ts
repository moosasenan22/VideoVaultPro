export type DownloadStatus = 'downloading' | 'paused' | 'completed' | 'error';

export interface Download {
  id: string;
  fileName: string;
  platform: 'youtube' | 'tiktok' | 'instagram' | 'facebook' | 'twitter';
  status: DownloadStatus;
  progress: number; // 0-100
  totalSize: string;
  downloadedSize: string;
  speed: string;
  thumbnailUrl: string;
  duration: string; // e.g., "04:32"
}
