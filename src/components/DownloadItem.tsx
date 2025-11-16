import { Download, DownloadStatus } from '../types';
import { Youtube, Instagram, Facebook, Twitter, Pause, Play, X, MoreVertical, Share2, Trash2, AlertTriangle } from 'lucide-react';
import { TikTokIcon } from './icons/TikTokIcon';
import { motion } from 'framer-motion';

const platformIcons = {
  youtube: <Youtube size={16} className="text-red-500" />,
  instagram: <Instagram size={16} className="text-pink-500" />,
  tiktok: <TikTokIcon size={16} />,
  facebook: <Facebook size={16} className="text-blue-600" />,
  twitter: <Twitter size={16} className="text-sky-500" />,
};

const ProgressBar = ({ progress, status }: { progress: number, status: DownloadStatus }) => {
  const barColor = status === 'error' ? 'bg-red-500' : 'bg-brand-primary';
  return (
    <div className="w-full bg-dark-surface-2 rounded-full h-1.5">
      <motion.div
        className={`h-1.5 rounded-full ${barColor}`}
        style={{ width: `${progress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};


const InProgressView = ({ download }: { download: Download }) => (
  <>
    <div className="flex items-center justify-between text-xs text-dark-text-secondary mb-2">
      <p>{download.status === 'downloading' ? `جاري التحميل... ${download.progress}%` : download.status === 'paused' ? 'متوقف مؤقتاً' : 'خطأ في التحميل'}</p>
      <p>{download.downloadedSize} / {download.totalSize}</p>
    </div>
    <ProgressBar progress={download.progress} status={download.status} />
    <div className="flex items-center justify-between mt-2">
      <p className="text-xs text-brand-secondary">{download.status === 'downloading' ? download.speed : ''}</p>
      <div className="flex items-center gap-2">
        <button className="p-1 text-dark-text-secondary hover:text-white">
          {download.status === 'downloading' ? <Pause size={16} /> : <Play size={16} />}
        </button>
        <button className="p-1 text-dark-text-secondary hover:text-red-500">
          <X size={16} />
        </button>
      </div>
    </div>
  </>
);

const CompletedView = ({ download }: { download: Download }) => (
  <div className="flex items-center gap-3">
    <img src={download.thumbnailUrl} alt="video thumbnail" className="w-20 h-14 rounded-lg object-cover" />
    <div className="flex-1">
      <p className="text-sm font-medium text-dark-text truncate">{download.fileName}</p>
      <div className="flex items-center gap-2 text-xs text-dark-text-secondary mt-1">
        {platformIcons[download.platform]}
        <span>{download.duration}</span>
      </div>
    </div>
    <div className="flex items-center gap-1">
        <button className="p-2 text-dark-text-secondary hover:text-white"><Play size={18} /></button>
        <button className="p-2 text-dark-text-secondary hover:text-white"><Share2 size={18} /></button>
        <button className="p-2 text-dark-text-secondary hover:text-red-500"><Trash2 size={18} /></button>
    </div>
  </div>
);


const DownloadItem = ({ download }: { download: Download }) => {
  const isCompleted = download.status === 'completed';

  return (
    <div className="bg-dark-surface p-3 rounded-xl shadow-md">
      {!isCompleted && (
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            {download.status === 'error' ? <AlertTriangle size={16} className="text-red-500" /> : platformIcons[download.platform]}
            <p className="text-sm font-medium text-dark-text truncate max-w-[200px]">{download.fileName}</p>
          </div>
          <button className="text-dark-text-secondary -me-1">
            <MoreVertical size={20} />
          </button>
        </div>
      )}
      {isCompleted ? <CompletedView download={download} /> : <InProgressView download={download} />}
    </div>
  );
};

export default DownloadItem;
