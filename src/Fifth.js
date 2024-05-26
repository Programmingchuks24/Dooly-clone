import React from 'react'
import pic from "./pics/Pipeline-Deal-Stage-Field-Update-1536x1215.png";
import pic2 from "./pics/DealSpace-Main-View-1.png";
import pic3 from "./pics/Notes-In-Meeting-Capture.png";
import customer from "./pics/customer-kyle-parrish.png";
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

function Fifth() {
  return (
    <div className="w-auto h-[200rem] bg-zinc-900 pt-7 md:h-[220rem]">

        <p className = "block text-pink-400 text-5xl font-bold text-center w-[29rem] leading-[3.5rem] ml-4 sm:text-center sm:w-[39rem] sm:ml-7 md:w-[48rem] md:ml-[20rem] md:mt-24">Empower your team with sales technology that works for them – intuitive, responsive, and tailored to your process.</p>

        <div className="flex flex-col gap-4 md:flex-row-reverse md:pr-20 md:gap-10 md:mt-[10rem]">
            <div className = "ml-5 mt-14 flex flex-col gap-6">
                <p className = "text-white text-4xl font-bold w-[29rem] sm:w-[36rem] md:w-[30rem] md:text-5xl">A complete full sales cycle cockpit in one interface</p>
                <p className = "text-white md:text-xl md:w-[33rem] ">Access to this tool-set to roll out processes and reduce admin work inefficiencies:</p>
                <ul className="text-white list-disc list-inside ml-6 md:text-xl">
                    <li>Pipeline manager</li>
                    <li>Meeting notes and documents</li>
                    <li>Weekly planner</li>
                    <li>Task Manager</li>
                    <li>Individual deal and account views</li>
                    <li>AI deal summarization</li>
                </ul>

                <p className="text-white md:text-xl">That auto-sync to Salesforce  and <span className="text-pink-600 hover:text-pink-500 cursor-pointer">integrate</span> with the rest of your team’s tech stack.</p>
            </div>
 
            <img src={pic} alt="pic"  className="w-[30rem] h-[20rem] block justify-self-center place-self-center sm:w-[40rem] sm:h-[30rem] md:w-[55rem] md:h-[43rem]"/>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:gap-16 md:mt-[10rem]">
            <div className = "ml-5 mt-14 flex flex-col gap-6">
                <p className = "text-white text-4xl font-bold w-[29rem] ">Simple. Clear. Intuitive.</p>
                <p className = "text-white w-[29rem] sm:w-[30rem] md:text-xl md:w-[33rem]">Dooly is a single-page workspace designed with end users in mind.</p>

                <p className="text-white w-[29rem] sm:w-[35rem] md:text-xl md:w-[32rem]">Dooly matches how reps want to work while getting admin work done for them. Operations and enablement reduce training time and accelerate productivity from day one so their teams can sell with consistency, and hit OTE. </p>

                <p className="text-white md:text-xl">No more jumping between tabs!</p>
            </div>

            <img src={pic2} alt="pic" className="w-[30rem] h-[20rem] block justify-self-center place-self-center sm:w-[39rem] sm:h-[26rem] md:w-[55rem] md:h-[40rem]"/>
        </div>

        <div className="flex flex-col gap-4 md:flex-row-reverse md:mt-[10rem] md:gap-16">
            <div className = "ml-5 mt-14 flex flex-col gap-6 md:pt-24">
                <p className = "text-white text-4xl font-bold w-[29rem] sm:w-[30rem] md:w-[35rem] md:text-5xl ">Improve your CRM hygiene.</p>
                <p className = "text-white w-[29rem] sm:w-[36rem] md:text-xl md:w-[33rem]">Dooly helps your rev org reach record efficiency, and gets you the clean data you need. </p>

                <p className="text-white w-[29rem] sm:w-[38rem] md:text-xl md:w-[33rem]">Get sales and CS teams collecting and sharing clean, accurate data and updating their deals in real-time.  </p>

                <p className="text-white w-[29rem] sm:w-[37rem] md:text-xl md:w-[33rem]">This results in a more efficient sales organization with predictable outcomes and repeatable processes.</p>
            </div>

            <img src={pic3} alt="pic" className="w-[30rem] h-[20rem] block justify-self-center place-self-center sm:w-[38rem] sm:h-[30rem] md:w-[55rem] md:h-[45rem]"/>
        </div>

        <div className = "flex flex-col gap-7 ml-5 mt-3 md:ml-16 md:mt-24">
            <p className = "text-pink-400 text-3xl">Figma</p>

            <p className="text-pink-600 font-bold text-3xl w-[26rem] text-wrap sm:w-[39rem] md:text-4xl md:w-[49rem]">“Dooly changes the game for salespeople. What used to take 2 hours a day now takes 30 minutes with Dooly. We can focus on selling instead of dealing with Salesforce’s updating nightmare.”</p>

            <div className = "flex gap-2 cursor-pointer hover:text-pink-500 text-pink-400 transition duration-300 ease-in-out"> 
                <ArrowCircleRightOutlinedIcon fontSize="medium" className = "" />
                <p className="text-base font-bold">READ MORE</p>
            </div>

            <div className = "flex gap-3">
                <img src = {customer} alt="customer" className = "w-10 h-10"/>
                <div className = "text-white">
                    <p className="font-bold">Kyle Parrish</p>
                    <p>VP of Sales, Figma</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Fifth