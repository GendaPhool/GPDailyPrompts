import React, { Fragment } from 'react';
import { CalendarIcon, PauseIcon, EditIcon, XIcon, ClockIcon } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
const ManageSubscription = () => {
  const subscriptions = [{
    id: 1,
    name: 'Brahma Pack',
    status: 'active',
    frequency: 'Daily • Mon-Sat',
    nextDelivery: 'Tomorrow, 7:00 AM',
    price: '₹299/week',
    image: 'https://images.unsplash.com/photo-1602928298849-325cec8771c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  }, {
    id: 2,
    name: 'Vinayaka Pack',
    status: 'paused',
    frequency: 'Weekly • Thursday',
    nextDelivery: 'Paused',
    price: '₹149/week',
    image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  }];
  const deliveryHistory = [{
    id: 101,
    date: 'May 9, 2023',
    items: 'Brahma Pack',
    status: 'Delivered',
    time: '6:55 AM'
  }, {
    id: 102,
    date: 'May 8, 2023',
    items: 'Brahma Pack',
    status: 'Delivered',
    time: '7:02 AM'
  }, {
    id: 103,
    date: 'May 5, 2023',
    items: 'Vinayaka Pack',
    status: 'Delivered',
    time: '6:50 AM'
  }];
  return <div className="py-4 space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-3">
          Active Subscriptions
        </h2>
        <div className="space-y-4">
          {subscriptions.map(sub => <Card key={sub.id} className="border-l-4 border-pink-500">
              <div className="flex gap-3">
                <div className="h-16 w-16 rounded-xl overflow-hidden">
                  <img src={sub.image} alt={sub.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-gray-800">{sub.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${sub.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
                      {sub.status === 'active' ? 'Active' : 'Paused'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{sub.frequency}</p>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <CalendarIcon size={14} className="mr-1" />
                    <span>Next: {sub.nextDelivery}</span>
                  </div>
                  <p className="text-sm font-medium text-pink-600 mt-1">
                    {sub.price}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                {sub.status === 'active' ? <Button variant="outline" size="sm" fullWidth className="flex items-center justify-center">
                    <PauseIcon size={16} className="mr-1" />
                    Pause
                  </Button> : <Button size="sm" fullWidth className="flex items-center justify-center">
                    Resume
                  </Button>}
                <Button variant="outline" size="sm" fullWidth className="flex items-center justify-center">
                  <EditIcon size={16} className="mr-1" />
                  Modify
                </Button>
                <Button variant="outline" size="sm" fullWidth className="flex items-center justify-center text-red-600 border-red-600 hover:bg-red-50">
                  <XIcon size={16} className="mr-1" />
                  Cancel
                </Button>
              </div>
            </Card>)}
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-3">
          Delivery History
        </h2>
        <Card>
          {deliveryHistory.map((delivery, index) => <Fragment key={delivery.id}>
              {index > 0 && <div className="border-t border-gray-100 my-3"></div>}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-800">{delivery.date}</p>
                  <p className="text-sm text-gray-500">{delivery.items}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-green-600">
                    {delivery.status}
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <ClockIcon size={12} className="mr-1" />
                    <span>{delivery.time}</span>
                  </div>
                </div>
              </div>
            </Fragment>)}
        </Card>
      </div>
    </div>;
};
export default ManageSubscription;