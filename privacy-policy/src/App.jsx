import '../../src/App.css'
import moneeLogoBlack from './assets/monee-logo.png';

import { Container } from 'postcss';

const App = () => {
  return (
    <>
    <div className='px-10 pt-12 max-w-screen-xl md:mx-12 lg:px-0 lg:m-auto'>
  
  <header>
    <nav className="flex justify-between items-center">
    <a href='../../'>
  <div className="flex items-center text-left">
    <img src={moneeLogoBlack} alt="Logo" className="h-10 w-10 mr-6"/>
    <span className="text-2xl font-semibold text-black">Monee</span>
  </div></a>

  
  <div class="flex space-x-4">
    <a href="https://www.facebook.com/monee.ph/"  target='_blank' ><i className="text-slate-950 hover:text-blue-700 fa-brands fa-facebook-f"></i></a>
    <a href="https://discord.gg/CSkFTPYJEf" target='_blank' ><i className="text-slate-950 hover:text-blue-700 fa-brands fa-discord"></i></a>
  </div>
</nav>
</header>

<section className="flex flex-col items-left gap-8 sm:gap-0 mt-24 space-y-12 sm:space-y-32 lg:space-y-0 lg:space-x-4">
  
  <div className="space-y-16 py-11">
    <h1 className="text-5xl font-medium mb-4 text-black leading-tight">Privacy Policy</h1>
  </div>
  

</section>



<section className='mt-4 sm:mt-4 lg:mt-0 py-16 border-t border-gray-200'>
    <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-6"><a>Last Updated: September 12, 2023</a></h3>
    <p className="text-md text-gray-600 mb-11">I, the developer of Monee ("I," "me," or "my"), respect your privacy and am committed to protecting your personal information. This Privacy Policy explains how I collect, use, disclose, and safeguard your information when you use my mobile application ("the App"). By downloading, installing, or using the App, you consent to the practices described in this Privacy Policy.</p>

    <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-6"><a>Information I Collect</a></h3>
    <p className="text-md text-gray-600 mb-11">I do not collect any personal information from you when you use my App. I do not require you to register, log in, or provide any personal data, such as your name, email address, phone number, or location.</p>

    <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-6"><a>Information Stored on Your Device</a></h3>
    <p className="text-md text-gray-600 mb-1">The App may store information locally on your device, including but not limited to:</p>
    <p className="text-md text-gray-600 mb-11">1. **User-generated Content:** Any data or information you input into the App will be stored on your device for the sole purpose of providing you with the functionality of the App. This may include text, images, or other content created by you.</p>

    <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-6"><a>How I Use Your Information</a></h3>
    <p className="text-md text-gray-600 mb-11">I do not use the information stored on your device for any purpose other than to provide you with the intended functionality of the App. I do not share, sell, or transfer this information to any third parties.</p>

    <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-6"><a>Data Security</a></h3>
    <p className="text-md text-gray-600 mb-11">I take data security seriously. The information stored on your device is protected using industry-standard security measures to prevent unauthorized access or disclosure.</p>

    <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-6"><a>Changes to this Privacy Policy</a></h3>
    <p className="text-md text-gray-600 mb-11">I may update this Privacy Policy from time to time to reflect changes in my practices or for other operational, legal, or regulatory reasons. I will post the updated Privacy Policy on this page, and the date of the latest revision will be noted at the top of the page. I encourage you to review this Privacy Policy periodically.</p>

    <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-6"><a>Contact Me</a></h3>
    <p className="text-md text-gray-600 mb-1">If you have any questions or concerns about this Privacy Policy or my data practices, please contact me at contact.jlobusta@gmail.com.</p>
    <p className="text-md text-gray-600 mb-0">By using my App, you acknowledge that you have read, understood, and agree to the terms of this Privacy Policy. If you do not agree with this Privacy Policy, please do not use the App.</p>
</section>
<div className="flex flex-col-reverse justify-between pt-12 pb-12 border-t border-gray-200 lg:flex-row">
        <p className="text-sm text-gray-600">
        Monee © Copyright 2023 All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          
          {/* <li>
            <a href="./privacy-policy/" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy Policy</a>
          </li> */}
          <li>
            <a href="#" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Updates & Change Policy</a>
          </li>
          <li>
            <a href="#" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Terms &amp; Conditions</a>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default App;
