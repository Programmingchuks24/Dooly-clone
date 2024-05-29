import React from 'react';
import pic1 from "./pics/G2-Icon-Light-Pink.svg";
import pic2 from "./pics/Capterra-Icon-Light-Pink.svg";
import pic3 from "./pics/LinkedIn-Icon-Light-Pink.svg";

function Footer() {
  return (
    <div className = "w-auto h-[140rem] bg-zinc-900 md:h-[75rem]">
        <div className=" grid grid-rows-3 grid-cols-2 pl-12 gap-x-12 justify-items-center items-center md:grid-rows-2 md:grid-cols-4">

            <div className = "text-white flex flex-col gap-4">
                <p className = "font-bold">SOLUTIONS</p>
                <p>Sales Cycle Management</p>
                <p>Post Sales Customer</p>
                <p>Management</p>
                <p>Deal Reviews</p>
                <p>Process Adoption</p>
                <p>Team Handoffs</p>
            </div>

            <div className = "text-white flex flex-col gap-4">
                <p className = "font-bold">PRODUCTS</p>
                <p>Product Overview</p>
                <p>Notes</p>
                <p>Pipeline</p>
                <p>DealSpace</p>
                <p>DealSpace</p>
                <p>Templates</p>
                <p>Playbooks</p>
                <p>Deal & Account Vitals</p>
                <p>Chrome Extension</p>
                <p>Integrations</p>
                <p>Security</p>
                <p>Subprocessors</p>
            </div>

            <div className = "text-white flex flex-col gap-4">
                <p className = "font-bold">ROLES</p>
                <p>Account Executive</p>
                <p>Sales Leader</p>
                <p>Sales Enablement</p>
                <p>RevOps</p>
                <p>Customer Success</p>
            </div>

            <div className = "text-white flex flex-col gap-4 mt-[11rem]">
                <p className="font-bold">RESOURCES</p>
                <p>Blog</p>
                <p>Customer Stories</p>
                <p>Help Centre</p>
                <p>Fire Talks</p>
                <p>Webinars</p>
                <p>Podcasts</p>
            </div>

            <div className = "text-white flex flex-col gap-4">
                <p className="font-bold">REPORTS</p>
                <p>9 X-Factors</p>
                <p>Sales Happiness Index</p>
                <p>State of Sales Productivity</p>
                <p>Sales Process Report</p>
                <p>State of Sales Leadership</p>
                <p>Finish the Quarter Strong</p>
            </div>

            <div className = "text-white flex flex-col gap-4 mt-28">
                <p className = "font-bold">COMPANY</p>
                <p>Why Dooly</p>
                <p>Careers</p>
                <p>Customer Love</p>
            </div>

            <div className = "text-white flex flex-col gap-4">
                <p className = "font-bold">GUIDES</p>
                <p>Salesforce Notes</p>
                <p>Sales Pipeline</p>
                <p>Sales Management Software</p>
                <p>Sales Forecast</p>
                <p>Log a Call in Salesforce</p>
                <p>Find Hot Opportunities</p>
                <p>Close the Quota Gap</p>
                <p>Sales Time Wasters</p>
                <p>Why Reps Quit</p>
            </div>
            
        </div>

        <div className ="text-pink-500 flex flex-col gap-8 mt-14 border-t border-pink-500 w-[29rem] ml-6 pt-8 sm:w-[37rem] md:ml-[13rem] md:w-[57rem] md:flex-row md:gap-72">
            <div className = "flex flex-col gap-2 md:flex-row md:gap-8 text-nowrap">
                <p className = "text-white ">© Dooly Research Ltd.</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
                <p>Status</p>
            </div>
            

            <div className ="flex gap-3">
                <img src = {pic1} alt="G2"/>
                <img src = {pic2} alt="Capterra"/>
                <img src = {pic3} alt="LinkedIn"/>
            </div>
        </div>

    </div>
  )
}

export default Footer