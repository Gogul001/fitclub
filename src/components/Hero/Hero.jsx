import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import calories from '../../assets/calories.png'
import heart from '../../assets/heart.png'

const Hero = () => {
  return (
    <div className="hero">
      <div className="lefth">
        <Header />
        <div className="bestadd">
          <div className="bestaddd"></div>
          <span>the best app</span>
        </div>

        <div className="herotext">
          <div>
            <span className="stroketext">This </span>
            <span>is</span>
          </div>

          <div>
            <span>hero text</span>
          </div>

          <div>
            <span>this is the description of what the app is for</span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span>+10</span>
            <span>students </span>
          </div>
          <div>
            <span>+5</span>
            <span>companies</span>
          </div>
          <div>
            <span>+10</span>
            <span>placements</span>
          </div>
        </div>

        <div className="herobutton">
          <button className="btn">learn more</button>
          <button className="btn">find out</button>
        </div>
      </div>

      <div className="righth">
        <button className="btn">Join now</button>

        <div className="heartrate">
          <img src={heart} alt="" />
          <span>heart rate</span>
          <span>110 bpm</span>
        </div>

        {/* images here */}

        <img src={hero_image} alt="" className="hero_image" />
        <img src={hero_image_back} alt="" className="hero_image_back" />

        <div className="calories">
          <img src={calories} alt="" />
          <div>
            <span>calories burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero