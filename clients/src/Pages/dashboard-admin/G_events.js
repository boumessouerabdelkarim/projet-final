import React, { useEffect, useState } from 'react'
import './tab.css'
import { BsFillCalendarEventFill} from "react-icons/bs"
import {IoIosAddCircleOutline} from "react-icons/io"
import { useDispatch, useSelector } from 'react-redux'
import { getallEvent } from '../../redux/EventSlice'
import Card_etab from '../../component/Card_etab'
import ReactLoading from "react-loading";
const G_events = () => {
  const [toggleState, setToggleState] = useState(1);
const dispatch=useDispatch()
useEffect(() => {
  dispatch(getallEvent())
  }
, [])
const evenements =useSelector((state)=> state.event.events)

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
        <BsFillCalendarEventFill/>Tous les evenements
      </button>
      <button
        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(2)}
      >
        <IoIosAddCircleOutline/> ajouter event 
      </button>
     
    </div>

    <div className="content-tabs">
      <div
        className={toggleState === 1 ? "content  active-content" : "content"}
      >
       <h1>ALL EVENEMENTS</h1>
        {evenements?
        evenements.map((el,i)=><Card_etab etab={el}  key={i}/>):
        <h2 style={{marginTop:150}}>  <ReactLoading type={"spokes"} color={"blue"} height={50} width={50} /> </h2>}
     
      </div>

      <div
        className={toggleState === 2 ? "content  active-content" : "content"}
      >
        <h2>Content 2</h2>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          voluptatum qui adipisci.
        </p>
      </div>

     
    </div>
  </div>
  )
}

export default G_events