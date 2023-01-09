import React, { useState } from 'react';
import "./index.css";

import LoginLogo from "../../img/images/logo.png";
import UserIcon from "../../img/images/01.svg";
import PassIcon from "../../img/images/02.svg";
import FacebookIcon from "../../img/images/07-invert.png";
import GIcon from "../../img/images/06.svg";
import MailIcon from "../../img/images/03-1.png";

const loginForm = () => (<div className="loginBody">
   <form className="login__form">
      <div className="form__login">
         <input className="login__input" type="text" placeholder="Phone number  |  E-mail  |  Gamertag" />
         <img src={UserIcon} alt="" />
      </div>
      <div className="form__password">
         <input className="password__input" type="text" placeholder="* * * * * * * *" />
         <img src={PassIcon} alt="" />
      </div>
      <input className="form__submit" type="submit" value="Log in" />
      <button className="form__question">Forgot password?</button>
   </form>
   <div className="login__login-with">
      <p className="login-with__title">Login with</p>
      <p className="login-with__decoration-1"></p>
      <p className="login-with__facebook">
         <img src={FacebookIcon} alt="facebook" widtn="25" height="36" />
      </p>
      <p className="login-with__decoration-2"></p>
      <p className="login-with__google">
         <img src={GIcon} alt="google" widtn="25" height="36" />
      </p>
   </div>
</div>);
const signUpForm = () => (<div className="signupBody">
   <form className="login__form">
      <div className="form__login">
         <input className="login__input login__input-email" type="text" placeholder="Enter your email" />
         <img src={MailIcon} alt="" widtn="15" height="12" />
      </div>
      <div className="form__password">
         <input className="password__input" type="text" placeholder="* * * * * * * *" />
         <img src={PassIcon} alt="" />
      </div>
      <input className="form__submit" type="submit" value="Sign Up" />
   </form>
   <div className="login__login-with">
      <p className="login-with__title">Create an account with</p>
      <p className="login-with__facebook">
         <img src={FacebookIcon} alt="facebook" widtn="25" height="36" />
      </p>
      <p className="login-with__decoration-2"></p>
      <p className="login-with__google">
         <img src={GIcon} alt="google" widtn="25" height="36" />
      </p>
   </div>
   <div className="checkboxes">
      <div className="checkboxes__checkbox">
         <input type="checkbox" id="checkbox1" /><label htmlFor='checkbox1' className="checkboxes__label">I have read and agree with the Terms of Use, Privacy Policy and Cookie Policy</label>
      </div>
      <div className="checkboxes__checkbox">
         <input type="checkbox" id="checkbox2" /><label htmlFor='checkbox2' className="checkboxes__label">I hereby give my consent to Aurora Gaming OÜ to use my email to send me marketing and ads materials related to Aurora Gaming OÜ and its partners' products and services.</label>
      </div>
   </div>
</div>);


const Login = (props) => {
   const [loginState, setLoginState] = useState(true);

   const toggleForm = () => { setLoginState(!loginState) };

   return (
      <div>
         <div className="login-logo">
            <img
               className="login-logo__image"
               src={LoginLogo}
               alt="esports ranking africa"
            />
         </div>
         <div className="title">
            <h2 className="title__text">Largest gaming platform in Africa</h2>
         </div>
         <div className="login">
            <div className="login__login-and-sign-up">
               <div className={`login-and-sign-up__login  ${loginState ? "login-and-sign-up__active" : ""}`}>
                  <p className="login__text" onClick={toggleForm}>Login</p>
                  <div className="login__decoration"></div>
               </div>
               <div className={`login-and-sign-up__sign-up ${!loginState ? "login-and-sign-up__active" : ""}`}>
                  <p className="sign-up__text" onClick={toggleForm}>Sign Up</p>
                  <div className="sign-up__decoration"></div>
               </div>
            </div>
            {loginState ? loginForm() : signUpForm()}
         </div>
         <div className="footer">
         </div>
      </div>
   );
};

export default Login;
