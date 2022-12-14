
import './App.css';
import { Routes, Route } from "react-router-dom";
import Footer from './component/Footer'
import Food_and_Drink from './Pages/Foood&Drink/Food_and_Drink';
import Vie_Nocturne from './Pages/vie_nocturne/Vie_Nocturne';
import Beach_bars from './Pages/vie_nocturne/Beach_bars'
import Lounges_bars from './Pages/vie_nocturne/Lounges_bars'
import Pool_bars from './Pages/vie_nocturne/Pool_bars'
import Boites_nuit from './Pages/vie_nocturne/Boites_nuit'
import Accuiel from './Pages/Accuiel'
import All_events from './Pages/Evenements/All_events'
import Hotels from './Pages/hotel/Hotels'
import Grand_hotel from './Pages/hotel/Grand_hotel'
import Maison_hote from './Pages/hotel/Maison_hote'
import Hotel_ville from './Pages/hotel/Hotel_ville'
import Autre from './Pages/autres/Autre'
import Clubs from './Pages/autres/Clubs'
import Musees from './Pages/autres/Musees'
import Agence_voyage from './Pages/autres/Agence_voyage'
import Aire_pique_nique from './Pages/autres/Aire_pique_nique'
import Navigation from './component/Navigation';
import { getallEtab } from "./redux/EtabSlice";
import { getallHotel } from "./redux/HotelSlice";
import { getallresto } from "./redux/RestoSlice";



import Soirees from './Pages/Evenements/Soirees';
import Camping from './Pages/Evenements/Camping';
import Randonnees from './Pages/Evenements/Randonnees';
import Expositons from './Pages/Evenements/Expositons';
import Autre_event from './Pages/Evenements/Autre_event';
import Resto from './Pages/Foood&Drink/Resto'
import Fast_food from './Pages/Foood&Drink/Fast_food'
import Salon_de_the from './Pages/Foood&Drink/Salon_de_the'
import Patisserie from './Pages/Foood&Drink/Patisserie'
import Dashbord from './Pages/dashboard-admin/Dashbord';
import Profile from './Pages/dashboard-admin/Profile';
import G_events from './Pages/dashboard-admin/G_events';
import G_etab from './Pages/dashboard-admin/G_etab';
import G_users from './Pages/dashboard-admin/G_users';
import G_demandes from './Pages/dashboard-admin/G_demandes';
import { useDispatch } from 'react-redux';
import { useEffect,useState } from 'react';
import { getuser, UserCurrent } from './redux/UserSlice';
import G_demandes_user from './Pages/dashboard-admin/G_demandes_user';
import Signup from './component/Signup/Signup';
import PrivateRoute from './route/PrivateRoute';
import Etab from './Pages/autres/Etab';
import Hotel from './Pages/hotel/Hotel';
import Event from './Pages/Evenements/Event';
import Rest from './Pages/Foood&Drink/Rest';
import { getallEvent } from './redux/EventSlice';
function App() {
  const isAuth = localStorage.getItem('token');
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuth)
      dispatch(UserCurrent());
  }
    , [])
    const [t, sett] = useState(false)
    useEffect(() => {
      dispatch(getallresto());
      dispatch(getallHotel());
      dispatch(getallEvent());
      dispatch(getallEtab());
      dispatch(getuser());
    }, [t]);

  return (
    <div className="App">
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/" element={<Accuiel />} />
        /******************les Routes de Autre*********************/
          <Route path="/Autres" element={<Autre />} />
          <Route path="/Autres/clubs" element={<Clubs />} />
          <Route path="/Autres/agence_voyage" element={<Agence_voyage />} />

          <Route path="/Autres/musees" element={<Musees />} />
          <Route path="/Autres/aire_pique_nique" element={<Aire_pique_nique />} />
          <Route path="/Autres/:id" element={<Etab sett={sett} t={t} />} />

          / ******************les Routes de Hotel*********************/
          <Route path="/Hotel" element={<Hotels />} />
          <Route path="/Hotel/grand hotel" element={<Grand_hotel />} />
          <Route path="/Hotel/hotel de ville" element={<Hotel_ville />} />
          <Route path="/Hotel/maison d'hote" element={<Maison_hote />} />
          <Route path="/hotel/:id" element={<Hotel sett={sett} t={t}/>} />
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
          <Route path="/Restaurants/Restaurant/:id" element={<Rest sett={sett} t={t}/>} />
        // ******************les Routes de Evenements*********************//
          <Route path="/Evenements" element={<All_events />} />
          
          <Route path="/Evenements/Soirees" element={<Soirees />} />
          <Route path="/Evenements/Camping" element={<Camping />} />
          <Route path="/Evenements/Randonnees" element={<Randonnees />} />
          <Route path="/Evenements/Expositions" element={<Expositons />} />
          <Route path="/Evenements/Autres" element={<Autre_event />} />
          <Route path="/Evenements/:id" element={<Event sett={sett} t={t} />}/>
         /****************************routes dashboard******************** */
         <Route element={<PrivateRoute/>}>
          <Route path="/dashboard" element={<Dashbord />} >
            <Route path="/dashboard/profile" element={<Profile sett={sett} t={t} />} />
            <Route path="/dashboard/gestion-etab" element={<G_etab sett={sett} t={t} />} />
            <Route path="/dashboard/gestion-event" element={<G_events sett={sett} t={t} />} />
            <Route path="/dashboard/gestion-users" element={<G_users sett={sett} t={t} />} />
            <Route path="/dashboard/gestion-demandes" element={<G_demandes sett={sett} t={t} />} />
            <Route path="/dashboard/gestion-demandes-user" element={<G_demandes_user sett={sett} t={t} />} />
            
          </Route>
          </Route>
          <Route path="/signup" element={<Signup />} />

        </Routes>
      </div>
      <Footer />
    </div>


  );
}

export default App;
