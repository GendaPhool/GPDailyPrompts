import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, WalletIcon, UserIcon } from 'lucide-react';
import WalletWidget from './wallet/WalletWidget';
const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const getTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Home';
      case '/subscription-packs':
        return 'Subscription Packs';
      case '/customize-days':
        return 'Customize Days';
      case '/manage-subscription':
        return 'Manage Subscription';
      case '/request-support':
        return 'Request & Support';
      case '/account-settings':
        return 'Account & Settings';
      case '/edit-profile':
        return 'Edit Profile';
      case '/address-book':
        return 'Address Book';
      default:
        return 'Genda Phool';
    }
  };
  const isHome = location.pathname === '/';
  return <header className="fixed top-0 left-0 right-0 z-10 bg-white shadow-sm">
      <div className="max-w-md mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          {!isHome && <button onClick={() => navigate(-1)} className="mr-3 p-1 rounded-full hover:bg-gray-100">
              <ArrowLeftIcon size={20} />
            </button>}
          <h1 className="text-xl font-medium text-gray-800">{getTitle()}</h1>
        </div>
        <div className="flex items-center space-x-3">
          <WalletWidget />
          <button onClick={() => navigate('/profile')} className="w-8 h-8 rounded-full overflow-hidden bg-accent-500 flex items-center justify-center">
            <UserIcon size={20} className="text-white" />
          </button>
        </div>
      </div>
    </header>;
};
export default Header;