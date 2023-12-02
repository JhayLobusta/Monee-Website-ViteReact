import './App.css'
import moneeLogoBlack from './assets/monee-logo.png';
import googleLogo from './assets/google.svg';
import appleLogo from './assets/apple.svg';
import themeLogo from './assets/theme.svg';
import mobileMockup from './assets/mockup.png';
import mobileMockup2 from './assets/mockup-2.png';
import Footer from './Footer.jsx';
import { Container } from 'postcss';

const App = () => {
  return (
    <>
    <div className='px-10 pt-12 max-w-screen-xl md:mx-12 lg:px-0 lg:m-auto'>
    <div className='lg:h-screen'>
  <header>
    <nav className="flex justify-between items-center">
  
  <div className="flex items-center text-left">
    <img src={moneeLogoBlack} alt="Logo" className="h-10 w-10 mr-6"/>
    <span className="text-2xl font-semibold text-black">Monee</span>
  </div>

  
  <div class="flex space-x-4">
    <a href="#"><i className="text-slate-950 hover:text-blue-700 fa-brands fa-facebook-f"></i></a>
    <a href="#"><i className="text-slate-950 hover:text-blue-700 fa-brands fa-discord"></i></a>
  </div>
</nav>
</header>

<section className="flex flex-col lg:flex-row items-center gap-8 sm:gap-0 mt-24 space-y-48 sm:space-y-32 lg:space-y-0 lg:space-x-4">
  
  <div className="flex-1 space-y-16 md:space-y-12">
    <h1 className="text-5xl font-medium mb-4 text-black">Your Personal Financial Sidekick!</h1>
    <p className="text-md text-gray-600">Effortlessly keep tabs on your finances, whether it's tracking your expenses and income, setting budgets, or saving for your money goals, especially handy when abroad or working internationally!</p>
    <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-8 md:space-y-0">
      <a href="#" className="button-container">
        <div className="overlay bg-gradient-to-r w-auto h-16  md:w-56 transition-all ease-in-out duration-300 from-slate-950 to-slate-950 hover:from-slate-950 hover:to-lime-700"><svg className='w-6 h-6 mr-2' xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#ffffff" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>Coming Soon</div>
      </a>
      <a href="#" className="button-container">
        <div className="overlay bg-gradient-to-r w-auto h-16  md:w-56 transition-all ease-in-out duration-300 from-slate-950 to-slate-950 hover:from-slate-950 hover:to-blue-700"><svg className='w-8 h-8 mr-2 mb-1' xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path fill="#ffffff" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>Coming Soon</div>
      </a>
    </div>
  </div>
  
  <div className="flex-1 text-left flex items-center justify-center">
            <div className="circle-back bg-slate-100 hidden sm:flex">
            </div>
            <div className="circle-front bg-transparent sm:bg-slate-300 relative sm:absolute">
              <img src={mobileMockup} alt="mockup" className="hero-image" />
            </div>
            
  </div>
</section>
</div>


<section className='mt-48 sm:mt-28 lg:mt-0 py-32 border-t border-gray-200'>
    <div class="flex justify-start">
      <h2 class="text-2xl font-semibold tracking-tight text-gray-900 sm:text-2xl">Discover the Power of Monee</h2>
    </div>
    <div class="mx-auto grid max-w-3xl grid-cols-1 gap-x-2 gap-y-16 mt-28 lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
    <article class="flex max-w-xl flex-row items-start justify-between gap-x-8 ">

    <div class="flex-col">
        <div class="flex items-center gap-x-4 text-xs">
        <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H288V368c0-26.5 21.5-48 48-48H448V96c0-35.3-28.7-64-64-64H64zM448 352H402.7 336c-8.8 0-16 7.2-16 16v66.7V480l32-32 64-64 32-32z"/></svg>
        <h3 class="text-lg font-semibold leading-6 text-gray-900 ">
            <a>
              Track Finances with Ease
            </a>
          </h3>
          <a class="rounded-full px-3 py-1.5 text-slate-50 bg-red-400">Usage</a>
          
        </div>
          
          <p class="mt-5 ml-10 line-clamp-3 text-md leading-6 text-gray-600">Monee simplifies money management, effortlessly tracking expenses and income, while also helping you set budgets and achieve your financial goals seamlessly.</p>
        </div>
        
      </article>
      <article class="flex max-w-xl flex-row items-start justify-between gap-x-8 ">
      
      
      <div class="flex-col">
        <div class="flex items-center gap-x-4 text-xs">
        <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
        <h3 class="text-lg font-semibold leading-6 text-gray-900 ">
            <a >
              <span class="inset-0"></span>
              Global Currency Converter
            </a>
          </h3>
          <a class="rounded-full px-3 py-1.5 text-slate-50 bg-cyan-500">Feature</a>
        </div>
          
          <p class="mt-5 ml-10 line-clamp-3 text-md leading-6 text-gray-600">Going abroad or working with international clients? We've got you covered! What's even more incredible is that Monee's currency converter works seamlessly offline.</p>
        </div>
        
      </article>
      <article class="flex max-w-xl flex-row items-start justify-between gap-x-8 ">
      
      <div class="flex-col">
        <div class="flex items-center gap-x-4 text-xs">
        <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M162.4 6c-1.5-3.6-5-6-8.9-6h-19c-3.9 0-7.5 2.4-8.9 6L104.9 57.7c-3.2 8-14.6 8-17.8 0L66.4 6c-1.5-3.6-5-6-8.9-6H48C21.5 0 0 21.5 0 48V224v22.4V256H9.6 374.4 384v-9.6V224 48c0-26.5-21.5-48-48-48H230.5c-3.9 0-7.5 2.4-8.9 6L200.9 57.7c-3.2 8-14.6 8-17.8 0L162.4 6zM0 288v32c0 35.3 28.7 64 64 64h64v64c0 35.3 28.7 64 64 64s64-28.7 64-64V384h64c35.3 0 64-28.7 64-64V288H0zM192 432a16 16 0 1 1 0 32 16 16 0 1 1 0-32z"/></svg>
        <h3 class="text-lg font-semibold leading-6 text-gray-900 ">
            <a>
              <span class="inset-0"></span>
              Fully Customizable
            </a>
          </h3>
          <a class="rounded-full px-3 py-1.5 text-slate-50 bg-violet-400">Design</a>
        </div>
          
          <p class="mt-5 ml-10 line-clamp-3 text-md leading-6 text-gray-600">Make your money management uniquely yours with Monee! Choose from lots of colors and icons to match your style and personalize your financial experience.</p>
        </div>
        
      </article>
      <article class="flex max-w-xl flex-row items-start justify-between gap-x-8 ">
      
        <div class="flex-col">
        <div class="flex items-center gap-x-4 text-xs">
        <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84 88c0-11-9-20-20-20s-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V424c0 11 9 20 20 20s20-9 20-20V410.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l0 0-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V216z"/></svg>
        <h3 class="text-lg font-semibold leading-6 text-gray-900 ">
            <a>
              <span class="inset-0"></span>
              Affordable and Ad-Free
            </a>
          </h3>
          <a class="rounded-full px-3 py-1.5 text-slate-50 bg-amber-400">Price</a>
        </div>
          
          <p class="mt-5 ml-10 line-clamp-3 text-md leading-6 text-gray-600">Monee offers a free version and not only affordable, but it's also ad-free. No interruptions, just a seamless and focused experience as you take control of your finances.</p>
        </div>
      </article>
    </div>
</section>
<section className="flex flex-col lg:flex-row items-center gap-8 border-t border-gray-200 pt-28 pb-20 space-y-16 md:space-y-12">
<div className="flex-1 text-left flex items-center justify-center">
            <div className="circle-back-small bg-slate-100 hidden sm:flex"></div>
            <div className="circle-front-small bg-transparent sm:bg-slate-300 relative sm:absolute">
            <img src={mobileMockup2} alt="mockup-2" className="hero-image-small-2" />
              <img src={mobileMockup} alt="mockup" className="hero-image-small" />
            </div>
  </div>
  <div className="flex-1 space-y-12">
  <h2 class="text-2xl font-semibold tracking-tight text-gray-900 sm:text-2xl">Drop a line to the awesome dev!</h2>
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
</section>
<Footer />
      </div>
    </>
  );
};

export default App;
