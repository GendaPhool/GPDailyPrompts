import React, { Component } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HomeIcon, PackageIcon, MessageSquareIcon, UserIcon } from 'lucide-react';
const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const navItems = [{
    path: '/',
    icon: HomeIcon,
    label: 'Home'
  }, {
    path: '/subscription-packs',
    icon: PackageIcon,
    label: 'Subscriptions'
  }, {
    path: '/request-support',
    icon: MessageSquareIcon,
    label: 'Support'
  }, {
    path: '/account-settings',
    icon: UserIcon,
    label: 'Account'
  }];
  return <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200">
      <div className="max-w-md mx-auto px-4">
        <ul className="flex justify-between">
          {navItems.map(item => {
          const isActive = location.pathname === item.path;
          const IconComponent = item.icon;
          return <li key={item.path} className="flex-1">
                <button onClick={() => navigate(item.path)} className={`flex flex-col items-center justify-center py-3 w-full ${isActive ? 'text-pink-600' : 'text-gray-500'}`}>
                  <IconComponent size={20} />
                  <span className="text-xs mt-1">{item.label}</span>
                </button>
              </li>;
        })}
        </ul>
      </div>
    </nav>;
};
export default Navigation;