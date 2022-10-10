import React from "react";
import { useLocation } from "react-router-dom";
import Comment from "../../component/commentaire/Comment";
import Listcommet from "../../component/commentaire/Listcommet";
import "../../styles/info_etablissement.css";

const Rest = ({sett,t}) => {
  const location = useLocation();
  const etab = location.state.etab;
  return (
    <div className="info_etab">
      <h1>{etab.name}</h1>

      {etab.heure_ouverture && (
        <h2> Heure d'ouverture:{etab.heure_ouverture}</h2>
      )}

      <div className="aaaaaa">
        <div className="bbbbb">
          {etab.email && (
            <>
              <h3>Email:</h3> <h3>{etab.email}</h3>
            </>
          )}
        </div>
        {etab.telephone && (
          <div className="bbbbb">
            <h3>Telephone:</h3> <h3>{etab.telephone}</h3>
          </div>
        )}
      </div>
      <div className="bbbbb">
        <h3>Adresse:</h3>
        <h3>
          {etab.adress.ville},{etab.adress.rue}
        </h3>
      </div>
      <div className="bbbbb">
        <h3>Alcool:</h3>
        <h3>{etab.alcool}</h3>
      </div>
      <div className="bbbbb">
        <h3>Specialite:</h3>
        <h3>{etab.specialite}</h3>
      </div>
      {etab.facebook && <a href={etab.facebook}>lien de l'etablissement</a>}
      <img src={etab.logo} alt="logo" />
      {etab.description ? (
        <>
          <h4>Description</h4>
          <p>{etab.description}</p>
        </>
      ) : null}

      <Comment sett={sett} t={t} x={"resto"} id={etab._id} />
      {etab.Comments
        ? etab.Comments.map((x) => <Listcommet comments={x} id={etab._id}  type={"resto"} sett={sett} t={t}/>)
        : null}
    </div>
  );
};

export default Rest;
