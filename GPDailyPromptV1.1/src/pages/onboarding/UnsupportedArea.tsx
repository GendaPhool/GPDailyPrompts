import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangleIcon, MapPinIcon } from 'lucide-react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
const UnsupportedArea = () => {
  const navigate = useNavigate();
  return <div className="py-4 space-y-6">
      <div className="text-center">
        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <AlertTriangleIcon size={32} className="text-primary-500" />
        </div>
        <h1 className="text-2xl font-semibold text-gray-800">
          Area Not Serviceable
        </h1>
        <p className="text-gray-500 mt-2">
          We're not available in your area yet
        </p>
      </div>
      <Card>
        <div className="space-y-4">
          <div className="bg-primary-50 rounded-lg p-4">
            <p className="text-sm text-gray-600">
              We're currently operational in select areas of Kolkata. We're
              expanding rapidly and hope to reach your location soon!
            </p>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Currently Available In:
            </h3>
            <div className="space-y-2">
              {['Salt Lake', 'New Town', 'Park Street', 'Ballygunge'].map(area => <div key={area} className="flex items-center text-sm text-gray-600">
                    <MapPinIcon size={16} className="text-accent-500 mr-2" />
                    <span>{area}, Kolkata</span>
                  </div>)}
            </div>
          </div>
          <Button variant="outline" fullWidth onClick={() => navigate('/onboarding/location')}>
            Try Another Location
          </Button>
          <div className="text-center">
            <p className="text-sm text-gray-500">
              Want us to notify you when we're available in your area?
            </p>
            <button className="mt-2 text-sm font-medium text-primary-600">
              Get Notified
            </button>
          </div>
        </div>
      </Card>
    </div>;
};
export default UnsupportedArea;