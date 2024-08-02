import React from 'react';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'; 
import chrome from "./pics/icon-google-chrome.svg";
import slack from "./pics/icon-slack.svg";
import calendar from "./pics/icon-google-calendar.svg";
import gong from "./pics/icon-gong.svg";
import outreach from "./pics/icon-outreach.svg";
import linkedin from "./pics/icon-linkedin.svg";

function Fourth() {
  return (
    <div className="w-auto h-[90rem] pt-12 md:h-[47rem] sm:h-[88rem]">
        <p className = "text-3xl font-bold w-auto text-center ml-auto sm:w-[35rem] sm:ml-16 md:w-[44rem] md:ml-[20rem]">Integrated with your favourite tools, of course.</p>
        <p className = "text-center w-auto ml-auto mt-5 sm:w-[37rem] sm:ml-10 md:w-[44rem] md:ml-[20rem] md:text-lg">To make work more efficient, Dooly connects dynamically with Salesforce, Gong, Slack, Outreach, Salesloft and your G-Suite tools. Work deals your way.</p>

        <div className= "flex gap-2 mt-7 ml-auto justify-center place-items-center cursor-pointer sm:ml-[14rem] md:ml-[35rem] hover:text-pink-600 text-pink-500 transition duration-300 ease-in-out">
            <ArrowCircleRightOutlinedIcon sx={{fontSize:27}}/>
            <p className = "text-[17px] font-bold uppercase">Explore Integrations</p>
        </div>

        <div className="grid grid-rows-1 gap-10 mt-16 md:grid-cols-3 md:ml-14">
            <div className = "flex flex-col gap-3 ml-4">

                <img src = {chrome} alt = "chrome" className="w-10 "/>

                <p className = "text-xl font-bold">Chrome Extension</p>
                <p className = "w-auto sm:w-[38rem] md:w-[20rem]">Open Dooly on any site to create or update any opportunity, account, contact, or lead</p>
                <div className= "flex gap-2 mt-2 cursor-pointer hover:text-pink-600 text-pink-500 transition duration-300 ease-in-out">
                    <ArrowCircleRightOutlinedIcon sx={{fontSize:27}}/>
                    <p className = "text-[17px] font-bold uppercase">get the chrome extension</p>
                </div>
            </div>

            <div className="flex flex-col gap-3 ml-4">
                <img src = {calendar} alt = "calendar" className="w-10 "/>

                <p className = "text-xl font-bold">Google Calendar</p>
                <p className = "w-[29rem] sm:w-[38rem] md:w-[20rem]">Start a smart note from your calendar and auto-add attendees to your note.</p>
            </div>

            <div className="flex flex-col gap-3 ml-4">
                <img src = {outreach} alt = "outreach" className="w-10 "/>

                <p className = "text-xl font-bold">Outreach</p>
                <p className = "w-[29rem] sm:w-[38rem] md:w-[20rem]">Dooly follows your outbound motion in Outreach so critical field updates and call notes make it back to Salesforce.</p>
            </div>

            <div className="flex flex-col gap-3 ml-4">
                <img src = {slack} alt = "slack" className="w-10 "/>

                <p className = "text-xl font-bold">Slack</p>
                <p className = "w-[29rem] sm:w-[38rem] md:w-[20rem]">Collaborate with key stakeholders and keep your team in the loop by getting deal updates in Slack.</p>
            </div>

            <div className="flex flex-col gap-3 ml-4">
                <img src = {gong} alt = "gong" className="w-10 "/>

                <p className = "text-xl font-bold">Gong</p>
                <p className = "w-[29rem] sm:w-[38rem] md:w-[20rem]">Watch Gong calls within your Dooly notes to get key details and action items from the call into Salesforce instantly.</p>
            </div>

            <div className="flex flex-col gap-3 ml-4">
                <img src = {linkedin} alt = "linkedin" className="w-10 "/>

                <p className = "text-xl font-bold">Linkedin</p>
                <p className = "w-[29rem] sm:w-[38rem] md:w-[20rem]">Get your prospects’ LinkedIn profiles displayed right in your meeting note, like your personal assistant for prepwork.</p>
            </div>

        </div>
    </div>
  )
}

export default Fourth