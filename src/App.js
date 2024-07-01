import React from 'react';
import Header from './components/Header';
import Hero from './components/HeroSection';
import InformationSection from './components/InformationSection';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import Verification from './components/Verification';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <InformationSection/>
      <Verification/>
      <HowItWorks />
      <ChatBot />
      <Footer />  
    </div>
  );
}

export default App;
