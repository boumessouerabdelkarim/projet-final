import React, { useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { deleteEvent } from '../redux/EventSlice'
import {deleteHotel} from '../redux/HotelSlice'
import { deleteresto } from '../redux/RestoSlice'
import { deleteEtab } from '../redux/EtabSlice'
import './card_etab.css'
import Modal_edit from './Modal_edit'
const Card_etab = ({etab,x}) => {
  const el=etab
  const [show, setshow] = useState(false)
 
  const dispatch = useDispatch()
 
  
  return (
    
    < div className='card-etab'>
       {show?<Modal_edit show={show} setshow={setshow} x={x}el={el}/>:null}
    
     <img className='log-etab' src={el.logo} alt='photo profile' />
     
     <div className='etab-description'>
    <h1><span>Name: </span> <span>{el.name} </span>  </h1>
    <h3><span>Type: </span> <span>{el.type}</span> </h3>
   {el.email? <h3><span>Email: </span> <span>{el.email}</span> </h3>:null}
    {el.adress?<h3> <span>Adress:</span><span>{el.adress.ville}</span></h3>:null}
    {el.telephone?<h3> <span>Telephone:</span><span>{el.telephone}</span></h3>:null}
     </div>
     <div className='etab-edited'>
     <button id='button_edit' onClick={()=>setshow(!show)}><FiEdit/></button>
      <button className='button_supp' onClick={()=>{
switch (x) {
  case "resto":
    dispatch(deleteresto(el._id));
    break;
  case "hotel":
    dispatch(deleteHotel(el._id));
    break;
  case "etab":
     dispatch(deleteEtab(el._id));
    break;
  case "event":
    dispatch(deleteEvent(el._id));
    break;
}
      }}><AiFillDelete/></button>
      </div>
     </div>
  )
}

export default Card_etab