import React  from 'react'
import { Link, Outlet} from 'react-router-dom'
import '../../styles/dashbord.css'

import { FaHome} from "react-icons/fa";
import { BsFillCalendarEventFill} from "react-icons/bs"
import {FiUsers} from "react-icons/fi"

import {AiTwotoneFileText} from "react-icons/ai"
import {BiLogOut,BiRestaurant,BiArrowBack} from "react-icons/bi"

const Dashbord = () => {
   
  return (
    
      <div className="wrapper">
    <div className="sidebar">
        <h2>Dashboard</h2>
        <ul>
           
           <Link to='profile'> <li><FaHome/> Profile</li></Link>
           <Link to='gestion-users'>  <li><FiUsers/> Gestion de utilisteur</li></Link>
           <Link to='gestion-etab'> <li><BiRestaurant/> Gestion de etablissement</li></Link>
           <Link to='gestion-event'> <li><BsFillCalendarEventFill/> Gestion d' Evenements</li></Link>
           
           <Link to='gestion-demandes'> <li><AiTwotoneFileText/> Gestion des demandes</li></Link>
           <Link to='/'> <li><BiArrowBack/> Retour Accuiel</li></Link>
           <Link>  <li><BiLogOut/> Logout</li></Link>
        </ul> 
        </div>
    <div className='dash_outlet'>
      <Outlet/>
    </div>

    </div>
  )
}

export default Dashbord