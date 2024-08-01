import React from 'react'

function Last() {
  return (
    <div className="w-auto h-[65rem] bg-zinc-900 flex flex-col gap-10 md:h-[55rem]">

        <p className="text-white text-center text-5xl font-bold w-[29rem] ml-3 leading-[4rem] sm:w-[40rem] md:w-[44rem] md:ml-[20rem]">Unlock the power of Dooly’s connected workspace for your sales processes today.</p>

        <div className="flex flex-col ml-10 mt-7 md:flex-row md:ml-16">

            <div className = "text-white w-[27rem] h-[16rem] rounded-t-3xl sm:w-[38rem] sm:h-[14rem] md:w-[38rem] md:h-[24rem] bg-pink-600  md:pl-16 flex flex-col gap-5 pl-5 pt-5  md:rounded-l-3xl md:rounded-r-none md:pt-16">
                <p className="text-4xl font-bold">Get started now</p>
                <p className="text-xl w-[24rem] text-left sm:w-[35rem] md:w-[29rem] md:text-2xl">Why wait? Dooly provides unlimited access to our platform features and capabilities  — for free. Start exploring today!</p>
                <p className = "bg-zinc-900 w-[15rem] h-12 rounded-md text-center pt-3 font-bold cursor-pointer hover:bg-zinc-800 transition duration-300 ease-in-out md:mt-9">CREATE A FREE ACCOUNT</p>
            </div>

            <div className = "text-white w-[27rem] h-[16rem] rounded-b-3xl sm:w-[38rem] sm:h-[14rem] md:w-[38rem] md:h-[24rem] md:pl-16 bg-blue-500 flex flex-col gap-5 pl-5 pt-5 md:rounded-b-none md:rounded-r-3xl md:pt-16">
                <p className="text-4xl font-bold">Contact sales</p>
                <p className="text-xl w-[24rem] text-left sm:w-[35rem] md:w-[28rem] md:text-2xl">Drop us a line to find out how Dooly can help you efficiently and quickly roll out your sales process at your organization.</p>
                <p className = "bg-zinc-900 w-[10rem] h-12 rounded-md text-center pt-3 font-bold cursor-pointer hover:bg-zinc-800 transition duration-300 ease-in-out md:mt-9 ">GET A DEMO</p>
            </div>
        </div>
    </div>
  )
}

export default Last