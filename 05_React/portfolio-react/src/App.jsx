import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import About from './component/About/About'
import Services from './component/Services/Services'
import MyWork from './component/MyWork/MyWork'
import Contact from './component/Contact/Contact'
import Footer from './component/Footer/Footer'

const App = () => {
  return (
    <div className='' >
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App