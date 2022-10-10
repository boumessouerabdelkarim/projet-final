import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../component/Card";
import { getallHotel } from "../../redux/HotelSlice";

function Hotels() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallHotel());
  }, []);
  const hotel = useSelector((state) => state.hotel.hotels);
  return (
    <div>
      <div className="desc_site">
        <h1>Les bons plans d'Hôtels en djerba</h1>
        <p>
          Vous aimez passer une belle sejour à Djerba mais vous ne savez pas où
          aller ?
        </p>
        <p>
          Découvrez les maisons d'hôtes incontournables de Hôtel pour passer vos
          vacances ou votre week-end chez vous avant de reprendre le travail<br/> ou
          l'école.Que vous recherchiez un petit hôtel familial, un
          hôtel-restaurant cosy, une maison d'hôtes écologique ou une agréable
          chambre <br/>d'hôtes, profitez de votre séjour dans les maisons d'hôtes les
          plus accueillantes de Hôtel.<br/><br/> Kharja vous conduit vers les
          meilleures adresses du tourisme à djerba.<br/>
        </p>
      </div>
      {hotel
        ? hotel
            .filter((data) =>
              data.type.includes(
                "maison d'hote" || "hotel de ville" || "grand hotel"
              )
            )
            .map((el, i) => <Card etab={el} key={i} x={"hotel"} />)
        : null}
    </div>
  );
}

export default Hotels;
