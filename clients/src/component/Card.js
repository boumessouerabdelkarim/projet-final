import React from "react";
import '../styles/card.css'
const Card = ({etab,x}) => {
  return (
    <div className="card">
      
        <img src={etab.logo} alt="image" />
      
      <div className="content">
        <h1>{etab.name}</h1>
        <div className="info">
          <h2>Adress:</h2>
          <h3>{etab.adress.ville}</h3>
        </div>
        {x ==="resto"?
        <div className="info">
          <h2>specialite:</h2>
          <h3>{etab.specialite}</h3>
        </div>:
        x==="hotel"?
        <div className="info">
        <h2>Nombre d'etoiles: </h2>
        <h3>{etab.nb_etoile}</h3>
      </div> :
      x==="event"?
     <><div className="info">
      <h2>Organiser par:</h2>
      <h3>{etab.organization}</h3>
    
    </div>
    <div className="info">
    <h2>Date:</h2>
    <h3>{etab.date_debut} jusqu'a {etab.date_fin}</h3>
  </div>
  </>:null
  
  }
    
        
      </div>
      <div className="menu"></div>
    </div>
  );
};

export default Card;
