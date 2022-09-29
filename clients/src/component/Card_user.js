import React from 'react'
import {AiFillDelete}from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { deleteuser } from '../redux/UserSlice'
import'./user_card.css'
const Card_user = ({user}) => {
 const dispatch = useDispatch()
  return (
    < div className='card-user'>

 <img  className='photo_profile' src={user.photo} alt='photo profile' />
 
 <div className='user-description'>
<h1> {`user name:  ${user.name} ${user.lastName}` }</h1>
<h3>{`email: ${user.email}`} </h3>
{user.adress?<h3> {`adresse: ${user.adress}`}</h3>:null}
{user.telephone?<h3> {`telephone: ${user.telephone}`}</h3>:null}
 </div>
 <div className='user-edited'>
  <button id='button_supp' onClick={()=>{dispatch(deleteuser(user._id))}} ><AiFillDelete/></button>
  </div>
 </div>
  )
}

export default Card_user