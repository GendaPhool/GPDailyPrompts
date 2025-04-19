import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import SubscriptionPacks from './pages/SubscriptionPacks';
import ManageSubscription from './pages/ManageSubscription';
import RequestSupport from './pages/RequestSupport';
import AccountSettings from './pages/AccountSettings';
import EditProfile from './pages/EditProfile';
import AddressBook from './pages/AddressBook';
import CustomizeDays from './pages/CustomizeDays';
import ModifySubscription from './pages/subscription/ModifySubscription';
import CancelSubscription from './pages/subscription/CancelSubscription';
import PauseSubscription from './pages/subscription/PauseSubscription';
import WhatsappLogin from './pages/onboarding/WhatsappLogin';
import UserInfo from './pages/onboarding/UserInfo';
import LocationPicker from './pages/onboarding/LocationPicker';
import UnsupportedArea from './pages/onboarding/UnsupportedArea';
export function App() {
  return <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subscription-packs" element={<SubscriptionPacks />} />
          <Route path="/customize-days" element={<CustomizeDays />} />
          <Route path="/manage-subscription" element={<ManageSubscription />} />
          <Route path="/request-support" element={<RequestSupport />} />
          <Route path="/account-settings" element={<AccountSettings />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/address-book" element={<AddressBook />} />
          <Route path="/subscription/modify/:id" element={<ModifySubscription />} />
          <Route path="/subscription/cancel/:id" element={<CancelSubscription />} />
          <Route path="/subscription/pause/:id" element={<PauseSubscription />} />
          <Route path="/login" element={<WhatsappLogin />} />
          <Route path="/onboarding/user-info" element={<UserInfo />} />
          <Route path="/onboarding/location" element={<LocationPicker />} />
          <Route path="/onboarding/unsupported" element={<UnsupportedArea />} />
        </Routes>
      </Layout>
    </Router>;
}