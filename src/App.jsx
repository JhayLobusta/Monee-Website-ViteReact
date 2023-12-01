import './App.css'
import moneeLogoBlack from './assets/monee-logo.png';
import googleLogo from './assets/google.svg';
import appleLogo from './assets/apple.svg';
import mobileMockup from './assets/mockup.png';
import { Container } from 'postcss';

const App = () => {
  return (
    <><div className='h-screen mx-auto pt-12 max-w-screen-xl'>
    <header>
    <nav className="flex justify-between items-center">
  
  <div className="flex items-center text-left">
    <img src={moneeLogoBlack} alt="Logo" className="h-10 w-10 mr-6"/>
    <span className="text-2xl font-semibold text-black">Monee</span>
  </div>

  
  <div class="flex space-x-4">
    <a href="#"><i className="text-black fa-brands fa-facebook"></i></a>
    <a href="#"><i className="text-black fa-brands fa-discord"></i></a>
  </div>
</nav>
</header>

<section className="flex items-center gap-8 mt-24">
  {/* Hero Left column */}
  <div className="flex-1 space-y-12">
    <h1 className="text-5xl font-medium mb-4 text-black">Your Personal Financial Sidekick!</h1>
    <p className="text-md text-black">Effortlessly keep tabs on your finances, whether it's tracking your expenses and income, setting budgets, or saving for your money goals.</p>
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
            <div className="circle-back"></div>
            <div className="circle-front">
              <img src={mobileMockup} alt="mockup" className="hero-image" />
            </div>
  </div>
</section>


      {/* <div className="section-3">
        <div className="section-3-left">
          <div className="circle"></div>
        </div>
        <div className="section-3-right">
          <h2>Drop a line to the awesome devs!</h2>
          <p>Send us a message for collaboration and inquiries. Watch your ideas come to life as we build something extraordinary together!</p>
          <button className="send-email"> Send Email</button>
        </div>
      </div> */}
      </div>
    </>
  );
};

export default App;
