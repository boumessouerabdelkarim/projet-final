import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Bar_search from "../../component/Bar_search";
import Card from "../../component/Card";
import { getallresto } from "../../redux/RestoSlice";
import "../accuiel.css";

function Food_and_Drink() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallresto());
  }, []);
  const restaurant = useSelector((state) => state.resto.restos);
  return (
    <div>
      
      <div className="desc_site">
        <h1>Restaurants en Djerba</h1>
        <p>
          
          Vous aimez manger dehors mais vous ne savez pas où trouver un bon
          restaurant ?
        </p>
        <p>
          Parce qu'un orgasme culinaire est la jouissance même de la vie,
          kharja vous offre la liste complète des restaurants en Djerba.<br/>Prix,
          budgets, menus, avis, itinéraires... sont aujourd'hui disponibles sur
          la plateforme kharja. Pour un bon plan de sortie en<br/> restaurant
          réussie, les informations concernant les restaurants en djerba sont
          mises à jour en permanence sur kharja.
        </p>
      </div>
      {restaurant
        ? restaurant
            .filter((data) =>
              data.type.includes("restaurant" && "fast food" && "salon de the ")
            )
            .map((el, i) => <Card etab={el} key={i} x={"resto"} />)
        : null}
    </div>
  );
}

export default Food_and_Drink;
