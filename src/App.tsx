import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import DownloadInput from './components/DownloadInput';
import DownloadList from './components/DownloadList';
import { mockDownloads } from './data/mockData';
import { Download } from './types';

function App() {
  const [downloads, setDownloads] = useState<Download[]>(mockDownloads);

  return (
    <div className="bg-dark-bg text-dark-text min-h-screen font-sans">
      <Toaster position="bottom-center" />
      <Header />
      <main className="pt-20 pb-24">
        <div className="container mx-auto max-w-2xl space-y-6">
          <DownloadInput />
          <DownloadList downloads={downloads} />
        </div>
      </main>
      <BottomNav />
    </div>
  );
}

export default App;
