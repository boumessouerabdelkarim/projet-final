import React, { useEffect, useState } from "react";
import { BiHotel, BiRestaurant } from "react-icons/bi";
import { MdOutlineOtherHouses } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";


import Card_etab from "../../component/Card_etab";
import ReactLoading from "react-loading";
import "./tab.css";
import Modal_ajout from "../../component/Modal_ajout";




const G_etab = ({sett,t}) => {
  const [toggleState, setToggleState] = useState(1);
  const [show1, setshow1] = useState(false);
  const [rest, setrest] = useState("all");
  const [hot, sethot] = useState("all");
  const [aut, setaut] = useState("all")
  const [x, setx] = useState(null);
  const dispatch = useDispatch();

  const restaurant = useSelector((state) => state.resto.restos);

  const hotels = useSelector((state) => state.hotel.hotels);
  const autre = useSelector((state) => state.etab.etabs);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="container-tabs">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          <BiRestaurant /> Restaurants
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          <BiHotel /> Hotels
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          <MdOutlineOtherHouses /> Autres
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <button
            className="add_etab"
            onClick={() => {
              setshow1(!show1);
              setx("resto");
            }}
          >
            Ajouter resto{" "}
          </button>
          <h1 className=" title_etab">ALL RESTAURANTS</h1>
          <div className="filtre">
            <button
              type="button"
              className="myButton"
              onClick={() => setrest("all")}
            >
              Tous
            </button>
            <button
              type="button"
              className="myButton"
              onClick={() => setrest("restaurant")}
            >
              Restaurant
            </button>
            <button
              type="button"
              className="myButton"
              onClick={() => setrest("fast food")}
            >
              Fast food
            </button>
            <button
              type="button"
              className="myButton"
              onClick={() => setrest("salon de the ")}
            >
              Salon de the
            </button>
            <button
              type="button"
              className="myButton"
              onClick={() => setrest("vie necturne")}
            >
              Vie necturne
            </button>
          </div>

          {restaurant ? (
            restaurant
              .filter((data) =>
                rest === "all"
                  ? data
                  : rest === "restaurant"
                  ? data.type.includes("restaurant")
                  : rest === "fast food"
                  ? data.type.includes("fast food")
                  : rest === "salon de the "
                  ? data.type.includes("salon de the ")
                  : data.type.includes("lounges bars"||"beach bars"||"pool bars"||"boite de nuits")
              )
              .map((el, i) => <Card_etab sett={sett} t={t} etab={el} x={"resto"} key={i} />)
          ) : (
            <h2 style={{ marginTop: 150 }}>
              {" "}
              <ReactLoading
                type={"spokes"}
                color={"blue"}
                height={50}
                width={50}
              />{" "}
            </h2>
          )}
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <button
            className="add_etab"
            onClick={() => {
              setshow1(!show1);
              setx("hotel");
            }}
          >
            Ajouter hotel{" "}
          </button>

          <h1 className=" title_etab">ALL HOTELS</h1>
          <div className="filtre">
            <button
              type="button"
              className="myButton"
              onClick={() => sethot("all")}
            >
              Tous
            </button>
            <button
              type="button"
              className="myButton"
              onClick={() => sethot("grand hotel")}
            >
              Grand hotels
            </button>
            <button
              type="button"
              className="myButton"
              onClick={() => sethot("hotel de ville")}
            >
              Hotel de ville
            </button>
            <button
              type="button"
              className="myButton"
              onClick={() => sethot("maison d'hote")}
            >
              Maison d'hote
            </button>
          </div>
          {hotels ? (
            hotels
              .filter((data) =>
                hot === "all" ? data : data.type.includes(hot)
              )
              .map((el, i) => <Card_etab sett={sett} t={t} etab={el} x={"hotel"} key={i} />)
          ) : (
            <h2 style={{ marginTop: 150 }}>
              {" "}
              <ReactLoading
                type={"spokes"}
                color={"blue"}
                height={50}
                width={50}
              />{" "}
            </h2>
          )}
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <button
            className="add_etab"
            onClick={() => {
              setshow1(!show1);
              setx("etab");
            }}
          >
            Ajouter etab{" "}
          </button>
          <h1 className=" title_etab"> AUTRE ETABLISEMENT </h1>
          <div className="filtre">
            <button
              type="button"
              className="myButton"
              onClick={() => setaut("all")}
            >
              Tous
            </button>
            <button
              type="button"
              className="myButton"
              onClick={() => setaut("clubs")}
            >
              Clubs
            </button>
            <button
              type="button"
              className="myButton"
              onClick={() => setaut("agence de voyage")}
            >
             Agence de voyages
            </button>
            <button
              type="button"
              className="myButton"
              onClick={() => setaut("musees")}
            >
              Musees
            </button>
            <button
              type="button"
              className="myButton"
              onClick={() => setaut("emplacement a visite")}
            >
             Emplacement a visite
            </button>
          </div>
          {autre ? (
            autre.filter((data) =>
            aut === "all" ? data : data.type.includes(aut)
          )
          .map((el, i) => <Card_etab sett={sett} t={t} etab={el} x={"etab"} key={i} />)
          ) : (
            <h2 style={{ marginTop: 150 }}>
              {" "}
              <ReactLoading
                type={"spokes"}
                color={"blue"}
                height={50}
                width={50}
              />{" "}
            </h2>
          )}
        </div>
      </div>
      {show1 ? <Modal_ajout setshow1={setshow1} sett={sett} t={t} show1={show1} x={x} /> : null}
    </div>
  );
};

export default G_etab;
