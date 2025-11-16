import { DownloadCloud, Link, Youtube, Instagram, Facebook } from 'lucide-react';
import { TikTokIcon } from './icons/TikTokIcon';
import toast from 'react-hot-toast';

const PlatformButton = ({ icon: Icon, label }: { icon: React.ElementType, label: string }) => (
    <button className="flex flex-col items-center space-y-2 text-dark-text-secondary hover:text-white transition-colors">
        <div className="w-12 h-12 bg-dark-surface-2 rounded-full flex items-center justify-center">
            <Icon size={24} />
        </div>
        <span className="text-xs">{label}</span>
    </button>
);

const DownloadInput = () => {
    const handleDownload = () => {
        toast.success('بدء محاكاة التحميل!', {
            style: {
                background: '#333',
                color: '#fff',
                direction: 'rtl',
            },
        });
    };

    return (
        <div className="p-4 space-y-6">
            <div className="relative">
                <span className="absolute start-3 top-1/2 -translate-y-1/2 text-dark-text-secondary">
                    <Link size={20} />
                </span>
                <input
                    type="text"
                    placeholder="ألصق رابط الفيديو هنا..."
                    className="w-full bg-dark-surface-2 border border-dark-surface-2 rounded-full py-3 ps-10 pe-4 text-dark-text placeholder-dark-text-secondary focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
            </div>
            <button
                onClick={handleDownload}
                className="w-full flex items-center justify-center gap-2 bg-brand-primary text-white font-bold py-3 rounded-full hover:bg-opacity-90 transition-all duration-200 transform active:scale-95"
            >
                <DownloadCloud size={20} />
                <span>تحميل</span>
            </button>

            <div className="text-center">
                <p className="text-sm text-dark-text-secondary mb-4">أو قم بالتحميل من المنصات مباشرة</p>
                <div className="flex justify-around items-center">
                    <PlatformButton icon={Youtube} label="يوتيوب" />
                    <PlatformButton icon={Instagram} label="انستجرام" />
                    <PlatformButton icon={TikTokIcon} label="تيك توك" />
                    <PlatformButton icon={Facebook} label="فيسبوك" />
                </div>
            </div>
        </div>
    );
};

export default DownloadInput;
