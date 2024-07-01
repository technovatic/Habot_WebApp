import React from 'react';
import { FaUserPlus, FaClipboardList, FaFileAlt, FaEnvelopeOpenText, FaHandshake } from 'react-icons/fa';

const steps = [
  { title: 'Select Your Role and Sign Up', icon: <FaUserPlus size={50} />, bgColor: 'bg-blue-200' },
  { title: 'Buyers Post Your Requirements', icon: <FaClipboardList size={50} /> },
  { title: 'Review, Select, and Contact the Best Suppliers', icon: <FaFileAlt size={50} />, bgColor: 'bg-blue-200' },
  { title: 'Suppliers Complete your profile and get notified for opportunities', icon: <FaEnvelopeOpenText size={50} /> },
  { title: 'Contact to Buyers and Share your Quote for the service', icon: <FaFileAlt size={50} />, bgColor: 'bg-blue-200' },
  { title: 'Both the Parties can Connect and Make Business Leave a Feedback', icon: <FaHandshake size={50} /> }
];

const HowItWorks = () => {
  return (
    <div className="text-center mt-24 mx-4 md:mx-20 lg:mx-40">
      <h3 className="text-6xl font-bold mb-4">How it works?</h3>
      <p className="text-gray-600 mb-20 text-2xl mt-2">
        Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with
        potential buyers, and build successful business relationships, sharing valuable feedback.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 justify-center">
        {steps.map((step, index) => (
          <div key={index} className={`p-6 ${step.bgColor} flex flex-col items-center w-full h-48`}>
            <div className="text-orange-500 mb-4">{step.icon}</div>
            <h4 className="text-lg font-semibold">{step.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowItWorks;
