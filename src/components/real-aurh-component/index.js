import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FormattedMessage, injectIntl } from "react-intl";
import { API, API_ROUTER } from "../../api";
import logo from '../../img/Logos/logo-lg.53581a3b.png';

import s from './auth.module.scss';

const Auth = (props) => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [countrie, setCountrie] = useState(null);
   const [pass, setPass] = useState('');
   const [statusMessage, setStatusMessage] = useState(false);
   const [textMessage, setTextMessage] = useState();
   const [checkbox1Status, setCheckbox1Status] = useState(false);
   const [checkbox2Status, setCheckbox2Status] = useState(false);

   //auth/registration
   const [registration, seteRgistration] = useState(false);

   //error
   const [err, setErr] = useState(false);

   const [countries, setCountries] = useState([]);

   const history = useHistory();

   useEffect(() => {
      API.request({ ...API_ROUTER.public.getCountriesList })
         .then(res => setCountries(res))
         .catch(err => console.log(err))
   }, [])

   const checkEmailData = (text) => {
      if ((/[a-zA-Z]/.test(text) && text.length > 3) && (text.includes("@") && text.includes("."))) {
         return true;
      } else {
         return false;
      };
   }

   const onSubmitRegistration = () => {

      if (checkEmailData(email) && countrie && name && pass && checkbox1Status) {

         const params = {
            ...API_ROUTER.auth.register,
            data: {
               referral: "UA-12345AA",
               username: email,
               country: countrie,
               firstName: name,
               password: pass,
               psnId: "584d56434p5f",
               gdpr: true,
               marketing: true
            }
         };

         API.request(params, true)
            .then((res) => {
               console.log(res);
               setStatusMessage(true);
               setTextMessage(<FormattedMessage id="authModal.message.registration" tagName="label" />);
            })
            .catch(err => {
               let info = JSON.stringify(err.data.errors)
                  .replace(/{"/, '')
                  .replace(/"}/, '')
                  .replace(/"/, '')
                  .replace(/"/, ' ')
                  .replace(/","/, ' ')
                  .replace(/":"/, ': ');
               setStatusMessage(true);
               setTextMessage(`${err.data.message} ${info}`);
               setTimeout(() => {
                  setStatusMessage(false);
               }, 3000)
            })
      } else setErr(true);
   }
   const onSubmitAuth = () => {

      if (checkEmailData(email) && pass) {

         const params = {
            ...API_ROUTER.auth.logIn,
            data: {
               username: email,
               password: pass,
            }
         };

         API.request(params, true)
            .then((res) => {
               const { token, refreshToken } = res;
               if (token) {
                  window.location.reload();
                  localStorage.setItem("token", token);
                  localStorage.setItem("refreshToken", refreshToken);
                  history.push('/admin/tournaments');
               }

            })
            .catch(err => {
               console.log(err)
               setStatusMessage(true);
               setTextMessage(err.data?.message);
               setStatusMessage(true);
               setTimeout(() => {
                  setStatusMessage(false);
               }, 3000)
            })
      } else setErr(true);
   }
   const showCountries = (value) => {
      let optionArray = [<option selected>...</option>];
      for (let key in value) {
         optionArray.push(<option value={key}>{value[key]}</option>)
      }
      return optionArray;
   }

   const onChangeValue = (value, fn) => {
      fn(value.target.value);
      setErr(false);
   }

   return (
      <div>
         {statusMessage ? <div className={s.message}>{textMessage}</div> :
            <div>

               {/* <div className={s.title}>
                  <FormattedMessage id="authModal.signUp.title" tagName="label" />
               </div> */}
               {/* <div className={s.subtitle}>
                  <FormattedMessage id="authModal.signUp.subtitle" tagName="label" />
               </div> */}

               {/* {registration && <div className={s.inputContainer}>
                  <FormattedMessage id="global.forms.labels.firstName" tagName="label" />
                  <span className={err ? `${s.err}` : false} ><input type="text" value={name} onChange={(e) => onChangeValue(e, setName)} /></span>
               </div>} */}

               <div className={s.imgLogoContainer}>
                  <img src={logo} alt="" />
               </div>

               <div className={s.inputContainer}>
                  <FormattedMessage id="global.forms.labels.email" tagName="label" />
                  <span className={err ? `${s.err}` : false} ><input type="text" value={email} onChange={(e) => onChangeValue(e, setEmail)} /></span>
               </div>

               {registration && <div className={s.inputContainer}>
                  <FormattedMessage id="global.forms.labels.country" tagName="label" />
                  <span className={err ? `${s.err}` : false} >
                     <select onChange={(e) => onChangeValue(e, setCountrie)}>
                        {showCountries(countries)}
                     </select>
                  </span>
                  {/* <div className={s.text}>
                     <FormattedMessage id="global.forms.labels.countryName" tagName="label" />
                  </div> */}
               </div>}

               <div className={s.inputContainer}>
                  <FormattedMessage id="global.forms.labels.password" tagName="label" />
                  <span className={err ? `${s.err}` : false} ><input type="password" value={pass} onChange={(e) => onChangeValue(e, setPass)} /></span>
               </div>

               {registration && <div className={s.chexBoxContainer}>
                  <input
                     type="checkbox" checked={checkbox1Status}
                     onClick={() => setCheckbox1Status(!checkbox1Status)}
                  />
                  <span className={s.textContainer}
                     onClick={() => setCheckbox1Status(!checkbox1Status)}
                  >
                     <FormattedMessage
                        id="authModal.signUp.check1.full"
                        tagName="label"
                     />
                  </span>
                  <a target='_blanck' className={s.linkStyle} href='https://app.passport.gg/terms-of-use'>
                     <FormattedMessage
                        id="authModal.signUp.check1.linkTerms"
                        tagName="label"
                     />
                  </a>,
                  <a target='_blanck' className={s.linkStyle} href='https://app.passport.gg/privacy-policy'>
                     <FormattedMessage
                        id="authModal.signUp.check1.linkPrivacy"
                        tagName="label"
                     />
                  </a>,
                  <a target='_blanck' className={s.linkStyle} href='https://app.passport.gg/cookie-policy'>
                     <FormattedMessage
                        id="authModal.signUp.check1.linkCookie"
                        tagName="label"
                     />
                  </a>
                  <FormattedMessage
                     id="authModal.signUp.check1.and"
                     tagName="label"
                  />
                  <a target='_blanck' className={s.linkStyle} href='https://app.passport.gg/rulebook-asia'>
                     <FormattedMessage
                        id="authModal.signUp.check1.linkRulebook"
                        tagName="label"
                     />
                  </a>
               </div>}
               {err ? <div className={s.errText}>
                  <FormattedMessage
                     id="authModal.err.title"
                     tagName="label"
                  />
               </div> : false}

               {registration && <div className={s.chexBoxContainer}>
                  <input
                     type="checkbox" checked={checkbox2Status}
                     onClick={() => setCheckbox2Status(!checkbox2Status)}
                  />
                  <span className={s.textContainer}
                     onClick={() => setCheckbox2Status(!checkbox2Status)}
                  >
                     <FormattedMessage
                        id="authModal.signUp.check2"
                        tagName="label"
                     />
                  </span>
               </div>}

               {/* <div className={s.btnContainer}>
                  <button className={s.btnSwitch}
                     onClick={() => seteRgistration(!registration)}
                  >
                     {registration ? <FormattedMessage id="global.buttons.login" tagName="label" /> : <FormattedMessage id="authModal.signIn.registration" tagName="label" />}
                  </button>
               </div> */}

               {registration && <div className={s.btnContainer}>
                  <button
                     className={err ? `${s.disabledBTN}` : `${s.btnRegister}`}
                     onClick={() => onSubmitRegistration()}
                     disabled={err}
                  ><FormattedMessage id="global.buttons.signUp" tagName="label" /></button>
               </div>}
               {registration || <div className={s.btnContainer}>
                  <button
                     className={err ? `${s.disabledBTN}` : `${s.btnRegister}`}
                     onClick={() => onSubmitAuth()}
                     disabled={err}
                  ><FormattedMessage id="global.buttons.login" tagName="label" /></button>
               </div>}
            </div>
         }
         <div className={s.textAfterButton}>
            <div className={s.linkContainer}>
               <FormattedMessage id="authModal.signIn.text1" tagName="p" />
               <a href="https://admin.passport.gg/contactUs" target="_blank">
                  <FormattedMessage id="authModal.signIn.text1.link1" tagName="p" />
               </a>.
            </div>
            <div className={s.linkContainer}>
               <FormattedMessage id="authModal.signIn.text2" tagName="p" />
               <a href="https://admin.passport.gg/contactUs" target="_blank">
                  <FormattedMessage id="authModal.signIn.text2.link2" tagName="p" />
               </a>.
            </div>
         </div>
      </div >
   )
}
export default Auth;