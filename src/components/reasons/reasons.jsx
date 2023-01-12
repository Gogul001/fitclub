import React from 'react'
import './reasons.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from "../../assets/nb.png";
import nike from "../../assets/nike.png";
import adidas from "../../assets/adidas.png";
import tick from "../../assets/tick.png";

const reasons = () => {
  return (
    <div className="reasons" id="reasons">
      <div className="leftr">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="rightr">
        <span>some reason</span>
        <div>
          <span className="stroketext">why</span>
          <span className="choose">join us</span>
        </div>

        <div className="detailsr">
          <div>
            <div>
              <img src={tick} alt=""></img>
              <span></span>
            </div>
            <div>
              <img src={tick} alt="" />
              <span></span>
            </div>
            <div>
              <img src={tick} alt="" />
              <span></span>
            </div>
            <div>
              <img src={tick} alt="" />
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default reasons