import React from "react";
import "../styles/card.css";
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";
const Card = ({ etab, x }) => {
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }
  function Rate(etab){
    var sum=0;
    if(etab.Comments.length===0)
    return 0;
    else{
      for(let i=0; i<etab.Comments.length; i++){
        sum+=etab.Comments[i].note/etab.Comments.length
    }
    return sum
  }}

  return (
    <div className="card">
      <img src={etab.logo} alt="image" />

      <div className="content">
        <h1>{etab.name}</h1>
        <div>
        <div className="info">
          <h2 className="tttt">Adress:</h2>
          <h2 className="tttt">{etab.adress.ville}</h2>
        </div>
        {x === "resto" ? (
          <div className="info">
            <h2 className="tttt">specialite:</h2>
            <h2 className="tttt">{etab.specialite}</h2>
          </div>
        ) : x === "hotel" ? (
          <div className="info">
            <h2 className="tttt">Nombre d'etoiles: </h2>
            <h2 className="tttt">
              <Rating initialValue={etab?.nb_etoile} readonly={true} />
            </h2>
          </div>
        ) : x === "event" ? (
          <>
            <div className="info">
              <h2 className="tttt">Organiser par:</h2>
              <h2 className="tttt">{etab.organization}</h2>
            </div>
            <div className="info">
              <h2 className="tttt">Date:</h2>
              <h2 className="tttt">
                {formatDate(etab?.date_debut)} jusqu'a{" "}
                {formatDate(etab?.date_fin)}
              </h2>
            </div>
          </>
        ) : null}
        </div>
      </div>
      <div className="menu">
        {x === "resto" ? <>
        { (Rate(etab)!==0)?  <Rating className="rrrr" initialValue={Rate(etab)} readonly={true} />:<h4>Aucun note pour l'instant</h4>}
          <Link
            to={{
              pathname: `/Restaurants/Restaurant/${etab._id}`}}
              state ={ {etab: etab}
            }
          >
            Plus d'info
          </Link></>
         : x === "etab" ? <>
         { (Rate(etab)!==0)?  <Rating  className="rrrr"initialValue={Rate(etab)} readonly={true} />:<h4>Aucun note pour l'instant</h4>}
           
          <Link to={{ pathname: `/Autres/${etab._id}`}} state ={ {etab: etab}
        }>
            Plus d'info
          </Link>
        </> : x === "hotel" ? <>
        { (Rate(etab)!==0)?  <Rating  className="rrrr"initialValue={Rate(etab)} readonly={true} />:<h4>Aucun note pour l'instant</h4>}
          
          <Link to={{ pathname: `/hotel/${etab._id}`}} state ={ {etab: etab}
        }>
            Plus d'info
          </Link>
        </> : <>
        { (Rate(etab)!==0)?  <Rating  className="rrrr"initialValue={Rate(etab)} readonly={true} />:<h4>Aucun note pour l'instant</h4>}
          
          <Link
            to={{ pathname: `/Evenements/${etab._id}`}} state ={ {etab: etab} }
          >
            Plus d'info
          </Link>
        </>}
      </div>
    </div>
  );
};

export default Card;
