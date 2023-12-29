import '../../src/App.css'
import moneeLogoBlack from './assets/monee-logo.png';

import { Container } from 'postcss';

const currentYear = new Date().getFullYear();

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
    <h1 className="text-5xl font-medium mb-4 text-black leading-tight">Updates & Change Policy</h1>
  </div>
  

</section>



<section className='mt-4 sm:mt-4 lg:mt-0 py-16 border-t border-gray-200'>
    <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-6"><a>Last Updated: December 28, 2023</a></h3>
    <p className="text-md text-gray-600 mb-11">I, the developer of Monee ("I," "me," or "my"), am committed to improving and enhancing the functionality and user experience of the app. This Updates and Change Policy outlines how updates, changes, and new features will be introduced to Monee.</p>

    <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-6"><a>Updates and Enhancements</a></h3>
    <p className="text-md text-gray-600 mb-11">I will periodically release updates and enhancements to Monee. These updates may include bug fixes, performance improvements, and the addition of new features to enhance the functionality and usability of the app.</p>

    <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-6"><a>Notification of Updates</a></h3>
    <p className="text-md text-gray-600 mb-11">I will make reasonable efforts to notify users of available updates through app store listings (e.g., Google Play Store, Apple App Store). Users are encouraged to enable automatic updates on their devices to ensure they receive the latest version of Monee.</p>

    <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-6"><a>Changes and New Features</a></h3>
    <p className="text-md text-gray-600 mb-11">I reserve the right to make changes to the app's features and functionality to improve user experience or address technical issues. Additionally, I may introduce new features or modify existing ones to meet evolving user needs or to comply with legal or regulatory requirements.</p>

    <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-6"><a>User Feedback</a></h3>
    <p className="text-md text-gray-600 mb-11">I value user feedback and may consider user suggestions and requests when planning updates and changes to Monee. However, I cannot guarantee the implementation of all user suggestions or requests.</p>

    <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-6"><a>Data Privacy</a></h3>
    <p className="text-md text-gray-600 mb-11">Any updates or changes related to data collection, processing, or privacy practices will be made in compliance with the Data Privacy Act of 2012 and will be reflected in the app's Privacy Policy.</p>

    <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-6"><a>User Responsibility</a></h3>
    <p className="text-md text-gray-600 mb-11">It is the responsibility of users to ensure that they are using the latest version of Monee to benefit from the latest features, security updates, and bug fixes.</p>

    <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-6"><a>Contact Me</a></h3>
    <p className="text-md text-gray-600 mb-4">If you have questions, concerns, or feedback regarding updates or changes to Monee, please contact me at contact.jlobusta@gmail.com.</p>
    <p className="text-md text-gray-600 mb-4">By continuing to use Monee after updates or changes have been made, you acknowledge and agree to the terms outlined in this Updates and Change Policy.</p>
    <p className="text-md text-gray-600 mb-0">Please review this policy periodically for updates, as changes may occur over time to reflect improvements and developments in the app.</p>
</section>
<div className="flex flex-col-reverse justify-between pt-12 pb-12 border-t border-gray-200 lg:flex-row">
        <p className="text-sm text-gray-600">
        Monee © Copyright {currentYear} All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          
          <li>
            <a href="../privacy-policy/" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy Policy</a>
          </li>
          {/* <li>
            <a href="#" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Updates & Change Policy</a>
          </li> */}
          <li>
            <a href="../terms-conditions/" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Terms &amp; Conditions</a>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default App;
