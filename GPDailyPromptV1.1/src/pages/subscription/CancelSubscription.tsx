import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangleIcon } from 'lucide-react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
const CancelSubscription = () => {
  const navigate = useNavigate();
  const [reason, setReason] = useState('');
  const reasons = ['Too expensive', 'Quality issues', 'Delivery timing issues', 'Moving to a different location', 'Taking a break', 'Other'];
  return <div className="py-4 space-y-6">
      <Card className="border border-primary-100">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-primary-100 rounded-full">
            <AlertTriangleIcon size={20} className="text-primary-500" />
          </div>
          <div>
            <h3 className="font-medium text-gray-800">Cancel Subscription?</h3>
            <p className="text-sm text-gray-600 mt-1">
              Your subscription will be cancelled immediately and you won't
              receive any further deliveries.
            </p>
          </div>
        </div>
      </Card>
      <Card>
        <h2 className="text-lg font-medium text-gray-800 mb-4">
          Help us improve
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Why are you cancelling?
            </label>
            <div className="space-y-2">
              {reasons.map(r => <button key={r} onClick={() => setReason(r)} className={`w-full p-3 rounded-lg border ${reason === r ? 'border-accent-500 bg-accent-50' : 'border-gray-200'} text-left`}>
                  <span className="font-medium text-gray-800">{r}</span>
                </button>)}
            </div>
          </div>
          {reason && <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional comments (optional)
              </label>
              <textarea rows={3} className="w-full rounded-lg border-gray-300 shadow-sm focus:border-accent-500 focus:ring-accent-500" placeholder="Tell us more..." />
            </div>}
        </div>
        <div className="mt-6 flex gap-3">
          <Button variant="outline" fullWidth onClick={() => navigate(-1)}>
            Keep Subscription
          </Button>
          <Button fullWidth className="bg-red-600 hover:bg-red-700 focus:ring-red-500">
            Cancel Subscription
          </Button>
        </div>
      </Card>
    </div>;
};
export default CancelSubscription;