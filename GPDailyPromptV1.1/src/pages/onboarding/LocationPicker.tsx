import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPinIcon, SearchIcon } from 'lucide-react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
const LocationPicker = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const handleContinue = () => {
    // Here you would check if the location is serviceable
    const isServiceable = true; // This would be determined by your backend
    if (isServiceable) {
      navigate('/');
    } else {
      navigate('/onboarding/unsupported');
    }
  };
  return <div className="py-4 space-y-6">
      <div className="text-center">
        <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <MapPinIcon size={32} className="text-accent-500" />
        </div>
        <h1 className="text-2xl font-semibold text-gray-800">
          Set your location
        </h1>
        <p className="text-gray-500 mt-2">
          To find available services near you
        </p>
      </div>
      <Card>
        <div className="space-y-4">
          <div className="relative">
            <SearchIcon size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-10 rounded-lg border-gray-300 focus:border-accent-500 focus:ring-accent-500" placeholder="Search your area" />
          </div>
          <div className="space-y-2">
            <button onClick={() => setSelectedLocation('current')} className={`w-full p-3 rounded-lg border text-left ${selectedLocation === 'current' ? 'border-accent-500 bg-accent-50' : 'border-gray-200'}`}>
              <div className="flex items-center">
                <MapPinIcon size={20} className="text-accent-500 mr-2" />
                <span className="font-medium text-gray-800">
                  Use current location
                </span>
              </div>
            </button>
            {/* Example suggested locations */}
            {['Kolkata', 'Delhi', 'Mumbai', 'Bangalore'].map(city => <button key={city} onClick={() => setSelectedLocation(city)} className={`w-full p-3 rounded-lg border text-left ${selectedLocation === city ? 'border-accent-500 bg-accent-50' : 'border-gray-200'}`}>
                <span className="font-medium text-gray-800">{city}</span>
              </button>)}
          </div>
          <Button fullWidth onClick={handleContinue} disabled={!selectedLocation}>
            Continue
          </Button>
        </div>
      </Card>
    </div>;
};
export default LocationPicker;