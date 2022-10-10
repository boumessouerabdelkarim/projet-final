import React from 'react'
import './card_dem.css'
const Card_dem = ({dem}) => {
  return (
    <div className={`card_dem ${dem.valide==="en cours de traitement" ? "orange-border" :dem.valide==="validee" ? "vert-border": "red-border"  }`}>
        <h1 >  {dem.title}</h1>
        <h3> type:{dem.type}</h3>
        <h3> specialite: {dem.specialite}</h3>
        <h3> adresse:</h3>
            <h4>vile: {dem.adress.ville}</h4> <h4> rue:{dem.adress.rue}</h4>
        
    </div>
  )
}

export default Card_dem