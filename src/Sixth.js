import React from 'react';
import pic1 from "./pics/Dooly-Illustration-Sales-Teams-1536x1536.png";
import pic2 from "./pics/Dooly-Illustration-CS-Teams-1536x1536.png";
import pic3 from "./pics/Dooly-Illustration-Ops-Enablement-Teams-1536x1536.png";
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
function Sixth() {
  return (
    <div className = "w-auto h-[130rem] bg-zinc-900 text-white sm:h-[125rem] md:h-[60rem]">

        <p className="text-5xl font-bold text-center w-auto leading-[4rem] ml-3 sm:w-[40rem] md:ml-[24rem]">Dooly powers every team in your revenue organization.</p>

        <div className = " flex flex-col md:flex-row md:ml-[1rem] md:mt-20 sm:ml-20">
            <div className="mt-10 flex flex-col gap-4 md:m-0">
                <img src = {pic1} alt = "sales" className = "w-auto h-[20rem] rounded-lg ml-auto mr-auto"/>

                <div className = "ml-auto mr-auto flex flex-col gap-4">
                    <p className = "font-bold text-lg">Sales</p>
                    <p className="text-left w-[20rem]">Dooly makes it easy to take notes, update Salesforce, and manage every deal so sales teams can focus on money-making moves that get reps hit their quotas with more consistency.</p>
                    <div className = "flex gap-2 cursor-pointer hover:text-pink-500 text-pink-600 transition duration-300 ease-in-out"> 
                        <ArrowCircleRightOutlinedIcon fontSize="medium" className = "" />
                        <p className="text-base font-bold">DOOLY FOR SALES TEAM</p>
                    </div>
                </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 md:m-0">
                <img src = {pic2} alt = "sales" className = "w-auto h-[20rem] rounded-lg ml-auto mr-auto"/>

                <div className = "ml-auto mr-auto  flex flex-col gap-4">
                    <p className = "font-bold text-lg">Customer Success</p>
                    <p className="text-left w-[20rem]">From sales handoffs to managing expansion opportunities, Dooly gives CS teams a workspace to manage accounts, build playbooks and templates for onboarding sessions, QBRs, and renewal conversations.</p>
                    <div className = "flex gap-2 cursor-pointer hover:text-pink-500 text-pink-600 transition duration-300 ease-in-out"> 
                        <ArrowCircleRightOutlinedIcon fontSize="medium" className = "" />
                        <p className="text-base font-bold">DOOLY FOR CS TEAMS</p>
                    </div>
                </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 md:m-0">
                <img src = {pic3} alt = "sales" className = "w-auto h-[20rem] rounded-lg ml-auto mr-auto"/>

                <div className = "ml-auto mr-auto flex flex-col gap-4">
                    <p className = "font-bold text-lg">Operations & Enablement</p>
                    <p className="text-left w-[20rem]">Create an integrated sales hub with the security and controls you need to scale your sales process while keeping your CRM clean. Easily integrate process into your team’s daily workflow with templates and playbooks that the guesswork out of deal progression</p>
                    <div className = "flex gap-2 cursor-pointer hover:text-pink-500 text-pink-600 transition duration-300 ease-in-out"> 
                        <ArrowCircleRightOutlinedIcon fontSize="medium" className = "" />
                        <p className="text-base font-bold">DOOLY FOR OPS TEAMS</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Sixth