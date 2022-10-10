import React from "react";
import '../styles/bar_search.css'
const Bar_search = () => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Mot clé"
        name="motclesidebar"
        id="motclesidebar"
        autoComplete="off"
      />
     
      <div className="form-group">
         <span >Region:</span>
        <select id="region">
          <option value="Houmet souk">Houmet souk</option>
          <option value="Ajim">Ajim</option>
          <option value="Midoun">Midoun</option>
          <option value="Zone toristique">Zone toristique</option>
        </select>
      </div>
      
      
      <div className="form-group">
         <span >Cuisines:</span><select id="cuisine">
          <option value="Tunisienne">Tunisienne</option>
          <option value="Française">Française</option>
          <option value="Poissons et fruits du mer">
            Poissons et fruits du mer
          </option>
          <option value="italien">italien</option>
          <option value="Fast food">fast food</option>
          <option value="Pizza">italien</option>
        </select></div>
        <div className="form-group">
         <span >Alcool:</span>
          <select id="Alcool">
            <option value="true">oui</option>
            <option value="false">non</option>
          </select>
        </div>
        <button>
          Search
        </button>
      </div>
    
  );
};

export default Bar_search;
