import React from 'react'
import first from "./pics/Dooly-in-the-App-Bar-Mobile.png";
import desktop from "./pics/Dooly-in-the-App-Bar-1536x154.png";

function Third() {
  return (
    <div className="w-auto h-[25rem] bg-pink-600">

        <div className="flex flex-col justify-items-center place-items-center pt-14 gap-10">
            <p className="w-auto text-3xl text-white font-bold text-center sm:w-[39rem] md:text-4xl md:w-[47rem] ">Dooly unlocks your team sales productivity thanks to a light workspace with automations, integrations, and templates.</p>
            <img src = {first} alt = "first" className="w-auto sm:w-[39rem] md:hidden"/>
            <img src = {desktop} alt = "desktop" className="hidden md:block w-[70rem]"/>
        </div>
    </div>
  )
}

export default Third