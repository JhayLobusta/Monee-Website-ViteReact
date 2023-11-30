import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import moneeLogoBlack from './assets/monee-logo.png';
import googleLogo from './assets/google.svg';
import appleLogo from './assets/apple.svg';
import mobileMockup from './assets/mockup.png';

const App = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={moneeLogoBlack} alt="monee" className="img-logo" />
          Monee
        </div>
        <div className="nav-items">
          <a href="#"><i className="fa-brands fa-facebook"></i></a>
          <a href="#"><i className="fa-brands fa-discord"></i></a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-container">
          <div className="column-left">
            <h1>Your Personal Financial Sidekick!</h1>
            <p>
              Effortlessly keep tabs on your finances, whether it's tracking your expenses and income, setting budgets, or saving for your money goals.
            </p>
            <div className="download-button">
              <a href="#" className="button-container">
                <img src={googleLogo} alt="Google Logo" />
                <div className="overlay">Coming Soon</div>
              </a>
              <a href="" className="button-container">
                <img src={appleLogo} alt="Apple Logo" />
                <div className="overlay">Coming Soon</div>
              </a>
            </div>
          </div>
          <div className="column-right">
            <div className="circle-back"></div>
            <div className="circle-front">
              <img src={mobileMockup} alt="mockup" className="hero-image" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-2">
        <h2>Discover the Power of Monee</h2>
        <br />
        <div className="section-2-container">
          {/* ... (similar structure for each half) */}
        </div>
        <div className="section-2-container">
          {/* ... (similar structure for each half) */}
        </div>
      </section>

      <div className="section-3">
        <div className="section-3-left">
          <div className="circle"></div>
        </div>
        <div className="section-3-right">
          <h2>Drop a line to the awesome devs!</h2>
          <p>Send us a message for collaboration and inquiries. Watch your ideas come to life as we build something extraordinary together!</p>
          <button className="send-email"> Send Email</button>
        </div>
      </div>

      <div className="section-4">
        <div className="section-4-left">
          <img src={moneeLogoBlack} alt="monee" className="img-logo-footer" />
          <div className="div-about">
            <h3>Monee</h3>
            {/* ... (about content) */}
          </div>
        </div>
        <div className="section-4-right">
          <div className="div-quick-links">
            <h3>Quick Links</h3>
            {/* ... (quick links content) */}
          </div>
          <div className="div-support">
            <h3>Support</h3>
            {/* ... (support content) */}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
