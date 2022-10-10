import React, { useState } from "react";

import {useDispatch} from 'react-redux'
import { SignIn, UserRegister } from "../../redux/UserSlice";
import "./Signup.css";
const Signup = () => {
  const isAuth = localStorage.getItem("token");
 const [user, setuser] = useState({
  name:"",
  lastName:"",
  email:"",
  password:"",
 })
 const  [login, setlogin] = useState({
email: "",
password: "",
 })
 const dispatch =useDispatch();

  return (
    <div>
      <div className="login-wrap">
        <div className="login-html">
          <input
            id="tab-1"
            type="radio"
            name="tab"
            className="sign-in"
            defaultChecked
          />
          <label htmlFor="tab-1" className="tab">
            Sign In
          </label>
          <input id="tab-2" type="radio" name="tab" className="sign-up" />
          <label htmlFor="tab-2" className="tab">
            Sign Up
          </label>
          {/* Login Form */}
          <div className="login-form">
            <div className="sign-in-htm">
              <div className="group">
                <label htmlFor="user" className="label">
                  Email
                </label>
                <input
                  id="user"
                  type="text"
                  className="input"
                 onChange={(e)=>setlogin({...login,email:e.target.value})}
                />
              </div>{" "}
              <div className="group">
                <label htmlFor="pass" className="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  className="input"
                  data-type="password"
                 onChange={(e)=>setlogin({...login, password:e.target.value})}
                />
              </div>
              
              <div className="group">
                <input
                  type="submit"
                  className="button"
                  defaultValue="Sign In"
                  onClick={()=>{dispatch(SignIn(login));setTimeout(() => {
                    window.location.reload()
                  }, 1200);} }
                />
              </div>
              {isAuth?window.location = "/":null}
              
            </div>
            {/* sign up part */}
            <div className="sign-up-htm">
              <div className="group">
                <label htmlFor="user" className="label">
                  Username
                </label>
                <input
                  id="user"
                  type="text"
                  className="input"
                  onChange={(e) => setuser({...user,name:e.target.value})}
                />
              </div>
              <div className="group">
                <label htmlFor="lastName" className="label">
                  lastName
                </label>
                <input
                  id="user"
                  type="text"
                  className="input"
                  onChange={(e) => setuser({...user,lastName:e.target.value})}
                />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">
                  Email Address
                </label>
                <input
                  id="pass"
                  type="text"
                  className="input"
                  onChange={(e) => setuser({...user,email:e.target.value})}
                />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  className="input"
                  data-type="password"
                  onChange={(e) => setuser({...user,password:e.target.value})}
                />
              </div>

              <div className="group">
                <input
                  type="submit"
                  className="button"
                  defaultValue="Sign Up"
                 onClick={() =>{dispatch(UserRegister(user));setTimeout(() => {
                  window.location = "/"
                }, 1200);}}
                />
              </div>
              <div className="hr" />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
