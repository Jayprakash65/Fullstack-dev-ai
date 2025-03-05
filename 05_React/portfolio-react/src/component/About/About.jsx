import React from 'react'
import themePattern from '../../assets/theme_pattern.svg'
import aboutProfile from '../../assets/about_profile.svg'
import './About.css'

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={themePattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={aboutProfile} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident accusantium exercitationem molestiae nemo ipsa. Deserunt quaerat sunt magnam autem, quibusdam accusantium est repellendus. Necessitatibus.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat magni expedita et mollitia alias praesentium esse rerum accusamus ipsam deserunt!</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"50%"}}/> </div>
                    <div className="about-skill"><p>React JS</p> <hr style={{width:"70%"}}/> </div>
                    <div className="about-skill"><p>Javascript</p> <hr style={{width:"60%"}}/> </div>
                    <div className="about-skill"><p>Next JS</p> <hr style={{width:"50%"}}/> </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            
            <div className="about-achievement ">
                <h1>90+</h1>
                <p>PROJECTS COMPLETED</p>
                
            </div>
            
            <div className="about-achievement ">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About