import React from 'react'
import Navbar from './components/Navbar.jsx';
import Hero from './components/hero.jsx';
import Destinations from './components/Destinations.jsx';
import Search from './components/Search.jsx';
import Selects from './components/Selects.jsx';
import Carousel from './components/Carousel';
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Destinations></Destinations>
      <Search></Search>
      <Selects></Selects>
      <Carousel></Carousel>
      <Footer></Footer>
    </div>
  );
}

export default App;
