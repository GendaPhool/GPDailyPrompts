import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckIcon } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
const SubscriptionPacks = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('puja');
  const tabs = [{
    id: 'puja',
    label: 'Puja Flowers'
  }, {
    id: 'exotic',
    label: 'Exotic Flowers'
  }];
  const pujaFlowers = [{
    id: 1,
    name: 'Rudra Pack',
    description: 'Daily essentials for Shiva puja',
    price: '₹249/week',
    image: 'https://images.unsplash.com/photo-1572454591674-2739f30a2a43?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    includes: ['Bel Leaves', 'Lotus', 'Marigold', 'Incense Sticks']
  }, {
    id: 2,
    name: 'Brahma Pack',
    description: 'Complete morning puja flowers',
    price: '₹299/week',
    image: 'https://images.unsplash.com/photo-1602928298849-325cec8771c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    includes: ['Marigold', 'Roses', 'Jasmine', 'Tulsi Leaves']
  }, {
    id: 3,
    name: 'Vinayaka Pack',
    description: 'Special Ganesh puja flowers',
    price: '₹349/week',
    image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    includes: ['Red Hibiscus', 'Jasmine', 'Marigold', 'Durva Grass']
  }];
  const exoticFlowers = [{
    id: 4,
    name: 'Orchid Delight',
    description: 'Premium exotic flowers',
    price: '₹499/week',
    image: 'https://images.unsplash.com/photo-1566408669374-5a6d5dca1ef5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    includes: ['Orchids', 'Lilies', 'Anthuriums', 'Decorative Greens']
  }, {
    id: 5,
    name: 'Fragrance Special',
    description: 'Aromatic flowers for home',
    price: '₹399/week',
    image: 'https://images.unsplash.com/photo-1591710013970-ce5fec08d282?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    includes: ['Jasmine', 'Roses', 'Lavender', 'Chamomile']
  }];
  const renderFlowerPacks = () => {
    const packs = activeTab === 'puja' ? pujaFlowers : exoticFlowers;
    return <div className="space-y-6">
        {packs.map(pack => <Card key={pack.id} className="overflow-hidden">
            <div className="h-48 -mx-4 -mt-4 mb-3">
              <img src={pack.image} alt={pack.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-medium text-gray-800">{pack.name}</h3>
            <p className="text-gray-500">{pack.description}</p>
            <p className="text-lg font-semibold text-pink-600 mt-1">
              {pack.price}
            </p>
            <div className="mt-3">
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Includes:
              </h4>
              <div className="flex flex-wrap gap-2">
                {pack.includes.map((item, i) => <div key={i} className="flex items-center text-sm text-gray-600">
                    <CheckIcon size={14} className="text-green-600 mr-1" />
                    <span>{item}</span>
                  </div>)}
              </div>
            </div>
            <div className="mt-4 flex gap-3">
              <Button fullWidth>Subscribe Daily</Button>
              <Button variant="outline" fullWidth onClick={() => navigate('/customize-days')}>
                Customize Days
              </Button>
            </div>
          </Card>)}
      </div>;
  };
  return <div className="py-4">
      {/* Tabs */}
      <div className="flex bg-gray-100 rounded-full p-1 mb-6">
        {tabs.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex-1 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === tab.id ? 'bg-white text-pink-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
            {tab.label}
          </button>)}
      </div>
      {renderFlowerPacks()}
    </div>;
};
export default SubscriptionPacks;