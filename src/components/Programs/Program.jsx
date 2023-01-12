import React from 'react'
import './Program.css'
import { programsData } from '../../Data/programsdata'
import rightArrow from '../../assets/rightArrow.png'

 const Program = () => {
  return (
      <div className="programs" id="programs">
          {/* header for programs */}
          <div className="programsheader">
              <span className='stroketext'>Explore our</span><span className='prog'>program</span><span className='stroketext'>to shape you</span>
      </div>
      
      <div className="programcatogory">
        {programsData.map((program) => (
          <div className="catogory">
            {program.image}
            <span>{program.heading}</span><span>{program.details}</span>
            <div className="joinnow"><span>Join now</span><img src={rightArrow} alt="" /></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Program