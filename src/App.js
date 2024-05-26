import React from 'react'
import Header from "./Header.js";
import Section from "./Section.js";
import PageSection from './PageSection.js';
import Mainpage from './Mainpage.js';
import Second from './Second.js';
import Third from './Third.js';
import Fourth from './Fourth.js';
import Fifth from './Fifth.js';
import Sixth from './Sixth.js';
import Next from './Next.js';
import Last from './Last.js';

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
      <Second/>
      <Third/>
      <Fourth/>
      <Fifth/>
      <Sixth/>
      <Next/>
      <Last/>
    </div>
    
  </>

  )
}

export default App