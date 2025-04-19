import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
const WhatsappLogin = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOTP] = useState('');
  const handleSendOTP = () => {
    // Here you would integrate with your WhatsApp OTP service
    setShowOTP(true);
  };
  const handleVerifyOTP = () => {
    // Here you would verify the OTP
    navigate('/onboarding/user-info');
  };
  return <div className="py-4 space-y-6">
      <div className="text-center">
        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <div size={32} className="text-primary-500" />
        </div>
        <h1 className="text-2xl font-semibold text-gray-800">
          Welcome to Genda Phool
        </h1>
        <p className="text-gray-500 mt-2">Login with WhatsApp to continue</p>
      </div>
      <Card>
        <div className="space-y-4">
          {!showOTP ? <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    +91
                  </span>
                  <input type="tel" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} className="flex-1 rounded-r-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500" placeholder="Enter your phone number" maxLength={10} />
                </div>
              </div>
              <Button fullWidth onClick={handleSendOTP} disabled={phoneNumber.length !== 10}>
                Continue with WhatsApp
              </Button>
            </> : <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Enter OTP
                </label>
                <p className="text-sm text-gray-500 mb-3">
                  We've sent a verification code to your WhatsApp
                </p>
                <input type="text" value={otp} onChange={e => setOTP(e.target.value)} className="w-full rounded-lg border-gray-300 focus:border-primary-500 focus:ring-primary-500" placeholder="Enter 6-digit OTP" maxLength={6} />
              </div>
              <Button fullWidth onClick={handleVerifyOTP} disabled={otp.length !== 6}>
                Verify OTP
              </Button>
              <button className="w-full text-sm text-primary-600 font-medium" onClick={() => setShowOTP(false)}>
                Change Phone Number
              </button>
            </>}
        </div>
      </Card>
      <div className="text-center text-sm text-gray-500">
        By continuing, you agree to our{' '}
        <button className="text-primary-600 font-medium">
          Terms of Service
        </button>{' '}
        and{' '}
        <button className="text-primary-600 font-medium">Privacy Policy</button>
      </div>
    </div>;
};
export default WhatsappLogin;