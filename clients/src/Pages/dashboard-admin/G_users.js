import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FiUserPlus, FiUsers } from 'react-icons/fi';
import './tab.css'
import Card_user from '../../component/Card_user';
import ReactLoading from "react-loading";
import { getuser } from '../../redux/UserSlice';

const G_users = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getuser())},[]
)
  const [toggleState, setToggleState] = useState(1);
  const utlisateurs = useSelector((state) => state.user.users);
  console.log({users:utlisateurs})
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
        <FiUsers/> All users
      </button>
      <button
        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(2)}
      >
        <FiUserPlus/> Add user
      </button>
     
    </div>

    <div className="content-tabs">
      <div
        className={toggleState === 1 ? "content  active-content" : "content"}
      >
        <h1>ALL USERS</h1>
        {utlisateurs?
        utlisateurs.map((el,i)=><Card_user user={el}  key={i}/>):
        <h2 style={{marginTop:150}}>  <ReactLoading type={"spokes"} color={"blue"} height={50} width={50} /> </h2>}
        
      </div>

      <div
        className={toggleState === 2 ? "content  active-content" : "content"}
      >
       <div >

       </div>
      </div>

      
    </div>
  </div>
  )
}

export default G_users