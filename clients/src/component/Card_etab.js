import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import './card_etab.css'
const Card_etab = (etab) => {
  const el=etab.etab
  return (
    
    < div className='card-etab'>
       
    
     <img className='log-etab' src={el.logo} alt='photo profile' />
     
     <div className='etab-description'>
    <h1><span>Name: </span> <span>{el.name} </span>  </h1>
    <h3><span>Type: </span> <span>{el.type}</span> </h3>
    <h3><span>Email: </span> <span>{el.email}</span> </h3>
    {el.adress?<h3> <span>Adress:</span><span>{el.adress}</span></h3>:null}
    {el.telephone?<h3> <span>Telephone:</span><span>{el.telephone}</span></h3>:null}
     </div>
     <div className='etab-edited'>
     <button id='button_edit'><FiEdit/></button>
      <button className='button_supp'><AiFillDelete/></button>
      </div>
     </div>
  )
}

export default Card_etab