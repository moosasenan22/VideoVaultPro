import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download } from '../types';
import DownloadItem from './DownloadItem';

interface DownloadListProps {
  downloads: Download[];
}

const DownloadList = ({ downloads }: DownloadListProps) => {
  const [activeTab, setActiveTab] = useState<'inProgress' | 'completed'>('inProgress');

  const inProgressDownloads = downloads.filter(d => d.status === 'downloading' || d.status === 'paused' || d.status === 'error');
  const completedDownloads = downloads.filter(d => d.status === 'completed');

  const tabs = [
    { id: 'inProgress', label: `قيد التقدم (${inProgressDownloads.length})` },
    { id: 'completed', label: `مكتمل (${completedDownloads.length})` },
  ];

  const currentDownloads = activeTab === 'inProgress' ? inProgressDownloads : completedDownloads;

  return (
    <div className="px-4 space-y-4">
      <div className="flex bg-dark-surface-2 p-1 rounded-full">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`${activeTab === tab.id ? '' : 'hover:bg-white/5'} relative w-full text-sm font-medium py-2 rounded-full transition-colors`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="bubble"
                className="absolute inset-0 bg-brand-primary rounded-full"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10 text-white">{tab.label}</span>
          </button>
        ))}
      </div>
      
      <div className="space-y-3">
        <AnimatePresence>
          {currentDownloads.map((download, index) => (
            <motion.div
              key={download.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: index * 0.05 }}
            >
              <DownloadItem download={download} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DownloadList;
