import React from 'react';
import { MessageSquareIcon, PhoneIcon, SendIcon, ClockIcon } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
const RequestSupport = () => {
  const supportRequests = [{
    id: 1,
    title: 'Missing items in delivery',
    date: 'May 8, 2023',
    status: 'In Progress',
    message: 'My delivery was missing 2 lotus flowers today.'
  }, {
    id: 2,
    title: 'Special request for festival',
    date: 'May 3, 2023',
    status: 'Resolved',
    message: 'Need extra marigold garlands for Diwali.'
  }];
  return <div className="py-4 space-y-6">
      {/* Support Options */}
      <Card>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          How can we help you?
        </h2>
        <div className="space-y-3">
          <Button fullWidth className="flex items-center justify-center">
            <MessageSquareIcon size={18} className="mr-2" />
            Chat with Support
          </Button>
          <Button variant="outline" fullWidth className="flex items-center justify-center">
            <PhoneIcon size={18} className="mr-2" />
            Call Support
          </Button>
        </div>
      </Card>
      {/* New Request */}
      <Card>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Raise a New Request
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Request Type
            </label>
            <select className="w-full rounded-lg border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500">
              <option>Delivery Issue</option>
              <option>Special Request</option>
              <option>Billing Query</option>
              <option>Subscription Help</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Message
            </label>
            <textarea className="w-full rounded-lg border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500" rows={4} placeholder="Please describe your issue or request..."></textarea>
          </div>
          <Button fullWidth className="flex items-center justify-center">
            <SendIcon size={18} className="mr-2" />
            Submit Request
          </Button>
        </div>
      </Card>
      {/* Previous Requests */}
      {supportRequests.length > 0 && <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            Your Requests
          </h2>
          <div className="space-y-3">
            {supportRequests.map(request => <Card key={request.id}>
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-gray-800">{request.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${request.status === 'Resolved' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
                    {request.status}
                  </span>
                </div>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <ClockIcon size={12} className="mr-1" />
                  <span>{request.date}</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">{request.message}</p>
                {request.status !== 'Resolved' && <div className="mt-3">
                    <Button size="sm" variant="outline" fullWidth>
                      View Details
                    </Button>
                  </div>}
              </Card>)}
          </div>
        </div>}
    </div>;
};
export default RequestSupport;