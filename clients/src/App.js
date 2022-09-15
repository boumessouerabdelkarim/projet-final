
import './App.css';
import { Routes, Route } from "react-router-dom";
import Food_and_Drink from './Pages/Foood&Drink/Food_and_Drink';
import Vie_Nocturne from './Pages/vie_nocturne/Vie_Nocturne';
import Beach_bars from  './Pages/vie_nocturne/Beach_bars'
import Lounges_bars from './Pages/vie_nocturne/Lounges_bars'
import Pool_bars from './Pages/vie_nocturne/Pool_bars'
import Boites_nuit from './Pages/vie_nocturne/Boites_nuit'
import Accuiel from './Pages/Accuiel'
import Evenements from './Pages/Evenements/Evenements'
import Hotels from './Pages/hotel/Hotels'
import Grand_hotel from './Pages/hotel/Grand_hotel'
import Maison_hote from './Pages/hotel/Maison_hote'
import Hotel_ville from './Pages/hotel/Hotel_ville'
import Autre from './Pages/Autre'
import Navigation from './component/Navigation';


import All_events from './Pages/Evenements/All_events';
import Soirees from './Pages/Evenements/Soirees';
import Camping from './Pages/Evenements/Camping';
import Randonnees from './Pages/Evenements/Randonnees';
import Expositons from './Pages/Evenements/Expositons';
import Autre_event from './Pages/Evenements/Autre_event';
import Resto from './Pages/Foood&Drink/Resto'
import Fast_food from './Pages/Foood&Drink/Fast_food'
import Salon_de_the from './Pages/Foood&Drink/Salon_de_the'
import Patisserie from './Pages/Foood&Drink/Patisserie'
function App() {
  return (
    <div className="App">
      <Navigation/>
      <div className="container">
      <Routes>
        <Route path="/" element={ <Accuiel/>} />
        /******************les Routes de Autre*********************/
        <Route path="/Autres" element={<Autre />} />
        
        / ******************les Routes de Hotel*********************/
        <Route path="/Hotel" element={<Hotels />} />
        <Route path="/Hotel/grand hotel" element={<Grand_hotel />} />
        <Route path="/Hotel/hotel de ville" element={<Hotel_ville />} />
        <Route path="/Hotel/maison d'hote" element={<Maison_hote />} />
        // ******************les Routes de vie NOCTURNE*********************//
        <Route path="/Restaurants/vie_nocturne" element={<Vie_Nocturne />} />
        <Route path="/Restaurants/vie_nocturne/Lounges_bars" element={<Lounges_bars />} />
        <Route path="/Restaurants/vie_nocturne/Beach_bars" element={<Beach_bars />} />
        <Route path="/Restaurants/vie_nocturne/Pool_bars" element={<Pool_bars />} />
        <Route path="/Restaurants/vie_nocturne/Boites_de_nuit" element={<Boites_nuit />} />
        // ******************les Routes de Restaurant*********************//
        <Route path="/Restaurants/Restaurant" element={<Food_and_Drink />} />
        <Route path="/Restaurants/Restaurant/resto" element={<Resto />} />
        <Route path="/Restaurants/Restaurant/fast_food" element={<Fast_food />} />
        <Route path="/Restaurants/Restaurant/salon_de_the" element={<Salon_de_the />} />
        <Route path="/Restaurants/Restaurant/patisserie" element={<Patisserie />} />
        // ******************les Routes de Evenements*********************//
        <Route path="/Evenements" element={<Evenements />} />
        <Route path="/Evenements/Tous_les_enenements" element={<All_events />} />
        <Route path="/Evenements/Soirees" element={<Soirees />} />
        <Route path="/Evenements/Camping" element={<Camping />} />
        <Route path="/Evenements/Randonnees" element={<Randonnees />} />
        <Route path="/Evenements/Expositions" element={<Expositons />} />
        <Route path="/Evenements/Autres" element={<Autre_event />} />
       
      
      </Routes>
      </div>
    
    </div>
    
    
  );
}

export default App;