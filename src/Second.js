import React from 'react'
import pic from "./pics/Sales-Process-Chaos-1442x1536.png";
import second from "./pics/Too-Many-Tabs-Mobile.png";
import third from "./pics/Too-Many-Tabs-1536x256.png";

function Second() {
  return (
    <div className = "w-auto h-[80rem] bg-pink-400 pt-14 md:flex md:justify-items-center md:place-items-center md:flex-col md:pt-14 md:h-[120rem]">

        <p className="text-5xl font-bold w-auto text-center ml-auto sm:ml-8 sm:w-[38rem] sm:text-5xl md:text-6xl md:w-[49rem]">Your process isnt faulty, its just not being followed.</p>

        <p className = "w-auto text-center pt-4 ml-auto sm:w-[36rem] sm:ml-14 md:text-xl md:w-[49rem]">Your reps are still relying on spreadsheets, taking notes in GDocs, Apple notes, or pieces of paper, making forecasts a guessing game. </p>

        <p className="w-auto text-center pt-4 ml-auto sm:w-[36rem] sm:ml-14 md:text-xl md:w-[49rem]">Deal information gets lost in translation, and handoffs between BDRs and reps, or sales and customer success feels like a game of whispers. </p>

        <p className="w-auto text-center pt-4 ml-auto sm:w-[36rem] sm:ml-14 md:text-xl md:w-[49rem]">Let alone the admin work and all the multi-tabbing, taking over 70% of reps and account managers time instead of spending it on what matters: selling. </p>

        <img src = {second} alt = "second" className="block w-auto h-[150px] ml-auto mt-8 sm:w-[500px] md:hidden"/>
        <img src = {third} alt = "third" className="hidden md:block mt-10 w-[70rem] h-[200px]"/> 
        <img src = {pic} alt = "sales" className = "mt-8 md:w-[70rem] md:h-[70rem]" />
    </div>
  )
}

export default Second