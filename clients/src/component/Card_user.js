import React from 'react'
import {AiFillDelete}from 'react-icons/ai'
import'./user_card.css'
const Card_user = (user) => {
  console.log(user)
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
  <button id='button_supp'><AiFillDelete/></button>
  </div>
 </div>
  )
}

export default Card_user