import React from 'react'
import Header from "./Header.js";
import Section from "./Section.js";
import PageSection from './PageSection.js';
import Mainpage from './Mainpage.js';


function App() {
  return (
    <>
    
      <div className="fixed top-0 left-0 w-[100%] z-50">
        <Header />
        
      </div>
      <div className = "mt-[5rem] overflow-hidden">
        <Section />
        <PageSection/>
        <Mainpage/>
      </div>
      
    </>
  )
}

export default App