import React from 'react';
import { UserIcon, CameraIcon } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
const EditProfile = () => {
  return <div className="py-4 space-y-6">
      {/* Profile Picture */}
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="h-24 w-24 rounded-full bg-pink-100 flex items-center justify-center">
            <UserIcon size={48} className="text-pink-600" />
          </div>
          <button className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-md border border-gray-200">
            <CameraIcon size={16} />
          </button>
        </div>
      </div>
      {/* Edit Form */}
      <Card>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Personal Information
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input type="text" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500" defaultValue="Palash Sharma" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input type="email" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500" defaultValue="palash@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input type="tel" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500" defaultValue="+91 98765 43210" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date of Birth
            </label>
            <input type="date" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500" defaultValue="1985-06-15" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Language Preference
            </label>
            <select className="w-full rounded-lg border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500">
              <option>English</option>
              <option>Hindi</option>
              <option>Bengali</option>
              <option>Tamil</option>
              <option>Telugu</option>
            </select>
          </div>
        </div>
      </Card>
      {/* Password Section */}
      <Card>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Change Password
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Current Password
            </label>
            <input type="password" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New Password
            </label>
            <input type="password" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm New Password
            </label>
            <input type="password" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500" />
          </div>
        </div>
      </Card>
      {/* Save Button */}
      <Button fullWidth>Save Changes</Button>
    </div>;
};
export default EditProfile;