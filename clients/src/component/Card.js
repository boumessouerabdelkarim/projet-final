import React from "react";
import '../styles/card.css'
const Card = () => {
  return (
    <div className="card">
      
        <img src="https://www.kharjet.tn/wp-content/uploads/2020/05/PLAN-B-8.jpg" alt="image" />
      
      <div className="content">
        <h1>title</h1>
        <div className="info">
          <h2>Adress:</h2>
          <h3>hommet souk</h3>
        </div>
        
        <div className="info">
          <h2>specialite:</h2>
          <h3>griades</h3>
        </div>
        <div className="info">
          <h2>budget:</h2>
          <h3>8 dt</h3>
        </div>
      </div>
      <div className="menu"></div>
    </div>
  );
};

export default Card;
