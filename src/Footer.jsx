import React from 'react';
import moneeLogoBlack from './assets/monee-logo.png';

const Footer = () => {
  return (
    <div className="mx-auto pt-12 max-w-screen-xl">
      
      <div className="flex flex-col-reverse justify-between pt-12 pb-12 border-t border-gray-200 lg:flex-row">
        <p className="text-sm text-gray-600">
        Monee © Copyright 2023 All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          
          <li>
            <a href="/" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy Policy</a>
          </li>
          <li>
            <a href="/" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Updates & Change Policy</a>
          </li>
          <li>
            <a href="/" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Terms &amp; Conditions</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
