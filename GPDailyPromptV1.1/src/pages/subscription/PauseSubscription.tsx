import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarIcon } from 'lucide-react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
const PauseSubscription = () => {
  const navigate = useNavigate();
  const [resumeDate, setResumeDate] = useState('');
  // Calculate min date (tomorrow)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];
  return <div className="py-4 space-y-6">
      <Card>
        <h2 className="text-lg font-medium text-gray-800 mb-4">
          Pause Subscription
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Resume delivery from
            </label>
            <div className="relative">
              <input type="date" min={minDate} value={resumeDate} onChange={e => setResumeDate(e.target.value)} className="w-full rounded-lg border-gray-300 shadow-sm focus:border-accent-500 focus:ring-accent-500 pl-10" />
              <CalendarIcon size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <div className="pt-4 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              What happens when you pause?
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Your subscription will be paused immediately</li>
              <li>• No deliveries will be made until the resume date</li>
              <li>• You won't be charged during the pause period</li>
              <li>
                • Your subscription will automatically resume on the selected
                date
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 flex gap-3">
          <Button fullWidth disabled={!resumeDate}>
            Confirm Pause
          </Button>
          <Button variant="outline" fullWidth onClick={() => navigate(-1)}>
            Cancel
          </Button>
        </div>
      </Card>
    </div>;
};
export default PauseSubscription;