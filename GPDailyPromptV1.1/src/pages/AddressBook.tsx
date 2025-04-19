import React, { Component } from 'react';
import { MapPinIcon, PlusIcon, HomeIcon, BriefcaseIcon, EditIcon, TrashIcon } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
const AddressBook = () => {
  const addresses = [{
    id: 1,
    type: 'home',
    default: true,
    name: 'Home',
    address: '42, Lotus Colony, Lake Gardens',
    city: 'Kolkata',
    state: 'West Bengal',
    pincode: '700045',
    phone: '+91 98765 43210'
  }, {
    id: 2,
    type: 'work',
    default: false,
    name: 'Office',
    address: 'Floor 5, Tech Park Building',
    city: 'Kolkata',
    state: 'West Bengal',
    pincode: '700091',
    phone: '+91 98765 43210'
  }];
  return <div className="py-4 space-y-6">
      {/* Addresses */}
      <div className="space-y-4">
        {addresses.map(address => {
        const isHome = address.type === 'home';
        const IconComponent = isHome ? HomeIcon : BriefcaseIcon;
        return <Card key={address.id} className={`border-l-4 ${address.default ? 'border-green-500' : 'border-gray-200'}`}>
              <div className="flex justify-between items-start">
                <div className="flex items-start">
                  <div className={`p-2 rounded-full mr-3 ${isHome ? 'bg-green-100' : 'bg-blue-100'}`}>
                    <IconComponent size={16} className={isHome ? 'text-green-600' : 'text-blue-600'} />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h3 className="font-medium text-gray-800">
                        {address.name}
                      </h3>
                      {address.default && <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                          Default
                        </span>}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {address.address}
                    </p>
                    <p className="text-sm text-gray-600">
                      {address.city}, {address.state} - {address.pincode}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      {address.phone}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <Button variant="outline" size="sm" className="flex items-center justify-center">
                  <EditIcon size={16} className="mr-1" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="flex items-center justify-center text-red-600 border-red-600 hover:bg-red-50">
                  <TrashIcon size={16} className="mr-1" />
                  Delete
                </Button>
                {!address.default && <Button size="sm" className="flex-1">
                    Set as Default
                  </Button>}
              </div>
            </Card>;
      })}
      </div>
      {/* Add New Address */}
      <Button fullWidth variant="outline" className="flex items-center justify-center">
        <PlusIcon size={18} className="mr-2" />
        Add New Address
      </Button>
      {/* New Address Form (Hidden by default) */}
      <Card className="hidden">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Add New Address
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address Name
            </label>
            <input type="text" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500" placeholder="Home, Office, etc." />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Address
            </label>
            <textarea className="w-full rounded-lg border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500" rows={2} placeholder="Street address, building, etc."></textarea>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <input type="text" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                State
              </label>
              <input type="text" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              PIN Code
            </label>
            <input type="text" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input type="tel" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500" />
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="default-address" className="rounded border-gray-300 text-pink-600 focus:ring-pink-500" />
            <label htmlFor="default-address" className="ml-2 text-sm text-gray-700">
              Set as default address
            </label>
          </div>
          <div className="flex gap-3">
            <Button fullWidth>Save Address</Button>
            <Button variant="outline" fullWidth>
              Cancel
            </Button>
          </div>
        </div>
      </Card>
    </div>;
};
export default AddressBook;