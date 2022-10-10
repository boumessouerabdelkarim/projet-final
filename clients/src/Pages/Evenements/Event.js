import React from "react";
import { useLocation } from "react-router-dom";
import Comment from "../../component/commentaire/Comment";
import Listcommet from "../../component/commentaire/Listcommet";
import "../../styles/info_etablissement.css";

const Event = ({sett,t}) => {
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }
  const location = useLocation();
  const etab = location.state.etab;
  return (
    <div className="info_etab">
      <h1>{etab.name}</h1>
      <h2>
        A partir de {formatDate(etab.date_debut)} jusqu'à
        {formatDate(etab.date_fin)}
      </h2>
      <div className="aaaaaa">
        <div className="bbbbb">
          <h3>Organiser par:</h3> <h3>{etab.organization}</h3>
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
      {etab.facebook && <a href={etab.facebook}>lien de l'evenement</a>}
      <img src={etab.logo} alt="logo" />
      {etab.description ? (
        <>
          <h4>Détails de l'événement</h4>
          <p>{etab.description}</p>
        </>
      ) : null}

      <Comment  sett={sett} t={t} x={"event"} id={etab._id} />
      {etab.Comments
        ? etab.Comments.map((x) => <Listcommet comments={x} id={etab._id}  type={"event"} sett={sett} t={t}/>)
        : null}
    </div>
  );
};

export default Event;
