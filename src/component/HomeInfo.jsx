import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'
const InfoBox = ({text, link, btnText}) => (
  <div className='info-box'>
    <p className='font-medium  sm:text-xl text-center'>{text}</p>
    <Link to={link} className='neo-btn bg-white'>
      {btnText}
      <img src={arrow} className='w-4 h-4 object-contain'/>
    </Link>
  </div>
)

const renderContent ={
  1: (
    <h1 className='sm:text-xl sm:leading-snig text-center bg-blue-500 neo-brutalism-blue py-4 px-8 text-white mx-5'>
      Hi, I am <span className='font-semi-bold'>Job</span> 👋
      <br />
      Software engineer
      <p className='text-sm text-gray-600'>Spin the Island for more info</p>
      </h1>
  ),
  2: (
   <InfoBox text="Worked with many companies and picked up skills along the way"
   link="/about"
   btnText="Learn more"
   />
  )
  ,
  3: (
    <InfoBox text="Led multiple projects to success over the years. Curious about the impact"
   link="/projects"
   btnText="Visit my portofolio"/>
  )
  ,
  4: (
    <InfoBox text="Need a project done or looking for dev? I'm just a few keystrokes away"
   link="/contact"
   btnText="Lets talk"/>
  )
}


const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null
}

export default HomeInfo