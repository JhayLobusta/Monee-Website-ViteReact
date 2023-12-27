import './App.css'
import moneeLogoBlack from './assets/monee-logo.png';
import googleLogo from './assets/google.svg';
import appleLogo from './assets/apple.svg';
import themeLogo from './assets/theme.svg';
import mobileMockup from './assets/mockup.png';
import mobileMockup2 from './assets/mockup-2.png';
// import Footer from './Footer.jsx';
import { Container } from 'postcss';

const App = () => {
  return (
    <>
    <div className='px-10 pt-12 max-w-screen-xl md:mx-12 lg:px-0 lg:m-auto'>
    <div className='lg:h-screen'>
  <header>
    <nav className="flex justify-between items-center">
  
    <a href='moneeph.com'>
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

<section className="flex flex-col lg:flex-row items-center gap-8 sm:gap-0 mt-24 space-y-12 sm:space-y-32 lg:space-y-0 lg:space-x-4">
  
  <div className="flex-1 space-y-16 md:space-y-12">
    <h1 className="text-5xl font-medium mb-4 text-black leading-tight">Your Personal Financial Sidekick!</h1>
    <p className="text-md text-gray-600">Effortlessly keep tabs on your finances, whether it's tracking your expenses and income, setting budgets, or saving for your money goals, especially handy when abroad or working internationally!</p>
    <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-8 md:space-y-0">
      <a href="https://forms.gle/AXwAAhfDxY2xCFtG7" target='_blank' className="button-container">
        <div className="overlay bg-gradient-to-r w-auto h-16  md:w-56 transition-all ease-in-out duration-300 from-slate-950 to-slate-950 hover:from-slate-950 hover:to-lime-700"><svg className='w-6 h-6 mr-2' xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#ffffff" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>Closed Beta</div>
      </a>
      <a href="#" className="button-container">
        <div className="overlay bg-gradient-to-r w-auto h-16  md:w-56 transition-all ease-in-out duration-300 from-slate-950 to-slate-950 hover:from-slate-950 hover:to-blue-700"><svg className='w-8 h-8 mr-2 mb-1' xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path fill="#ffffff" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>Coming Soon</div>
      </a>
    </div>
  </div>
  
  <div className="flex-1 text-left flex items-center justify-center">
  <img src={mobileMockup} alt="mockup" className="block sm:hidden"/>
            <div className="circle-back bg-slate-100 hidden sm:flex">
            </div>
            <div className="circle-front bg-transparent sm:bg-slate-300 relative sm:absolute hidden sm:flex">
              <img src={mobileMockup} alt="mockup" className="hero-image" />
            </div>
            
  </div>
</section>
</div>


<section className='mt-16 sm:mt-28 lg:mt-0 py-32 border-t border-gray-200'>
    <div class="flex justify-start">
      <h2 class="text-2xl font-semibold tracking-tight text-gray-900 sm:text-2xl">Discover the Power of Monee</h2>
    </div>
    <div class="mx-auto grid max-w-3xl grid-cols-1 gap-x-2 gap-y-16 mt-28 lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
    <article class="flex max-w-xl flex-row items-start justify-between gap-x-8 ">

    <div class="flex-col">
        <div class="flex items-center gap-x-4 text-xs">
        <h3 class="text-lg font-semibold leading-6 text-gray-900 ">
            <a>
              Track Finances with Ease
            </a>
          </h3>
          <a class="rounded-full px-3 py-1.5 text-slate-50 bg-red-400">Usage</a>
          
        </div>
          
          <p class="mt-5 text-md leading-6 text-gray-600">Monee simplifies money management, effortlessly tracking expenses and income, while also helping you set budgets and achieve your financial goals seamlessly.</p>
        </div>
        
      </article>
      <article class="flex max-w-xl flex-row items-start justify-between gap-x-8 ">
      
      
      <div class="flex-col">
        <div class="flex items-center gap-x-4 text-xs">
        <h3 class="text-lg font-semibold leading-6 text-gray-900 ">
            <a >
              <span class="inset-0"></span>
              Global Currency Converter
            </a>
          </h3>
          <a class="rounded-full px-3 py-1.5 text-slate-50 bg-cyan-500">Feature</a>
        </div>
          
          <p class="mt-5 text-md leading-6 text-gray-600">Going abroad or working with international clients? We've got you covered! What's even more incredible is that Monee's currency converter works seamlessly offline.</p>
        </div>
        
      </article>
      <article class="flex max-w-xl flex-row items-start justify-between gap-x-8 ">
      
      <div class="flex-col">
        <div class="flex items-center gap-x-4 text-xs">
        <h3 class="text-lg font-semibold leading-6 text-gray-900 ">
            <a>
              <span class="inset-0"></span>
              Fully Customizable
            </a>
          </h3>
          <a class="rounded-full px-3 py-1.5 text-slate-50 bg-violet-400">Design</a>
        </div>
          
          <p class="mt-5 text-md leading-6 text-gray-600">Make your money management uniquely yours with Monee! Choose from lots of colors and icons to match your style and personalize your financial experience.</p>
        </div>
        
      </article>
      <article class="flex max-w-xl flex-row items-start justify-between gap-x-8 ">
      
        <div class="flex-col">
        <div class="flex items-center gap-x-4 text-xs">
        <h3 class="text-lg font-semibold leading-6 text-gray-900 ">
            <a>
              <span class="inset-0"></span>
              Affordable and Ad-Free
            </a>
          </h3>
          <a class="rounded-full px-3 py-1.5 text-slate-50 bg-amber-400">Price</a>
        </div>
          
          <p class="mt-5 text-md leading-6 text-gray-600">Monee offers a free version and not only affordable, but it's also ad-free. No interruptions, just a seamless and focused experience as you take control of your finances.</p>
        </div>
      </article>
    </div>
</section>
{/* <section className="flex flex-col lg:flex-row items-center gap-8 border-t border-gray-200 pt-28 pb-20 space-y-16 md:space-y-12">
<div className="flex-1 text-left flex items-center justify-center">
            <div className="circle-back-small bg-slate-100 hidden sm:flex"></div>
            <div className="circle-front-small bg-transparent sm:bg-slate-300 relative sm:absolute">
            <img src={mobileMockup2} alt="mockup-2" className="hero-image-small-2" />
              <img src={mobileMockup} alt="mockup" className="hero-image-small" />
            </div>
  </div>
  <div className="flex-1 space-y-12">
  <h2 class="text-2xl font-semibold tracking-tight text-gray-900 sm:text-2xl">Drop a line to the awesome devs!</h2>
    <p className="text-md text-gray-600">Send us a message for collaboration and inquiries. Watch your ideas come to life as we build something extraordinary together!</p>
    <button class="relative group overflow-hidden px-8 h-14 rounded-full flex space-x-2 items-center bg-gradient-to-r transition duration-300 from-slate-950 to-slate-950 hover:from-slate-950 hover:to-cyan-700">
          <span class="relative text-sm text-white">Send Email</span>
          <div class="flex items-center -space-x-3 translate-x-3">
            <div class="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>

  </div>
</section> */}
<div className="flex flex-col-reverse justify-between pt-12 pb-12 border-t border-gray-200 lg:flex-row">
        <p className="text-sm text-gray-600">
        Monee © Copyright 2023 All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          
          <li>
            <a href="./privacy-policy/" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy Policy</a>
          </li>
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
