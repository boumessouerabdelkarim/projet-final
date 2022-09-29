import React, { useEffect, useState } from 'react'
import { BiHotel, BiRestaurant } from 'react-icons/bi';
import {MdOutlineOtherHouses} from'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';
import { getallEtab } from '../../redux/EtabSlice';
import { getallHotel } from '../../redux/HotelSlice';
import { getallresto } from '../../redux/RestoSlice';

import Card_etab from '../../component/Card_etab'
import ReactLoading from "react-loading";
import './tab.css'
import Modal_ajout from '../../component/Modal_ajout';

const G_etab = () => {
  const [toggleState, setToggleState] = useState(1);
  const [show1, setshow1] = useState(false);
  const [x, setx] = useState(null)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getallresto())
  dispatch( getallHotel())

dispatch(getallEtab())


},[]
)
const restaurant=useSelector((state)=> state.resto.restos)

const hotels=useSelector((state)=> state.hotel.hotels)
const autre=useSelector((state)=> state.etab.etabs)
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
  
    <div className="container-tabs">
    <div className="bloc-tabs">
      
      <button
        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(1)}
      >
        <BiRestaurant/> Restaurants
      </button>
      <button
        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(2)}
      >
        <BiHotel/> Hotels
      </button>
      <button
        className={toggleState === 3? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(3)}
      >
        <MdOutlineOtherHouses/> Autres
      </button>
    </div>

    <div className="content-tabs">
      <div
        className={toggleState === 1 ? "content  active-content" : "content"}
      >
        <button className='add_etab'onClick={()=>{setshow1(!show1);
          setx("resto")}}>Ajouter resto </button>
        <h1 className=' title_etab'>ALL RESTAURANTS</h1>
        
        {
        restaurant?
        restaurant.map((el,i)=><Card_etab etab={el}  x={"resto"} key={i}/>):
        <h2 style={{marginTop:150}}>  <ReactLoading type={"spokes"} color={"blue"} height={50} width={50} /> </h2>}
      </div>

      <div
        className={toggleState === 2 ? "content  active-content" : "content"}
      >
        <button className='add_etab' onClick={()=>{setshow1(!show1);
       setx("hotel") }}>Ajouter hotel </button>
       <h1  className=' title_etab'>ALL HOTELS</h1>
        {hotels?
        hotels.map((el,i)=><Card_etab etab={el}  x={"hotel"} key={i}/>):
        <h2 style={{marginTop:150}}>  <ReactLoading type={"spokes"} color={"blue"} height={50} width={50} /> </h2>}
      
      </div>

      
      <div
        className={toggleState === 3 ? "content  active-content" : "content"}
      >
        <button className='add_etab' onClick={()=>{setshow1(!show1);
        setx("etab") }}>Ajouter etab </button>
         <h1  className=' title_etab'> AUTRE ETABLISEMENT </h1>
        {autre?
        autre.map((el,i)=><Card_etab etab={el} x={"etab"}  key={i}/>):
        <h2 style={{marginTop:150}}>  <ReactLoading type={"spokes"} color={"blue"} height={50} width={50} /> </h2>}
      
      </div>
    </div>
{
  show1?<Modal_ajout setshow1={setshow1} show1={show1} x={x}/>:null
}
  </div> 
  )
}

export default G_etab