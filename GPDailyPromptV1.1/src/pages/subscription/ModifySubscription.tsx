import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
const ModifySubscription = () => {
  const {
    id
  } = useParams();
  const navigate = useNavigate();
  const [deliveryType, setDeliveryType] = useState('daily');
  const deliveryOptions = [{
    id: 'daily',
    label: 'Daily Delivery',
    price: '₹299/week'
  }, {
    id: 'alternate',
    label: 'Alternate Days',
    price: '₹199/week'
  }, {
    id: 'custom',
    label: 'Custom Days',
    price: 'Varies'
  }];
  const subscriptionPacks = [{
    id: 1,
    name: 'Rudra Pack',
    price: '₹249/week',
    image: 'https://images.unsplash.com/photo-1572454591674-2739f30a2a43?ixlib=rb-1.2.1&auto=format&fit=crop&w=180&q=80'
  }, {
    id: 2,
    name: 'Brahma Pack',
    price: '₹299/week',
    image: 'https://images.unsplash.com/photo-1602928298849-325cec8771c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=180&q=80'
  }];
  return <div className="py-4 space-y-6">
      <Card>
        <h2 className="text-lg font-medium text-gray-800 mb-4">
          Modify Subscription
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">
              Select Delivery Type
            </h3>
            <div className="space-y-2">
              {deliveryOptions.map(option => <button key={option.id} onClick={() => setDeliveryType(option.id)} className={`w-full p-3 rounded-lg border ${deliveryType === option.id ? 'border-accent-500 bg-accent-50' : 'border-gray-200'} text-left`}>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-800">
                      {option.label}
                    </span>
                    <span className="text-accent-500">{option.price}</span>
                  </div>
                </button>)}
            </div>
          </div>
          <div className="pt-4 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-700 mb-3">
              Change Pack (Optional)
            </h3>
            <div className="space-y-2">
              {subscriptionPacks.map(pack => <div key={pack.id} className="flex items-center gap-3 p-3 rounded-lg border border-gray-200">
                  <img src={pack.image} alt={pack.name} className="w-12 h-12 rounded-lg object-cover" />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800">{pack.name}</h4>
                    <p className="text-sm text-accent-500">{pack.price}</p>
                  </div>
                  <input type="radio" name="pack" className="h-4 w-4 text-accent-500 focus:ring-accent-500 border-gray-300" />
                </div>)}
            </div>
          </div>
        </div>
        <div className="mt-6 flex gap-3">
          <Button fullWidth>Save Changes</Button>
          <Button variant="outline" fullWidth onClick={() => navigate(-1)}>
            Cancel
          </Button>
        </div>
      </Card>
      {deliveryType === 'custom' && <Card>
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            Select Delivery Days
          </h3>
          {/* Reuse the day selector from CustomizeDays component */}
        </Card>}
    </div>;
};
export default ModifySubscription;