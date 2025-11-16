import { Home, Library, Gem } from 'lucide-react';
import { useState } from 'react';

type NavItem = 'home' | 'library' | 'premium';

const NavLink = ({ icon: Icon, label, isActive, onClick }: { icon: React.ElementType, label: string, isActive: boolean, onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center w-full pt-2 pb-1 transition-colors duration-200 ${isActive ? 'text-brand-primary' : 'text-dark-text-secondary hover:text-white'}`}
  >
    <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
    <span className="text-xs font-medium mt-1">{label}</span>
  </button>
);

const BottomNav = () => {
  const [activeItem, setActiveItem] = useState<NavItem>('home');

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-dark-surface z-20 flex justify-around border-t border-dark-surface-2 shadow-[0_-10px_20px_-5px_rgba(0,0,0,0.2)]">
      <NavLink icon={Home} label="الرئيسية" isActive={activeItem === 'home'} onClick={() => setActiveItem('home')} />
      <NavLink icon={Library} label="المكتبة" isActive={activeItem === 'library'} onClick={() => setActiveItem('library')} />
      <NavLink icon={Gem} label="الترقية" isActive={activeItem === 'premium'} onClick={() => setActiveItem('premium')} />
    </nav>
  );
};

export default BottomNav;
