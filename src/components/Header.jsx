import React, { useState } from 'react';
import logo from './logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white p-4 flex justify-between items-center sticky top-0 z-50">
      <img src={logo} alt="HABOT Logo" className="h-10 w-auto" />
      <div className="md:flex items-center hidden">
        <div className="text-black mr-6">Find Suppliers</div>
        <div className="flex items-center text-black mr-8">
          Find Service Tags
          <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
        </div>
        <button className="bg-green-500 text-white px-4 py-2 rounded">Login / Sign Up</button>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-black h-6 w-6" />
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md p-4 flex flex-col items-start md:hidden">
          <div className="text-black mb-4">Find Suppliers</div>
          <div className="flex items-center text-black mb-4">
            Find Service Tags
            <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded w-full">Login / Sign Up</button>
        </div>
      )}
    </header>
  );
}

export default Header;
