import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'


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
      <h1 className = "title">Search all Sims mods in one place.</h1>
      <p className = "subtitle" style={{ marginTop: '-0.5rem' }}>The easiest way to browse, sort, and download Sims mods.</p>
      <div className="searchContainer">
        <input type="text" placeholder="Search for mods by keywords"></input>
        <img id="glass" src="./search_button.png"></img>
      </div>
      <p className="text" style={{ fontWeight: '300', padding: '0 1rem 0 1rem'}}>(e.g., 'Maxis Match', 'Alpha'), game version (e.g., 'Sims 4'), or mod type (e.g., 'CAS', 'UI').</p>
    
    </div>
    
  </StrictMode>,
)
