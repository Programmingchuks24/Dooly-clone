import React from 'react'
import pic from "./pics/Sales-Process-Chaos-1442x1536.png";
import second from "./pics/Too-Many-Tabs-Mobile.png";

function Second() {
  return (
    <div className = "w-auto h-[70rem] bg-pink-400 pt-14">

        <p className="text-5xl font-bold w-[25rem] text-center ml-12 sm:ml-12 sm:w-[38rem] sm:text-5xl">Your process isnt faulty, its just not being followed.</p>

        <p className = "w-[27rem] text-center pt-4 ml-8">Your reps are still relying on spreadsheets, taking notes in GDocs, Apple notes, or pieces of paper, making forecasts a guessing game. </p>

        <p className="w-[27rem] text-center pt-4 ml-5">Deal information gets lost in translation, and handoffs between BDRs and reps, or sales and customer success feels like a game of whispers. </p>

        <p className="w-[27rem] text-center pt-4 ml-5">Let alone the admin work and all the multi-tabbing, taking over 70% of reps and account managers time instead of spending it on what matters: selling. </p>

        <img src = {second} alt = "second" className="w-[350px] h-[150px] ml-20 mt-8"/>
        <img src = {pic} alt = "sales" className = "mt-8" />
    </div>
  )
}

export default Second