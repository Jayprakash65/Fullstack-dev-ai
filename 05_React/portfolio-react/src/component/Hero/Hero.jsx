import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../assets/resume1.pdf'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Jayprakash,</span> frontend developer based in INDIA.</h1>
        <p className='w-[50%] text-center text-2xl/9 '>I am a frontend developer from Kolkata, India with 5 yr of experience in multiple comapnies like Microsoft, Tesla and Apple.</p>

        <div className="hero-action flex items-center gap-6 font-semibold mb-12 ">
            <div className="hero-connect bg-gradient-to-r from-[#DF8908] to-[#B415FF] cursor-pointer hover:border-2 border-white "><AnchorLink href='#contact'>Connect with me</AnchorLink></div>
            <a href={resume} className="hero-resume border-2 cursor-pointer hover:border-[#B415FF]" download>My resume</a>
        </div>


    </div>
  )
}

export default Hero
