import React from 'react'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';

function PageSection() {
  return (
    <div className = "h-[79rem] w-auto md:h-[50rem] bg-white sm:h-[75rem]">
        <h1 className = "text-5xl text-pink-600 font-bold w-auto pt-20 pl-5 sm:w-[600px] md:ml-20 md:w-[700px]">Tools for process-driven and efficiency-obsessed teams</h1>


        <div className = "flex flex-col justify-evenly md:flex-row mt-10" >

            <div className="flex flex-col gap-2 mt-9 ml-3 w-auto sm:w-[600px] md:w-[300px]">
                <CloudUploadOutlinedIcon fontSize="large"/>
                <p className = "text-xl font-bold">Smart Notes & Documents</p>
                <p className = "text-wrap">Eliminate hours of soul-crushing admin with an automatic note system that syncs fields and notes to Salesforce.</p>

                <div className = "flex gap-2 cursor-pointer hover:text-pink-500 text-pink-600 transition duration-300 ease-in-out"> 
                    <ArrowCircleRightOutlinedIcon fontSize="small" className = "" />
                    <p className="text-sm font-bold">EXPLORE NOTES</p>
                </div>
                
            </div>

            <div className="flex flex-col gap-2 mt-9 ml-3 w-auto sm:w-[600px] md:w-[300px]">
                <SearchOutlinedIcon fontSize="large"/>
                <p className = "text-xl font-bold">Pipeline Manager</p>
                <p className = "text-wrap">Visually, intuitively, and swiftly take control of your pipeline to keep your deals and account on track, and managers off your back.</p>

                <div className= "flex gap-2 cursor-pointer hover:text-pink-500 text-pink-600 transition duration-300 ease-in-out">
                    <ArrowCircleRightOutlinedIcon fontSize="small"/>
                    <p className = "text-sm font-bold">EXPLORE PIPELINE</p>
                </div>
                
            </div>

            <div className = "flex flex-col gap-2 mt-9 ml-3 w-auto sm:w-[600px] md:w-[300px]">
                <DesktopWindowsOutlinedIcon fontSize = "large"/>
                <p className = "text-xl font-bold">DealSpace</p>
                <p className="text-wrap">Run best-in-class deal reviews with a customizable deal-by-deal view that summarizes exactly what you want to know about your teams pipeline.</p>

                <div  className="flex gap-2 cursor-pointer hover:text-pink-500 text-pink-600 transition duration-300 ease-in-out">
                        <ArrowCircleRightOutlinedIcon fontSize="small"/>
                    <p className="text-sm font-bold">EXPLORE DEALSPACE</p>
                </div>
                
            </div>

        </div>

        <div className = "w-[24.5rem] h-[220px] border-2 border-blue-700 text-wrap ml-5 mt-14 pl-5 pt-4 flex flex-col gap-4 rounded-3xl md:ml-[20rem] sm:w-[38rem] sm:h-[220px] md:h-[220px] md:w-[47rem] md:pt-8">
            <AutoAwesomeOutlinedIcon fontSize="large"/>
            <p className = "font-bold text-xl">(Even) Smarter moves powered by AI</p>
            <p className = "text-wrap">Doolys Sales AI that suggests actionable next steps on deals based on Smart notes.</p>
            <div  className="flex gap-2 cursor-pointer hover:text-pink-500 text-pink-600 transition duration-300 ease-in-out">
                <ArrowCircleRightOutlinedIcon fontSize="small"/>
                <p className="text-sm font-bold">EXPLORE RECOMMENDATIONS</p>
            </div>
        </div>
    </div>
  )
}

export default PageSection