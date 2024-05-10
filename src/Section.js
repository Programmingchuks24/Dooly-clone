import React from 'react'
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import space1 from "./pics/DealSpace-Main-View-1.png";
import pipeline from "./pics/Pipeline-Deal-Stage-Field-Update-1536x1215.png";
import textin from "./pics/Notes-In-Meeting-Capture.png";

function Section() {
  return (
    <section className="h-[60rem] w-auto bg-zinc-900 flex flex-col items-center gap-4 pt-8 md:h-[60rem] md:overflow-x-hidden">

        <div className="flex flex-col gap-2">
            <h1 className = "text-white text-5xl text-wrap font-bold">From chaotic process to </h1>
            <h1 className="text-white text-5xl text-wrap font-bold pl-7 "><u>consistenc</u>y<u> in selling</u></h1>
        </div>
        
        <div>
            <p className = "text-white text-xl text-wrap  ">Brings tools, people and processes together and standardize how</p> 
            <p className = "text-white text-xl text-wrap pl-7">your sales and CS teams close more revenue with Dooly</p>
        </div>

        <div className = "flex flex-col gap-5 md:flex-row">
            <div className = "flex gap-1 w-[25rem] md:w-[20rem]">

                <RocketLaunchOutlinedIcon style = {{color:"pink"}}/>  
                <p className="text-pink-400">Reduce rep-level admin work and improve handoffs</p>
            </div>
       
            <div className = "flex gap-1 pl-10 w-[25rem] md:w-[20rem]">

                <HandymanOutlinedIcon style = {{color:"pink"}}/>  
                <p className="text-pink-400">Enable teams with templates and views</p>
            </div>

            <div className = "flex gap-1 pl-8 w-[25rem] md:w-[20rem]">
                    
                <CloudUploadOutlinedIcon style = {{color:"pink"}}/>  
                <p className="text-pink-400">Gain CRM hygiene and  forecast accuracy</p>
            </div>
        </div>
        
        <div className = "flex gap-5 mt-3">

            <button className = "w-[300px] h-12 bg-pink-600 text-nowrap text-white font-bold rounded hover:bg-pink-500 transition duration-300 ease-in-out">SEE HOW DOOLY DOES THIS</button>
            <button className="w-[150px] h-12 border-2 border-pink-600 text-nowrap text-pink-600 font-bold rounded hover:border-pink-500 hover:text-pink-500 transition duration-300 ease-in-out">OR TALK TO US</button>
        </div>

        <div className = "flex gap-2">
            <p className = "text-pink-600 hover:text-pink-500 cursor-pointer transition duration-300 ease-in-out ">Create a free account instead</p>
            <p className="text-white font-bold">{">>>"}</p>
        </div>
        
        <div className="flex relative mt-5"> 
            <img src={pipeline} alt="pipeline" className = "hidden relative right-[5rem] h-[28rem] md:block"/>
            <img src={space1} alt="graph" className = "h-[30rem] relative  md:right-[15rem] md:top-[-20px] z-10"/>
            <img src={textin} alt="textin" className="hidden relative right-[20rem] h-[28rem] z-0 md:block" />
        </div>

    </section>
  )
}

export default Section