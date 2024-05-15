import React from 'react';
import mainpic from  "./pics/logo-BigCommerce-white.svg";
import secondpic from "./pics/logo-CrowdRiff-white.svg";
import thirdpic from "./pics/logo-Figma-white.svg";
import fourthpic from "./pics/logo-Formstack-white.svg";
import fifthpic from "./pics/logo-Intercom-white.svg";
import sixthpic from "./pics/logo-Juro-white.svg";
import seventhpic from "./pics/logo-LinkSquares-white.svg";
import eighthpic from "./pics/logo-Procore-white.svg";
import ninethpic from "./pics/logo-Ramp-white.svg";
import tenthpic from "./pics/logo-Writer-white.svg";
import crowdriff from "./pics/logo-CrowdRiff-lightpink.svg";
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import courtney from "./pics/customer-courtney-malinas.png";

function Mainpage() {
  return (
    <div className="w-auto h-[76rem] bg-zinc-900 md:h-auto sm:h-[70rem]">

        <div className = "grid grid-cols-2 grid-rows-5 gap-14 pt-9 pl-2 pr-2 items-center justify-items-center md:grid-cols-5  md:pt-14 md:w-[80rem] md:pl-12">

            <img src = {thirdpic}  alt = "thirdpic"/>
            <img src = {eighthpic} alt = "eightpic"/>
            <img src = {fifthpic} alt = "fifthpic"/>
            <img src = {mainpic} alt = "mainpic"/>
            <img src = {fourthpic} alt = "fourthpic"/>
            <img src = {ninethpic} alt = "ninethpic"/>
            <img src = {seventhpic} alt = "seventhpic"/>
            <img src = {tenthpic} alt = "tenthpic"/>
            <img src = {sixthpic} alt = "sixthpic"/>
            <img src = {secondpic} alt = "secondpic"/>

        </div>

        <div className = "mt-4 ml-3 md:-mt-[15rem] sm:ml-3 md:ml-12">

            <img src={crowdriff} alt = "crowdriff" className = "w-[9rem] h-[10rem]"/>

            <div className = "w-[27rem] md:w-[53rem] sm:w-[40rem] md:-mt-4">
                <p className = "text-3xl text-pink-600 font-extrabold text-wrap md:text-4xl">“Salesforce is the source of truth but we need to know that the information in it is accurate. Dooly holds our team accountable 100% of the time. As we continue to grow, it has helped the team to form that habit of accountability and keep deal information quality.”</p>
            </div>

            <div className= "flex gap-2 mt-5 cursor-pointer hover:text-pink-600 text-pink-400 transition duration-300 ease-in-out">
                <ArrowCircleRightOutlinedIcon sx={{fontSize:27}}/>
                <p className = "text-[17px] font-bold">READ MORE</p>
            </div>

            <div className="flex gap-4 mt-7 ">

                <img src = {courtney} alt = "courtney" className = "w-10 h-10"/>
                <div>
                    <p className="text-white text-base font-bold">Courtney Malinas</p>
                    <p className = "text-white">CrowdRiff</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mainpage