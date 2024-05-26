import React from 'react';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';

function Next() {
  return (
    <div className="w-auto h-[90rem] bg-zinc-900 text-white">

        <p className = "text-4xl font-bold w-[20rem] text-center ml-20 sm:text-5xl sm:w-[35rem] sm:ml-14 md:text-6xl md:w-[49rem] md:ml-[17rem]">Process-driven sales and CS teams use Dooly for:</p>

        <div className = "grid grid-cols-1 md:grid-cols-2 md:ml-14">
            <div className = "w-[28rem] h-[210px] border-2 border-purple-700 text-wrap ml-5 mt-14 pl-7 pt-4 flex flex-col gap-4 rounded-3xl sm:w-[39rem] sm:h-[180px] md:h-[220px] md:w-[34rem] md:pt-8">
                <RocketLaunchOutlinedIcon fontSize="large"/>
                <p className = "font-bold text-xl">Sales Cycle Management</p>
                <p className = "text-wrap text-left w-[24rem] sm:w-[35rem] md:w-[28.5rem]">Auto-syncing tools for your team to tackle pipeline management, deal prioritization, inspections, meeting prep, and more, throughout the sales cycle.</p>
            </div>
        

            <div className = "w-[28rem] h-[210px] border-2 border-purple-500 text-wrap ml-5 mt-14 pl-7 pt-4 flex flex-col gap-4 rounded-3xl  sm:w-[39rem] sm:h-[180px] md:h-[220px] md:w-[34rem] md:pt-8">
                <ChangeCircleOutlinedIcon fontSize="large"/>
                <p className = "font-bold text-xl">Renewals & Expansion</p>
                <p className = "text-wrap text-left w-[24rem] sm:w-[35rem] md:w-[28.5rem]">Help your customer success teams easily manage and influence expansion and renewal contracts of their accounts.</p>
            </div>

            <div className = "w-[28rem] h-[210px] border-2 border-purple-700 text-wrap ml-5 mt-14 pl-7 pt-4 flex flex-col gap-4 rounded-3xl sm:w-[39rem] sm:h-[180px] md:h-[220px] md:w-[34rem] md:pt-8">
                <DesktopWindowsOutlinedIcon fontSize="large"/>
                <p className = "font-bold text-xl">Efficient Deal Reviews</p>
                <p className = "text-wrap text-left w-[24rem] sm:w-[35rem] md:w-[28.5rem]">Using DealSpace you stop playing catch up on deals and start using one-on-one time to strategize on advancing deals to closed won.</p>
            </div>

            <div className = "w-[28rem] h-[210px] border-2 border-purple-700 text-wrap ml-5 mt-14 pl-10 pt-4 flex flex-col gap-4 rounded-3xl sm:w-[39rem] sm:h-[180px] md:h-[220px] md:w-[34rem] md:pt-8">
                <UploadFileOutlinedIcon fontSize="large"/>
                <p className = "font-bold text-xl">Frictionless Team Handoffs</p>
                <p className = "text-wrap text-left w-[24rem] sm:w-[35rem] md:w-[28.5rem]">Simplify knowledge transfer in deals. Design processes for new and existing business, from SDR to AE, AE to CSM, and CSM onwards. </p>
            </div>
        </div>
    </div>
  )
}

export default Next