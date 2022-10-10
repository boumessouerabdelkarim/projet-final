import React  from 'react'
import { Link, Outlet} from 'react-router-dom'
import '../../styles/dashbord.css'

import { FaHome} from "react-icons/fa";
import { BsFillCalendarEventFill} from "react-icons/bs"
import {FiUsers} from "react-icons/fi"

import {AiTwotoneFileText} from "react-icons/ai"
import {BiLogOut,BiRestaurant,BiArrowBack} from "react-icons/bi"
import { logout } from '../../redux/UserSlice';
import { useDispatch, useSelector } from 'react-redux';

const Dashbord = () => {
  const dispatch =useDispatch()
  const current = useSelector((state) => state.user?.user);
 
  return (
    
      <div className="wrapper">
    <div className="sidebar">
        <h2>Dashboard</h2>
        <ul>
           
           <Link to='profile'> <li><FaHome/> Profile</li></Link>
           {current?.is_admin?<Link to='gestion-users'>  <li><FiUsers/> Gestion de utilisteur</li></Link>:null}
           {current?.is_admin?<Link to='gestion-etab'> <li><BiRestaurant/> Gestion de etablissement</li></Link>:null}
           {current?.is_admin? <Link to='gestion-event'> <li><BsFillCalendarEventFill/> Gestion d' Evenements</li></Link>:null}
           
           {current?.is_admin? <Link to='gestion-demandes'> <li><AiTwotoneFileText/> Gestion des demandes</li></Link>:null}
           {!current?.is_admin? <Link to='gestion-demandes-user'> <li><AiTwotoneFileText/> Gestion des demandes user </li></Link>:null}
           <Link to='/'> <li><BiArrowBack/> Retour Accuiel</li></Link>
           <Link>  <li onClick={()=>{dispatch(logout()); window.location = "/";}}><BiLogOut/> Logout</li></Link>
        </ul> 
        </div>
    <div className='dash_outlet'>
      <Outlet/>
    </div>

    </div>
  )
}

export default Dashbord