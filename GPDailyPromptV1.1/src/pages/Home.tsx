import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PauseCircleIcon, SkipForwardIcon, PlusCircleIcon, FlowerIcon, AlertTriangleIcon, ChevronRightIcon } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
const Home = () => {
  const navigate = useNavigate();
  const walletBalance = 250; // This would come from your wallet service
  return <div className="space-y-6 py-4">
      {/* Welcome Banner */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Good Morning, Palash<span className="ml-1">🌸</span>
          </h2>
          <p className="text-gray-500">Wednesday, 10 May</p>
        </div>
      </div>
      {/* Wallet Alert */}
      {walletBalance < 500 && <Card className="bg-primary-50 border border-primary-200">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-primary-100 rounded-full">
              <AlertTriangleIcon size={20} className="text-primary-500" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-800">Low Balance Alert</h3>
              <p className="text-sm text-gray-600">
                Your wallet balance is running low
              </p>
              <div className="mt-2 flex gap-2">
                <Button variant="primary" size="sm">
                  Recharge Now
                </Button>
                <Button variant="outline" size="sm">
                  View History
                </Button>
              </div>
            </div>
          </div>
        </Card>}
      {/* Deal of the Day */}
      <Card className="bg-accent-50 border-l-4 border-accent-500">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-medium text-accent-500">
                Pack of the Day
              </h3>
              <span className="bg-accent-100 text-accent-500 text-xs px-2 py-1 rounded-full">
                Save 20%
              </span>
            </div>
            <p className="text-gray-600 mt-1">Premium Lotus & Rose Combo</p>
            <p className="mt-2">
              <span className="text-2xl font-semibold text-accent-500">
                ₹399
              </span>
              <span className="text-sm text-gray-500 line-through ml-2">
                ₹499
              </span>
            </p>
          </div>
          <Button variant="primary">Get Now</Button>
        </div>
      </Card>
      {/* Next Delivery Status */}
      <Card className="border-l-4 border-accent-500">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-sm font-medium text-gray-500">
              Your Next Delivery
            </h3>
            <p className="text-xl font-semibold text-gray-800">
              Tomorrow, 7:00 AM
            </p>
            <div className="mt-2 flex flex-wrap gap-1">
              <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">
                Marigold
              </span>
              <span className="bg-accent-100 text-accent-800 text-xs px-2 py-1 rounded-full">
                Roses
              </span>
              <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">
                Lotus
              </span>
            </div>
          </div>
          <div className="bg-accent-100 p-2 rounded-full">
            <FlowerIcon size={24} className="text-accent-500" />
          </div>
        </div>
        <div className="mt-4 space-y-3">
          <div className="flex gap-2">
            <button className="flex-1 flex flex-col items-center justify-center py-2 bg-gray-50 rounded-xl text-gray-700 hover:bg-gray-100">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center mb-1">
                <PauseCircleIcon size={24} strokeWidth={2} className="text-accent-500" />
              </div>
              <span className="text-xs">Pause</span>
            </button>
            <button className="flex-1 flex flex-col items-center justify-center py-2 bg-gray-50 rounded-xl text-gray-700 hover:bg-gray-100">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center mb-1">
                <SkipForwardIcon size={24} strokeWidth={2} className="text-accent-500" />
              </div>
              <span className="text-xs">Skip</span>
            </button>
            <button className="flex-1 flex flex-col items-center justify-center py-2 bg-gray-50 rounded-xl text-gray-700 hover:bg-gray-100">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center mb-1">
                <PlusCircleIcon size={24} strokeWidth={2} className="text-accent-500" />
              </div>
              <span className="text-xs">Add Items</span>
            </button>
          </div>
          <button onClick={() => navigate('/manage-subscription')} className="flex items-center justify-center w-full text-sm text-accent-500">
            Manage Subscription
            <ChevronRightIcon size={16} className="ml-1" />
          </button>
        </div>
      </Card>
      {/* Today's Mantra */}
      <Card className="bg-gradient-to-r from-amber-50 to-rose-50 border border-amber-200">
        <h3 className="text-sm font-medium text-amber-800">
          Today's Flower Wisdom
        </h3>
        <p className="mt-2 text-gray-700 italic">
          "Like the lotus flower that grows out of the mud and blossoms above
          the muddy water surface, we too can rise above our defilements."
        </p>
        <p className="mt-1 text-sm text-gray-500">— Buddhist Teaching</p>
      </Card>
      {/* Subscription Packs */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold text-gray-800">Popular Packs</h2>
          <button onClick={() => navigate('/subscription-packs')} className="text-pink-600 text-sm">
            View All
          </button>
        </div>
        <div className="space-y-3">
          {/* Subscription Pack Card */}
          <Card className="flex gap-3 items-center">
            <div className="h-16 w-16 rounded-xl overflow-hidden bg-amber-100 flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1572454591674-2739f30a2a43?ixlib=rb-1.2.1&auto=format&fit=crop&w=180&q=80" alt="Rudra Pack" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-800">Rudra Pack</h3>
              <p className="text-sm text-gray-500">Daily puja essentials</p>
              <p className="text-sm font-medium text-pink-600 mt-1">
                ₹249/week
              </p>
            </div>
            <Button variant="outline" size="sm">
              Subscribe
            </Button>
          </Card>
          <Card className="flex gap-3 items-center">
            <div className="h-16 w-16 rounded-xl overflow-hidden bg-amber-100 flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?ixlib=rb-1.2.1&auto=format&fit=crop&w=180&q=80" alt="Vinayaka Pack" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-800">Vinayaka Pack</h3>
              <p className="text-sm text-gray-500">Special Ganesh puja</p>
              <p className="text-sm font-medium text-pink-600 mt-1">
                ₹349/week
              </p>
            </div>
            <Button variant="outline" size="sm">
              Subscribe
            </Button>
          </Card>
        </div>
      </div>
      {/* Active Subscriptions */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold text-gray-800">
            Active Subscriptions
          </h2>
          <button onClick={() => navigate('/manage-subscription')} className="text-pink-600 text-sm">
            Manage
          </button>
        </div>
        <Card className="border-l-4 border-pink-500">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-gray-800">Brahma Pack</h3>
              <p className="text-sm text-gray-500">Daily delivery • Mon-Sat</p>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <span className="font-medium text-green-600">Active</span>
                <span className="mx-2">•</span>
                <span>Next: Tomorrow</span>
              </div>
            </div>
            <p className="text-sm font-medium text-pink-600">₹299/week</p>
          </div>
        </Card>
      </div>
    </div>;
};
export default Home;