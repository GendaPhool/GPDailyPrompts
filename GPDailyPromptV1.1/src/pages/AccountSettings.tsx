import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserIcon, MapPinIcon, CreditCardIcon, BellIcon, HelpCircleIcon, LogOutIcon, ChevronRightIcon } from 'lucide-react';
import Card from '../components/ui/Card';
const AccountSettings = () => {
  const navigate = useNavigate();
  const menuItems = [{
    id: 'profile',
    label: 'Edit Profile',
    icon: UserIcon,
    path: '/edit-profile'
  }, {
    id: 'address',
    label: 'Address Book',
    icon: MapPinIcon,
    path: '/address-book'
  }, {
    id: 'payment',
    label: 'Payment Methods',
    icon: CreditCardIcon,
    path: '/payment-methods'
  }, {
    id: 'notifications',
    label: 'Notifications',
    icon: BellIcon,
    path: '/notifications'
  }, {
    id: 'help',
    label: 'Help & Support',
    icon: HelpCircleIcon,
    path: '/request-support'
  }];
  return <div className="py-4 space-y-6">
      {/* User Profile Summary */}
      <Card className="flex items-center gap-4">
        <div className="h-16 w-16 rounded-full bg-pink-100 flex items-center justify-center">
          <UserIcon size={32} className="text-pink-600" />
        </div>
        <div>
          <h2 className="font-medium text-lg">Palash Sharma</h2>
          <p className="text-gray-500">+91 98765 43210</p>
          <p className="text-gray-500">palash@example.com</p>
        </div>
      </Card>
      {/* Settings Menu */}
      <Card className="divide-y divide-gray-100">
        {menuItems.map(item => {
        const IconComponent = item.icon;
        return <button key={item.id} onClick={() => navigate(item.path)} className="flex items-center justify-between w-full py-3 px-1 first:pt-1 last:pb-1">
              <div className="flex items-center">
                <IconComponent size={20} className="text-gray-500 mr-3" />
                <span className="text-gray-800">{item.label}</span>
              </div>
              <ChevronRightIcon size={18} className="text-gray-400" />
            </button>;
      })}
      </Card>
      {/* Billing History */}
      <Card>
        <h3 className="font-medium text-gray-800 mb-3">Billing History</h3>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between py-2 border-b border-gray-100">
            <div>
              <p className="font-medium">May 2023</p>
              <p className="text-gray-500">Brahma Pack • 4 weeks</p>
            </div>
            <p className="font-medium">₹1,196</p>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <div>
              <p className="font-medium">April 2023</p>
              <p className="text-gray-500">Brahma Pack • 4 weeks</p>
            </div>
            <p className="font-medium">₹1,196</p>
          </div>
          <div className="flex justify-between py-2">
            <div>
              <p className="font-medium">April 2023</p>
              <p className="text-gray-500">Vinayaka Pack • 4 weeks</p>
            </div>
            <p className="font-medium">₹596</p>
          </div>
        </div>
      </Card>
      {/* Logout Button */}
      <button className="flex items-center justify-center w-full py-3 text-red-600 font-medium">
        <LogOutIcon size={18} className="mr-2" />
        Logout
      </button>
    </div>;
};
export default AccountSettings;