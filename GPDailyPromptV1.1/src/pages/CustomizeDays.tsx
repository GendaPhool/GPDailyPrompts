import React, { useState } from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
const CustomizeDays = () => {
  const [selectedDays, setSelectedDays] = useState({
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: true,
    sunday: false
  });
  const days = [{
    id: 'monday',
    label: 'Mon'
  }, {
    id: 'tuesday',
    label: 'Tue'
  }, {
    id: 'wednesday',
    label: 'Wed'
  }, {
    id: 'thursday',
    label: 'Thu'
  }, {
    id: 'friday',
    label: 'Fri'
  }, {
    id: 'saturday',
    label: 'Sat'
  }, {
    id: 'sunday',
    label: 'Sun'
  }];
  const handleDayToggle = dayId => {
    setSelectedDays(prev => ({
      ...prev,
      [dayId]: !prev[dayId]
    }));
  };
  const selectedDaysCount = Object.values(selectedDays).filter(Boolean).length;
  const weeklyPrice = 249 * (selectedDaysCount / 7);
  const formattedPrice = `₹${weeklyPrice.toFixed(0)}/week`;
  return <div className="py-4 space-y-6">
      <Card>
        <h2 className="text-xl font-medium text-gray-800 mb-4">Rudra Pack</h2>
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            Select delivery days:
          </h3>
          <div className="flex justify-between gap-2">
            {days.map(day => <button key={day.id} onClick={() => handleDayToggle(day.id)} className={`flex-1 aspect-square flex items-center justify-center rounded-full text-sm font-medium transition-colors ${selectedDays[day.id] ? 'bg-pink-600 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>
                {day.label}
              </button>)}
          </div>
        </div>
        <div className="py-4 border-t border-b border-gray-200">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-700">Selected Days</span>
            <span className="font-medium">{selectedDaysCount} days/week</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Weekly Price</span>
            <span className="font-medium text-pink-600">{formattedPrice}</span>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-500 mb-4">
            Your flowers will be delivered fresh on your selected days before
            7:00 AM.
          </p>
          <Button fullWidth>Subscribe Now</Button>
        </div>
      </Card>
      <Card>
        <h3 className="text-sm font-medium text-gray-700 mb-3">
          Included flowers:
        </h3>
        <div className="flex flex-wrap gap-2">
          <div className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">
            Bel Leaves
          </div>
          <div className="bg-pink-100 text-pink-800 text-xs px-3 py-1 rounded-full">
            Lotus
          </div>
          <div className="bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full">
            Marigold
          </div>
          <div className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
            Incense Sticks
          </div>
        </div>
      </Card>
    </div>;
};
export default CustomizeDays;