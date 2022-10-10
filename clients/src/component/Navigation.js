import React from 'react'
import { useDispatch } from 'react-redux'
import {Link, useLocation} from 'react-router-dom'
import { logout } from '../redux/UserSlice'
import '../styles/navigateur.css'

const Navigation = () => {
  const location=useLocation()
  const isAuth=localStorage.getItem('token')
  const dispatch = useDispatch();
  return (
   location.pathname.includes("dashboard") ?null :
    
    <div className='Navigation'>
      
    <Link to='/'> <h1 id='logo'>BON PLAN </h1></Link>
    <ul className='navigation-ul'>
      

        <Link to='/'><li>Accuiel</li></Link>
        
                
        <Link  to='/Evenements'><li>Evenements</li>
        <ul className='under-list'>
         
          <Link to='/Evenements/Soirees'><li>SOIRÉES</li></Link>
          <Link to='/Evenements/Camping'><li>CAMPINGS</li></Link>
          <Link  to='/Evenements/Randonnees'><li>RANDONNÉES</li></Link>
          <Link  to='/Evenements/Expositions'><li>EXPOSITIONS</li></Link>
          <Link  to='/Evenements/Autres'><li>AUTRES</li></Link>
        </ul>
        </Link>
        <Link  to='/Restaurants/Restaurant'><li>FOOOD AND DRINK </li>
        <ul className='under-list'>
         <Link to='/Restaurants/Restaurant/resto'><li>RESTAURANTS</li></Link>
          <Link to='/Restaurants/Restaurant/fast_food'><li>FAST FOOD</li></Link>
          <Link to='/Restaurants/Restaurant/salon_de_the'><li>SALON DE THÉ</li></Link>
          <Link  to='/Restaurants/Restaurant/patisserie'><li>PÂTISSERIE</li></Link>
        </ul>
        </Link>
        <Link  to='/Restaurants/vie_nocturne'><li>VIE NOCTURNE</li>
        <ul className='under-list'>
         <Link to='/Restaurants/vie_nocturne/Lounges_bars'><li>LOUNGES - BARS</li></Link>
          <Link to='/Restaurants/vie_nocturne/Beach_bars'><li>BEACH BARS</li></Link>
          <Link to='/Restaurants/vie_nocturne/Pool_bars'><li>POOL BAR</li></Link>
          <Link  to='/Restaurants/vie_nocturne/Boites_de_nuit'><li>BOITE DE NUIT</li></Link>
        </ul>
        </Link>
        <Link  to='/Hotel'><li>HOTELS</li>
        <ul className='under-list'>
         <Link to='/Hotel/grand hotel'><li>GRAND HOTEL</li></Link>
          <Link to='/Hotel/hotel de ville'><li>HOTEL DE VILLE</li></Link>
          <Link to="/Hotel/maison d'hote"><li>MAISON D'HOTE</li></Link>
        
        </ul>
        </Link>
        <Link  to='/Autres'><li>AUTRES</li>
        <ul className='under-list'>
         <Link to='/Autres/clubs'><li>CLUBS</li></Link>
         <Link to='/Autres/agence_voyage'><li>AGENCE DE VOYAGE</li></Link>
          <Link to='/Autres/musees'><li>MUSEES</li></Link>

          <Link to='/Autres/aire_pique_nique'><li>LES ENDROITS A VISITER</li></Link>

        
        </ul>
        </Link>
        
     { isAuth?  <Link to='/dashboard/profile'> <li>dashboard</li></Link>:null}
     { isAuth? <Link to='/'> <li onClick={()=>{dispatch(logout());}}>Logout</li></Link>:<Link to='/signup'> <li>Login</li></Link>}
        
    </ul>
</div>
  )
}

export default Navigation