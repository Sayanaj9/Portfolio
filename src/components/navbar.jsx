import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/navbar.scss"
import "../styles/home.scss"
import {AppContext} from "../context/appContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { useMediaQuery } from "react-responsive";
import { IoMdClose } from "react-icons/io";
export default function Navbar() {
  const {setCategory} = useContext(AppContext)
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  const [isOpen, setIsOpen]=useState(false)
  const handleModal=()=>{
    setIsOpen(false)
  }
  return (
    <div className='header animated'>
    <p className='heading'>Portfolio.</p>
    {!isSmallScreen ?
    <nav className='navbar small_screen_navbar'>
        <NavLink to="/" end className="link" >Home</NavLink>
        <NavLink to="/experience" className="link"  onClick={()=>setCategory('professional')}>Experience</NavLink>
        <NavLink to="/projects" className="link" onClick={()=>setCategory('projects')}>Projects</NavLink>
    </nav> :
         <>
        <GiHamburgerMenu color='white' onClick={()=>setIsOpen(true)}/>
        {isOpen&&<div className={`small_screen_navbar`}>
          <IoMdClose color='white'size={25} className='close_btn' onClick={handleModal}/>
          <nav className='navbar'>
            <NavLink to="/" end className="link" >Home</NavLink>
            <NavLink to="/experience" className="link"  onClick={()=>setCategory('professional')}>Experience</NavLink>
            <NavLink to="/projects" className="link" onClick={()=>setCategory('projects')}>Projects</NavLink>
        </nav>
      </div>}
      </>}
    </div>
  )
} 
 