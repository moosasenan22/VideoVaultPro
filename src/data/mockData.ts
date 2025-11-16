import { faker } from '@faker-js/faker';
import { Download, DownloadStatus } from '../types';

const platforms: Download['platform'][] = ['youtube', 'tiktok', 'instagram', 'facebook', 'twitter'];

const createRandomDownload = (status: DownloadStatus): Download => {
  const totalSizeMB = faker.number.float({ min: 10, max: 500 });
  const progress = status === 'completed' ? 100 : faker.number.int({ min: 10, max: 99 });
  const downloadedSizeMB = (totalSizeMB * progress) / 100;

  return {
    id: faker.string.uuid(),
    fileName: faker.system.fileName({ extensionCount: 0 }) + '.mp4',
    platform: faker.helpers.arrayElement(platforms),
    status,
    progress,
    totalSize: `${totalSizeMB.toFixed(1)} MB`,
    downloadedSize: `${downloadedSizeMB.toFixed(1)} MB`,
    speed: status === 'downloading' ? `${faker.number.float({ min: 0.5, max: 5 }).toFixed(2)} MB/s` : '0 MB/s',
    thumbnailUrl: `https://picsum.photos/seed/${faker.string.alphanumeric(10)}/120/80`,
    duration: `${faker.number.int({ min: 1, max: 15 }).toString().padStart(2, '0')}:${faker.number.int({ min: 0, max: 59 }).toString().padStart(2, '0')}`,
  };
};

export const mockDownloads: Download[] = [
  createRandomDownload('downloading'),
  createRandomDownload('downloading'),
  createRandomDownload('paused'),
  createRandomDownload('completed'),
  createRandomDownload('completed'),
  createRandomDownload('completed'),
  createRandomDownload('error'),
];
