import React from 'react';
import Navbar from '../../components/Navbar';
import { SplashBody, SplashHero, SplashLower } from '../../components/Splash';

const Splash = () => (
  <div>
    <Navbar />
    <SplashHero />
    <SplashBody />
    <SplashLower />
  </div>
);

export default Splash;
