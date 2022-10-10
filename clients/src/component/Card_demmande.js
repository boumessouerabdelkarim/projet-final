import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateDem } from '../redux/DemSlice'
import { getuser } from '../redux/UserSlice'
import './card_dem.css'
const Card_demmande = ({dem,setd,d}) => {
   const dispatch = useDispatch()
   useEffect(()=>{
    dispatch(getuser())},[]
)

  const utlisateurs = useSelector((state) => state.user?.users);
 
const user = utlisateurs?.filter((user) => user?._id===dem?.User_id)

   const [edit, setedit] = useState(null)
  return (
    <div className={`card_dem ${dem.valide==="en cours de traitement" ? "orange-border" :dem.valide==="validee" ? "vert-border": "red-border"  }`}>
 <h1 > nom: {dem.title}</h1>
 <h3>user name: {user[0]?.name} {user[0]?.lastName} </h3>
        <h3> type:{dem.type}</h3>
        <h3> specialite: {dem.specialite}</h3>
        <h3> adresse:</h3>
            <h4>vile: {dem.adress.ville}</h4> <h4> rue:{dem.adress.rue}</h4>
            <div style={{display:'flex'}}>
            <h2>validation:</h2>
          <select defaultValue={dem.valide}
          onChange={(e) => {setedit({...edit,valide:e.target.value});dispatch(updateDem({id:dem._id,edit:{...edit,valide:e.target.value}}));setd(!d)}} style={{width:"10rem",padding:15, fontSize:15,marginLeft:"0.25rem"}} name="done"  >
          <option value="en cours de traitement" >en cours</option>
        <option value="validee">validee</option>
        <option value="refusee">refusee</option>
        
      </select>
               </div>
    </div>
  )
}

export default Card_demmande