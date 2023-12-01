import './App.css'
import moneeLogoBlack from './assets/monee-logo.png';
import googleLogo from './assets/google.svg';
import appleLogo from './assets/apple.svg';
import mobileMockup from './assets/mockup.png';
import { Container } from 'postcss';

const App = () => {
  return (
    <>
    <div className=' mx-auto pt-12 max-w-screen-xl'>
    <div className='h-screen'>
    <header>
    <nav className="flex justify-between items-center">
  
  <div className="flex items-center text-left">
    <img src={moneeLogoBlack} alt="Logo" className="h-10 w-10 mr-6"/>
    <span className="text-2xl font-semibold text-black">Monee</span>
  </div>

  
  <div class="flex space-x-4">
    <a href="#"><i className="text-slate-950 hover:text-slate-600 fa-brands fa-facebook-f"></i></a>
    <a href="#"><i className="text-slate-950 hover:text-slate-600 fa-brands fa-discord"></i></a>
  </div>
</nav>
</header>

<section className="flex items-center gap-8 mt-24">
  {/* Hero Left column */}
  <div className="flex-1 space-y-12">
    <h1 className="text-5xl font-medium mb-4 text-black">Your Personal Financial Sidekick!</h1>
    <p className="text-md text-gray-600">Effortlessly keep tabs on your finances, whether it's tracking your expenses and income, setting budgets, or saving for your money goals, especially handy when abroad or working internationally!</p>
    <div className="flex flex-row space-x-8">
      <a href="#" className="button-container">
        <img src={googleLogo} alt="Google Logo" />
        <div className="overlay">Coming Soon</div>
      </a>
      <a href="#" className="button-container">
        <img src={appleLogo} alt="Apple Logo" />
        <div className="overlay">Coming Soon</div>
      </a>
    </div>
  </div>
  

  {/* Hero Right column */}
  <div className="flex-1 text-left flex items-center justify-center">
            <div className="circle-back bg-green-100"></div>
            <div className="circle-front bg-green-300">
              <img src={mobileMockup} alt="mockup" className="hero-image" />
            </div>
  </div>
</section>
</div>


<section className='sm:py-32 border-t border-gray-200'>
    <div class="flex justify-start">
      <h2 class="text-2xl font-semibold tracking-tight text-gray-900 sm:text-2xl">Discover the Power of Monee</h2>
    </div>
    <div class="mx-auto grid max-w-3xl grid-cols-2 gap-x-2 gap-y-16 sm:mt-14 sm:pt-14 lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
    <article class="flex max-w-xl flex-row items-start justify-between gap-x-8 ">
    

    <div class="group relative flex-col">
        <div class="flex items-center gap-x-4 text-xs">
        <h3 class="text-lg font-semibold leading-6 text-gray-900 ">
            <a>
              <span class="absolute inset-0"></span>
              Track Finances with Ease
            </a>
          </h3>
          <a class="relative z-10 rounded-full px-3 py-1.5 text-slate-50 bg-slate-950">Usage</a>
          
        </div>
          
          <p class="mt-5 line-clamp-3 text-md leading-6 text-gray-600">Monee simplifies money management, effortlessly tracking expenses and income, while also helping you set budgets and achieve your financial goals seamlessly.</p>
        </div>
        
      </article>
      <article class="flex max-w-xl flex-row items-start justify-between gap-x-8 ">
      

      <div class="group relative flex-col">
        <div class="flex items-center gap-x-4 text-xs">
        <h3 class="text-lg font-semibold leading-6 text-gray-900 ">
            <a >
              <span class="absolute inset-0"></span>
              Global Currency Converter
            </a>
          </h3>
          <a class="relative z-10 rounded-full px-3 py-1.5 text-slate-50 bg-slate-950">Feature</a>
        </div>
          
          <p class="mt-5 line-clamp-3 text-md leading-6 text-gray-600">Going abroad or working with international clients? We've got you covered! What's even more incredible is that Monee's currency converter works seamlessly offline.</p>
        </div>
        
      </article>
      <article class="flex max-w-xl flex-row items-start justify-between gap-x-8 ">
      
      <div class="group relative flex-col">
        <div class="flex items-center gap-x-4 text-xs">
        <h3 class="text-lg font-semibold leading-6 text-gray-900 ">
            <a>
              <span class="absolute inset-0"></span>
              Fully Customizable
            </a>
          </h3>
          <a class="relative z-10 rounded-full px-3 py-1.5 text-slate-50 bg-slate-950">Design</a>
        </div>
          
          <p class="mt-5 line-clamp-3 text-md leading-6 text-gray-600">Make your money management uniquely yours with Monee! Choose from lots of colors and icons to match your style and personalize your financial experience.</p>
        </div>
        
      </article>
      <article class="flex max-w-xl flex-row items-start justify-between gap-x-8 ">
      
        <div class="group relative flex-col">
        <div class="flex items-center gap-x-4 text-xs">
        <h3 class="text-lg font-semibold leading-6 text-gray-900 ">
            <a>
              <span class="absolute inset-0"></span>
              Affordable and Ad-Free
            </a>
          </h3>
          <a class="relative z-10 rounded-full px-3 py-1.5 text-slate-50 bg-slate-950">Price</a>
        </div>
          
          <p class="mt-5 line-clamp-3 text-md leading-6 text-gray-600">Monee is not only affordable, but it's also ad-free. No interruptions, just a seamless and focused experience as you take control of your finances.</p>
        </div>
      </article>
    </div>
</section>
<section className="flex items-center gap-8 mb-40 border-t border-gray-200 p-24">
  <div className="flex-1 text-left flex items-center justify-center">
  <div className="circle bg-zinc-200"></div>
  </div>
  <div className="flex-1 space-y-12">
  <h2 class="text-2xl font-semibold tracking-tight text-gray-900 sm:text-2xl">Drop a line to the awesome dev!</h2>
    <p className="text-md text-gray-600">Send us a message for collaboration and inquiries. Watch your ideas come to life as we build something extraordinary together!</p>
    <button class="relative group overflow-hidden px-8 h-14 rounded-full flex space-x-2 items-center bg-gradient-to-r from-slate-950 to-slate-700 hover:from-green-950 hover:to-green-800">
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


      </div>
    </>
  );
};

export default App;
