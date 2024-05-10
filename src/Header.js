import React from 'react'
import logo from "./pics/Dooly-Logo-03-Full-Colour-Black-Reverse.svg";
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <div className="sticky w-auto h-20 bg-zinc-900 pl-5 flex justify-between items-center ">

        <img src = {logo} alt = "logo" className = "h-24 w-[120px]" />

        <MenuIcon fontSize = "large" style = {{color:"white"}}/>

    </div>
  )
}

export default Header