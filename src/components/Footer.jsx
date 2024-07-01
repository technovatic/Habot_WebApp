import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8 mt-32">
      <div className="container mx-auto px-4 border-t border-b border-white">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 py-8">
          <div className="flex flex-col items-center md:items-start">
            <img src="logo.png" alt="Logo" className="h-16 mb-2" />
            <p>© R Singhania</p>
          </div>
          <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-8 md:space-y-0 md:space-x-8 mt-4 md:mt-0">
            <div className="flex flex-col items-center md:items-start space-y-3">
              <h3 className="font-semibold">Company</h3>
              <a href="www" className="hover:underline">About</a>
              <a href="www" className="hover:underline">FAQ</a>
            </div>
            <div className="flex flex-col items-center md:items-start space-y-3">
              <h3 className="font-semibold">Terms</h3>
              <a href="www" className="hover:underline">Data Privacy</a>
              <a href="www" className="hover:underline">Terms</a>
              <a href="www" className="hover:underline">Accessibility</a>
            </div>
            <div className="flex flex-col items-center md:items-start space-y-3">
              <h3 className="font-semibold">Related</h3>
              <a href="www" className="hover:underline">Find Buyer</a>
              <a href="www" className="hover:underline">Feedback</a>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="www" className="text-white hover:text-gray-400">
              <div className="p-2 border border-white rounded-full">
                <FaLinkedin size={20} />
              </div>
            </a>
            <a href="www" className="text-white hover:text-gray-400">
              <div className="p-2 border border-white rounded-full">
                <FaTwitter size={20} />
              </div>
            </a>
            <a href="www" className="text-white hover:text-gray-400">
              <div className="p-2 border border-white rounded-full">
                <FaFacebook size={20} />
              </div>
            </a>
            <a href="www" className="text-white hover:text-gray-400">
              <div className="p-2 border border-white rounded-full">
                <FaInstagram size={20} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
