import React from 'react';
import Navbar from '../../components/Navbar';
import { SplashBody, SplashHero } from '../../components/Splash';

const Splash = () => (
  <div>
    <Navbar />
    <SplashHero />
    <SplashBody />
  </div>
);

export default Splash;
