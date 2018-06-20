import React from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import EventCard from '../../components/EventCard';
import Footer from '../../components/Footer';

const Home = () => (
  <div>
    <Navbar />
    <Sidebar />
    <EventCard />
    <Footer />
  </div>
);

export default Home;