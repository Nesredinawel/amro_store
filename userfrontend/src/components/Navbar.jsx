import React from 'react'
import { NavLink } from 'react-router-dom'
import { GiFruitBowl , GiCabbage } from "react-icons/gi";
import { BiSolidCoffeeBean } from "react-icons/bi";

import { AiFillHome } from "react-icons/ai";

const Navbar = ({containerStyles}) => {
  return (
   <nav className={`${containerStyles}`}>
    <NavLink to={'/home'} className={({isActive}) => isActive ? "active_link" : ""}> <div className='flexCenter gap-x-1'><AiFillHome />home</div></NavLink>
    <NavLink to={'/fruit'} className={({isActive}) => isActive ? "active_link" : ""}> <div className='flexCenter gap-x-1'><GiFruitBowl />Fruit</div></NavLink>
    <NavLink to={'/vegetable'} className={({isActive}) => isActive ? "active_link" : ""}> <div className='flexCenter gap-x-1'><GiCabbage />Vegetable</div></NavLink>
    <NavLink to={'/creal'} className={({isActive}) => isActive ? "active_link" : ""}> <div className='flexCenter gap-x-1'><BiSolidCoffeeBean />Creal</div></NavLink>
    
   </nav>
  )
}

export default Navbar