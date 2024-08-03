import React from 'react'

function Last() {
  return (
    <div className="w-auto h-[75rem] bg-zinc-900 flex flex-col gap-10 md:h-[55rem]">

        <p className="text-white text-center text-5xl font-bold w-auto ml-auto mr-auto leading-[4rem] sm:w-[40rem] md:w-[44rem] md:ml-[20rem]">Unlock the power of Dooly’s connected workspace for your sales processes today.</p>

        <div className="flex flex-col ml-auto mr-auto mt-7 md:flex-row md:ml-16 w-[20rem]">

            <div className = "text-white w-auto h-[19rem] rounded-t-3xl sm:w-[38rem] sm:h-[14rem] md:w-[38rem] md:h-[24rem] bg-pink-600  md:pl-16 flex flex-col gap-5  pt-5 place-content-center place-items-center md:rounded-l-3xl md:rounded-r-none md:pt-16">
                <p className="text-4xl font-bold">Get started now</p>
                <p className="text-xl w-auto text-center sm:w-[35rem] md:w-[29rem] md:text-2xl">Why wait? Dooly provides unlimited access to our platform features and capabilities  — for free. Start exploring today!</p>
                <p className = "bg-zinc-900 w-auto h-12 rounded-md text-center pt-3 font-bold cursor-pointer pl-10 pr-10 hover:bg-zinc-800 transition duration-300 ease-in-out md:mt-9">CREATE A FREE ACCOUNT</p>
            </div>

            <div className = "text-white w-auto h-[19rem] rounded-b-3xl sm:w-[38rem] sm:h-[14rem] md:w-[38rem] md:h-[24rem] md:pl-16 bg-blue-500 flex flex-col gap-5 pl-2 pt-5 md:rounded-b-none md:rounded-r-3xl md:pt-16 place-content-center place-items-center">
                <p className="text-4xl font-bold">Contact sales</p>
                <p className="text-xl w-auto text-center sm:w-[35rem] md:w-[28rem] md:text-2xl">Drop us a line to find out how Dooly can help you efficiently and quickly roll out your sales process at your organization.</p>
                <p className = "bg-zinc-900 w-auto h-12 rounded-md text-center pt-3 font-bold cursor-pointer pl-10 pr-10 hover:bg-zinc-800 transition duration-300 ease-in-out md:mt-9 ">GET A DEMO</p>
            </div>
        </div>
    </div>
  )
}

export default Last