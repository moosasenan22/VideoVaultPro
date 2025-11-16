import { Settings } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-dark-surface z-20 px-4 py-3 flex items-center justify-between shadow-lg">
      <button className="p-2 text-dark-text-secondary hover:text-white transition-colors">
        <Settings size={24} />
      </button>
      <h1 className="text-xl font-bold text-white">VideoVault Pro</h1>
    </header>
  );
};

export default Header;
