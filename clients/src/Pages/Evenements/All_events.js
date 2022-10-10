import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../component/Card";
import { getallEvent } from "../../redux/EventSlice";
import "../accuiel.css"

const All_events = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallEvent());
  }, []);
  const events = useSelector((state) => state.event.events);
  return (
    <div>
      <div className="desc_site"
        style={{
          
          margin: "5rem 5rem  2rem 5rem",
         
          height: "10rem",
        }}
      >
        <h1>Tous les bons plans pour sortir en Djerba</h1>
        <p>
          Où sortir en Djerba : l'agenda des événements :
          <span style={{ color: "green" }}>soirées</span>,
          <span style={{ color: "green" }}>randonnées</span>,
          <span style={{ color: "green" }}>camping</span>,
          <span style={{ color: "green" }}>expositions</span>,
          <span style={{ color: "green" }}>spectacles</span> et plus encore. <br />
          Le Guide , l'adresse pour sortir en Tunisie : un bar, un restaurant,
          un musée, un théâtre, tous les événements pour <br /> sortir ce soir, demain
          ou ce week-end.
        </p>
      </div>
      {events
        ? events.map((el, i) => <Card etab={el} key={i} x={"event"} />)
        : null}
    </div>
  );
};

export default All_events;
