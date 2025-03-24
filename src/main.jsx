import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Carousel from './Components/Carousel.jsx'
import { slides } from './data/carouselData.json'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100..900;1,100..900&family=Syne:wght@400..800&display=swap');
    </style>
    <div className="heroContainer">
      <div className="barContainer">
        <div className="titleContainer">
          <img src="./LOGONAME.svg"></img>
        </div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
      <h1 className = "title" style={{paddingTop: "10rem"}}>Search all Sims mods in one place.</h1>
      <p className = "subtitle" style={{ marginTop: '-0.5rem' }}>The easiest way to browse, sort, and download Sims mods.</p>
      <div className="searchContainer">
        <input type="text" placeholder="Search for mods by keywords"></input>
        <img id="glass" src="./search_button.png"></img>
      </div>
      <p className="text" style={{ fontWeight: '300', padding: '0 1rem 7rem 1rem'}}>Keywords (e.g., 'Maxis Match'), game version (e.g., 'Sims 4'), or mod type (e.g., 'CAS', 'UI').</p>
      <div className ="featureContainer">
        <h1 className ="title" style={{paddingTop: "2rem", paddingBottom: "5rem"}}>Featured Mods</h1>
        <Carousel data={slides}/>
      </div>
      <div className="footerContainer">
        <p className="text">For any inquiries or suggestions, contact us at team@simsportal.com</p>
        <ul>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">Privacy & Policies</a></li>
          </ul>
      </div>
    </div>
    
  </StrictMode>,
)
