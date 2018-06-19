import React from 'react';
import Navbar from '../../components/Navbar';
import { SplashBody, SplashHero, SplashLower } from '../../components/Splash';
import Footer from '../../components/Footer';

const Splash = () => (
  <div>
    <Navbar />
    <SplashHero />
    <SplashBody />
    <SplashLower />
    <Footer />
  </div>
);

export default Splash;
