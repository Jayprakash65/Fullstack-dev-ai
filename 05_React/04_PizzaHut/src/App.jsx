import { useState } from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Section from './components/section/Section'
import Footer from './components/footer/Footer'

function App() {

      const [activeTab, setActiveTab] = useState('pizzas');

  return (
    <>
      <div className=' w-full mx-auto '>
        
          <Header/>
          <Nav activeTab={activeTab} setActiveTab={setActiveTab}  />
          <Section activeTab={activeTab} />
          <Footer/>
        
      </div>
    </>
  )
}

export default App
