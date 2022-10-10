import React, { useEffect, useState } from "react";
import { AiTwotoneFileText } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Card_dem from "../../component/Card_dem";
import Modal_dem from "../../component/Modal_dem";
import { getallDem } from "../../redux/DemSlice";
import "./tab.css";
const G_demandes_user = () => {
  const [toggleState, setToggleState] = useState(1);
  const [show2, setshow2] = useState(false);
  const [x2, setx2] = useState(null);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallDem());
  }, []);
  const dems = useSelector((state) => state.dem?.dems);
  console.log(dems);
  const current = useSelector((state) => state.user?.user);
  return (
    <div className="container-tabs">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          <AiTwotoneFileText /> D_etablissements
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          <AiTwotoneFileText /> D_evenements
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <button
            className="add_etab"
            style={{ height: "3rem", marginLeft: "30%" }}
            onClick={() => {
              setshow2(!show2);
              setx2("etablissement");
            }}
          >
            ajouter une nouvelle demande
          </button>
          <h1 className=" title_etab">MES DEMANDES D'AJOUT ETABLISSEMENT</h1>
          <div className="filtre_dem">
            {dems ? (
              dems
                ?.filter((data) => data?.demande_type.includes("etablissement"))
                .filter((data) => data?.User_id.includes(current?._id))
                .map((data, i) => <Card_dem dem={data} key={i} />)
            ) : (
              <h1>Aucun demendes pour l'instant</h1>
            )}
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <button
            className="add_etab"
            onClick={() => {
              setshow2(!show2);
              setx2("evenement");
            }}
            style={{ height: "3rem", marginLeft: "30%" }}
          >
            ajouter une nouvelle demande
          </button>
          <h1 className=" title_etab">MES DEMANDES D'AJOUT EVENEMENT</h1>

          <div className="filtre_dem">
            {dems ? (
              dems
              ?.filter((data) => data?.demande_type.includes("evenement"))
              .filter((data) => data?.User_id.includes(current?._id))
              .map((data, i) => <Card_dem dem={data} key={i} />)
            ) : (
              <h1>Aucun demendes pour l'instant</h1>
            )}
          </div>
        </div>
        {show2 ? <Modal_dem setshow2={setshow2} show2={show2} x2={x2} /> : null}
      </div>
    </div>
  );
};

export default G_demandes_user;
