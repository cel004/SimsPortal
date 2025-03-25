import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';
import Carousel from '../Components/Carousel.jsx';
import Footer from '../Components/Footer.jsx';
import { slides } from '../data/carouselData.json';

const Home = () => {
  return (
    <div className="heroContainer">
      <div className="barContainer">
        <div className="titleContainer">
          <img src="./LOGONAME.svg" alt="Logo" />
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
      <h1 className="title" style={{ paddingTop: "10rem" }}>Search all Sims mods in one place.</h1>
      <p className="subtitle" style={{ marginTop: '-0.5rem' }}>The easiest way to browse, sort, and download Sims mods.</p>
      <div className="searchContainer">
        <input type="text" placeholder="Search for mods by keywords" />
        <img id="glass" src="./search_button.png" alt="Search" />
      </div>
      <p className="text" style={{ fontWeight: '300', padding: '0 1rem 7rem 1rem' }}>
        Keywords (e.g., 'Maxis Match'), game version (e.g., 'Sims 4'), or mod type (e.g., 'CAS', 'UI').
      </p>
      <div className="featureContainer">
        <h1 className="title" style={{ paddingTop: "2rem", paddingBottom: "1rem" }}>Featured Mods</h1>
        <Carousel data={slides} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
