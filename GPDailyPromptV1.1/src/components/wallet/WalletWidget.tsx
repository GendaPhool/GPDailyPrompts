import React, { useState } from 'react';
import { WalletIcon } from 'lucide-react';
import Card from '../ui/Card';
const WalletWidget = () => {
  const [showBalance, setShowBalance] = useState(false);
  const balance = 1250; // This would come from your wallet service
  return <div className="relative">
      <button onClick={() => setShowBalance(!showBalance)} className="p-2 rounded-full hover:bg-gray-100 relative">
        <WalletIcon size={20} className="text-accent-500" />
        {balance < 500 && <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary-500 rounded-full" />}
      </button>
      {showBalance && <div className="absolute right-0 mt-2 w-64 z-50">
          <Card>
            <div className="text-center">
              <p className="text-sm text-gray-600">Wallet Balance</p>
              <p className="text-xl font-semibold text-accent-500">
                ₹{balance}
              </p>
              <button className="mt-2 w-full bg-primary-500 text-white rounded-full py-2 text-sm font-medium">
                Recharge Now
              </button>
            </div>
          </Card>
        </div>}
    </div>;
};
export default WalletWidget;