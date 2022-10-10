import React from 'react'
import { useLocation } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'
import Comment from '../../component/commentaire/Comment'
import Listcommet from '../../component/commentaire/Listcommet'

const Hotel = ({sett,t}) => {
    const location=useLocation()
    const etab=location.state.etab
  return (
    <div className="info_etab">
    <h1>{etab.name}</h1>
    <div className="bbbbb">
        
        <h2>Type:</h2> <h2>{etab.type}</h2>
      </div>
      {etab.site_web_url&&<div className="bbbbb">
        
        <h2>Site web:</h2> <a  href={etab.site_web_url}>{etab.site_web_url}</a>
      </div>}
    <div className="bbbbb">
        
        <h2>Nombre d'etoile:</h2> <h2><Rating initialValue={etab?.nb_etoile} readonly={true} /></h2>
      </div>
      
   {etab.heure_ouverture&& <h2> Heure d'ouverture:{etab.heure_ouverture}</h2> }
     
    
    <div className="aaaaaa">
      <div className="bbbbb">
        
        {etab.email&&<><h3>Email:</h3> <h3>{etab.email}</h3></>}
      </div>
      {etab.telephone && (
        <div className="bbbbb">
          <h3>Telephone:</h3> <h3>{etab.telephone}</h3>
        </div>
      )}
    </div>
    <div className="bbbbb">
      <h3>Adresse:</h3>{" "}
      <h3>
        {etab.adress.ville},{etab.adress.rue}
      </h3>
    </div>
    {etab.facebook && <a href={etab.facebook}>lien de l'etablissement</a>}
    <img src={etab.logo} alt="logo" />
    {etab.description ? (
      <>
        <h3>Description</h3>
        <p>{etab.description}</p>
      </>
    ) : null}

    <Comment sett={sett} t={t} x={"hotel"} id={etab._id} />
    {etab.Comments
      ? etab.Comments.map((x) => <Listcommet comments={x} id={etab._id}  type={"hotel"} sett={sett} t={t} />)
      : null}
  </div>
  )
}

export default Hotel