import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const cities = {
  'Abu Dhabi': { lat: 24.4539, lng: 54.3773 },
  'Dubai': { lat: 25.2048, lng: 55.2708 },
  'Sharjah & Ajman': { lat: 25.3463, lng: 55.4209 },
  'Ras Al Khaimah': { lat: 25.8007, lng: 55.9762 },
  'Fujairah': { lat: 25.2760, lng: 56.3410 },
  'Umm Al Quwain': { lat: 25.5610, lng: 55.5470 },
};

const InformationSection = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedCity, setSelectedCity] = useState('Dubai'); // default city

  const handleRoleClick = (role) => {
    setSelectedRole(role);
  };

  const handleCityClick = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className="bg-white p-4 md:p-8 rounded-lg mx-2 md:mx-10 mb-8">
      <div className="flex flex-col md:flex-row items-start justify-between mb-8">
        <div className="flex flex-col items-start w-full md:w-1/2 mb-4 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Ready to dive into <span className="text-indigo-600">HABOT?</span>
          </h1>
          <p className="text-gray-600 text-4xl md:text-xl mb-6">
            Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.
          </p>
          <button className="bg-green-500 text-white py-3 px-6 rounded-full flex items-center">
            Sign up Today! <span className="ml-2">&rarr;</span>
          </button>
        </div>
        <div className="flex flex-col items-end w-full md:w-1/2 mt-4 md:mt-0 mr-2">
          <div className="flex justify-center items-center mb-4 w-full overflow-x-auto ">
            {Object.keys(cities).map((city) => (
              <button
                key={city}
                className={`bg-gray-100 py-1 px-2 md:py-2 md:px-3 rounded-lg text-xs md:text-sm m-2 ${
                  selectedCity === city ? 'bg-gray-300' : ''
                }`}
                onClick={() => handleCityClick(city)}
              >
                {city}
              </button>
            ))}
          </div>
          <div className="relative w-full h-36 md:h-48">
            <LoadScript googleMapsApiKey="AIzaSyB6jQDMMrqQ-lFG1MI9GirMwEJXITOWC3A">
              <GoogleMap
                mapContainerStyle={{ width: '100%', height: '100%' }}
                center={cities[selectedCity]}
                zoom={10}
              >
                {selectedCity && <Marker position={cities[selectedCity]} icon={{ url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png" }} />}
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </div>

      <div className="bg-blue-800 p-8 rounded-lg flex flex-col sm:flex-row items-center justify-around mb-8">
        <div className="mb-6 sm:mb-0 sm:w-1/2">
          <h3 className="text-2xl font-bold mb-4 text-center text-white">POST YOUR REQUIREMENTS</h3>
          <div className="relative pb-[56.25%] h-10 mt-10 mx-auto md:ml-14">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/IZLp-TZyDkQ?si=WRdqyKqG6uCBQxwI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div
          className={`flex flex-col justify-center text-white w-full sm:w-1/3 sm:ml-12 p-4 ${
            selectedRole === 'buyer' ? 'scale-105' : ''
          }`}
          onClick={() => handleRoleClick('buyer')}
          style={{ transition: 'transform 0.2s' }}
        >
          <h2
            className={`text-xl font-bold mb-2 text-center ${
              selectedRole === 'buyer' ? 'bg-orange-500 text-black p-2 rounded-lg' : 'text-orange-500'
            }`}
          >
            Buyer
          </h2>
          <ul className="list-none text-start text-lg">
            <li className="flex items-start mb-4 mt-4">
              <span className="bg-green-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-left mr-2 mt-1">✔</span>
              <span className="ml-2">Post your requirements.</span>
            </li>
            <li className="flex items-start mb-4 mt-4">
              <span className="bg-green-500 text-white rounded-full w-4 h-4 flex items-center justify-center mr-2 mt-1">✔</span>
              <span className="ml-2">Sit back for multiple suppliers to contact you.</span>
            </li>
            <li className="flex items-start mt-4">
              <span className="bg-green-500 text-white rounded-full w-4 h-4 flex items-center justify-center mr-2 mt-1">✔</span>
              <span className="ml-2">Choose among the suppliers based on the ratings and reviews.</span>
            </li>
          </ul>
        </div>
        <div
          className={`flex flex-col justify-center text-white w-full sm:w-1/3 sm:ml-12 p-4 ${
            selectedRole === 'supplier' ? 'scale-105' : ''
          }`}
          onClick={() => handleRoleClick('supplier')}
          style={{ transition: 'transform 0.2s' }}
        >
          <h2
            className={`text-xl font-bold mb-2 text-center ${
              selectedRole === 'supplier' ? 'bg-orange-500 text-black p-2 rounded-lg' : 'text-orange-500'
            }`}
          >
            Supplier
          </h2>
          <ul className="list-none text-start text-lg">
            <li className="flex items-start mb-4 mt-4">
              <span className="bg-green-500 text-white rounded-full w-4 h-4 flex items-center justify-center mr-2 mt-1">✔</span>
              <span className="ml-2">Find new clients and business opportunities.</span>
            </li>
            <li className="flex items-start mb-4 mt-4">
              <span className="bg-green-500 text-white rounded-full w-4 h-4 flex items-center justify-center mr-2 mt-1">✔</span>
              <span className="ml-2">Grow your business by reaching out to potential buyers.</span>
            </li>
            <li className="flex items-start mt-4">
              <span className="bg-green-500 text-white rounded-full w-4 h-4 flex items-center justify-center mr-2 mt-1">✔</span>
              <span className="ml-2">Build your reputation through reviews and ratings.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InformationSection;
