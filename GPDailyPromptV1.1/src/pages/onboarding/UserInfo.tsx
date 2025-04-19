import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserIcon } from 'lucide-react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
const UserInfo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    language: 'english'
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/onboarding/location');
  };
  return <div className="py-4 space-y-6">
      <div className="text-center">
        <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <UserIcon size={32} className="text-accent-500" />
        </div>
        <h1 className="text-2xl font-semibold text-gray-800">
          Tell us about yourself
        </h1>
        <p className="text-gray-500 mt-2">
          This helps us personalize your experience
        </p>
      </div>
      <Card>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input type="text" value={formData.name} onChange={e => setFormData({
            ...formData,
            name: e.target.value
          })} className="w-full rounded-lg border-gray-300 focus:border-accent-500 focus:ring-accent-500" placeholder="Enter your full name" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input type="email" value={formData.email} onChange={e => setFormData({
            ...formData,
            email: e.target.value
          })} className="w-full rounded-lg border-gray-300 focus:border-accent-500 focus:ring-accent-500" placeholder="Enter your email" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Language
            </label>
            <select value={formData.language} onChange={e => setFormData({
            ...formData,
            language: e.target.value
          })} className="w-full rounded-lg border-gray-300 focus:border-accent-500 focus:ring-accent-500">
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
              <option value="bengali">Bengali</option>
              <option value="tamil">Tamil</option>
              <option value="telugu">Telugu</option>
            </select>
          </div>
          <Button type="submit" fullWidth disabled={!formData.name || !formData.email}>
            Continue
          </Button>
        </form>
      </Card>
    </div>;
};
export default UserInfo;