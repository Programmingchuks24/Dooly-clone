import React from 'react'
import Header from "./Header.js";
import Section from "./Section.js";
import PageSection from './PageSection.js';

function App() {
  return (
    <>
    
      <div className="fixed top-0 left-0 w-[100%] z-50">
        <Header />
        
      </div>
      <div className = "mt-[6rem]">
        <Section />
        <PageSection/>
      </div>
    </>
  )
}

export default App