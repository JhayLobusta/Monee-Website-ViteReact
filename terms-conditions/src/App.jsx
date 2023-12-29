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
    <h1 className="text-5xl font-medium mb-4 text-black leading-tight">Terms & Conditions</h1>
  </div>
  

</section>



<section className='mt-4 sm:mt-4 lg:mt-0 py-16 border-t border-gray-200'>
    <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-6"><a>Last Updated: December 28, 2023</a></h3>
    <p className="text-md text-gray-600 mb-4">Please read these Terms and Conditions ("Terms") carefully before using the Monee mobile application ("the App"), developed by Jhay Lobusta ("Developer," "I," "me," or "my").</p>
    <p className="text-md text-gray-600 mb-11">By downloading, installing, or using the App, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please do not use the App.</p>

    <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-6"><a>License to Use the App</a></h3>
    <p className="text-md text-gray-600 mb-11">Subject to your compliance with these Terms, I grant you a limited, non-exclusive, non-transferable, revocable license to use the App solely for your personal, non-commercial use.</p>

    <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-6"><a>Prohibited Activities</a></h3>
    <p className="text-md text-gray-600 mb-4">You agree not to engage in any of the following activities:</p>
    <p className="text-md text-gray-600 mb-1">- Violating any applicable laws or regulations.</p>
    <p className="text-md text-gray-600 mb-1">- Reverse engineering, decompiling, or disassembling the App.</p>
    <p className="text-md text-gray-600 mb-11">- Using the App in any manner that could harm, disable, or impair its functionality.</p>

    <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-6"><a>Changes and Updates</a></h3>
    <p className="text-md text-gray-600 mb-11">I reserve the right to modify or discontinue the App, or any part of it, with or without notice. I may also update these Terms from time to time. Your continued use of the App following any changes constitutes your acceptance of those changes.</p>

    <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-6"><a>Limitation of Liability</a></h3>
    <p className="text-md text-gray-600 mb-11">To the fullest extent permitted by applicable law, I, as a solo developer, shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly. This includes, but is not limited to, any loss of data resulting from (a) your use or inability to use the App, (b) any unauthorized access to or use of the App, (c) any interruption or cessation of transmission to or from the App, (d) any bugs, viruses, trojan horses, or the like that may be transmitted to or through the App by any third party.</p>

    <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-6"><a>Privacy</a></h3>
    <p className="text-md text-gray-600 mb-11">Your use of the App is also governed by my Privacy Policy, which outlines how I collect, use, and safeguard your personal information. By using the App, you consent to the practices described in the Privacy Policy.</p>

    <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-6"><a>Contact Me</a></h3>
    <p className="text-md text-gray-600 mb-0">If you have any questions about these Terms or the App, please contact me at contact.jlobusta@gmail.com.</p>
</section>
<div className="flex flex-col-reverse justify-between pt-12 pb-12 border-t border-gray-200 lg:flex-row">
        <p className="text-sm text-gray-600">
        Monee © Copyright {currentYear} All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          
          <li>
            <a href="../privacy-policy/" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy Policy</a>
          </li>
          <li>
            <a href="../update-change-policy/" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Updates & Change Policy</a>
          </li>
          {/* <li>
            <a href="#" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Terms &amp; Conditions</a>
          </li> */}
        </ul>
      </div>
    </div>
    </>
  );
};

export default App;
