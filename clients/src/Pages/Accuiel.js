import React from "react";
import './accuiel.css'
const Accuiel = () => {
  return (
    <div>
      <video
        src={process.env.PUBLIC_URL + "/Trailer Djerba Island.mp4"}
        autoPlay={true}
        loop={true}
        muted={true}
        className="video"
      ></video>
      <div className="desc_site">
        <h1>Kharja – Guide de sorties en Djerba</h1>
        <p>
          <span style={{color:"#808080"}}>
            Vous aimez manger dehors mais vous ne savez pas où trouver un bon
            restaurant ?
          </span >
          <br />
          <span style={{color:"#808080"}}>Vous aimez sortir mais vous ne savez pas où aller ?</span>
        </p>
        <p>
          Kharja est le guide de sorties en Djerba qui réunit dans un seul
          site les meilleurs endroits à visiter en Djerba, les événements<br/>
          culturels, les soirées, les sorties cinéma, les excursions et
          randonnées, les voyages ou encore les bons plans culinaires. Ne perdez<br/>
          plus votre temps à chercher dans plusieurs sites les bons plans de
          sortie près de chez vous et ne ratez plus aucun événement!<br/> Kharja
          est un véritable guide pour les Tunisiens qui regroupe toutes les
          bonnes adresses pour passer un bon moment en famille<br/> ou entre amis.
        </p>
      </div>
    </div>
  );
};

export default Accuiel;
