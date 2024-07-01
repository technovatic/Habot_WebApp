import React from 'react';

const Verification = () => {
  return (
    <div className="flex flex-col items-center bg-blue-300 p-4">
      <span className="text-black font-semibold text-4xl mb-4 text-center">
        LET SUPPLIERS{' '}
        <span className="relative block md:inline">
          <span> FIND YOU </span>
          <span className="absolute left-0 bottom-0 w-full border-t-2 border-orange-500 hidden md:block"></span>
        </span>
      </span>
      <button className="bg-orange-500 text-white px-6 py-4 rounded">
        Get Verified
      </button>
    </div>
  );
};

export default Verification;
