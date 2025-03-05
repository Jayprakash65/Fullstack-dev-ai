import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Jayprakash,</span> frontend developer based in INDIA.</h1>
        <p className='w-[50%] text-center text-2xl/9 '>I am a frontend developer from Kolkata, India with 5 yr of experience in multiple comapnies like Microsoft, Tesla and Apple.</p>

        <div className="hero-action flex items-center gap-6 font-semibold mb-12 ">
            <div className="hero-connect bg-gradient-to-r from-[#DF8908] to-[#B415FF] cursor-pointer hover:border-2 border-white ">Connect with me</div>
            <div className="hero-resume border-2 cursor-pointer hover:border-[#B415FF]">My resume</div>
        </div>


    </div>
  )
}

export default Hero
