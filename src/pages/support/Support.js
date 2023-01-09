import React, { useEffect, useState } from "react";
import { transpileModule } from "typescript";
import { FormattedMessage } from "react-intl";
import s from './suport.module.scss';

export default function Support(props) {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [subject, setSubject] = useState('');
   const [text, setText] = useState('');

   const [validateForm, setValidateForm] = useState(false);

   //err
   const totalErr = <FormattedMessage id="support.contactUs.err" tagName="p" />
   const [errName, setErrName] = useState(totalErr);
   const [errEmail, setErrEmail] = useState(totalErr);
   const [errSubject, setErrSubject] = useState(totalErr);
   const [errText, setErrText] = useState(totalErr);

   //touched
   const [touchedName, setTouchedName] = useState(false);
   const [touchedEmail, setTouchedEmail] = useState(false);
   const [touchedSubject, setTouchedSubject] = useState(false);
   const [touchedText, setTouchedText] = useState(false);

   useEffect(() => {
      if (errName || errEmail || errSubject || errText) {
         setValidateForm(false);
      } else {
         setValidateForm(true);
      }
   }, [errName, errEmail, errSubject, errText])

   const onBlurHandler = (e) => {
      switch (e.target.name) {
         case 'name':
            setTouchedName(true);
            break;

         case 'email':
            setTouchedEmail(true);
            break;

         case 'subject':
            setTouchedSubject(true);
            break;

         case 'text':
            setTouchedText(true);
            break;

         default:
            break;
      }
   }

   const onChangeName = (value) => {
      setName(value);
      if (value.length < 3) {
         setErrName(<FormattedMessage id="support.contactUs.errName" tagName="p" />);
      } else {
         setErrName('');
      }
   }
   const onChangeEmail = (value) => {
      setEmail(value);
      const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (value.length > 3) {
         if (!re.test(String(value).toLowerCase())) {
            setErrEmail(<FormattedMessage id="support.contactUs.errEmail" tagName="p" />);
         } else {
            setErrEmail('');
         }
      } else {
         setErrEmail(<FormattedMessage id="support.contactUs.errEmail.too short" tagName="p" />);
      }
   }
   const onChangeSubject = (value) => {
      setSubject(value);
      if (value.length > 0) {
         setErrSubject('');
      } else {
         setErrSubject(totalErr);
      }
   }
   const onChangeText = (value) => {
      setText(value);
      if (value.length > 0) {
         setErrText('');
      } else {
         setErrText(totalErr);
      }
   }

   const send = () => {
      props.setSupportMessage(name, email, subject, text);
      setName('');
      setEmail('');
      setSubject('');
      setText('');
   }

   return (

      <div className={s.supportContainer}>
         <div className={s.contentContainer}>
            <div className={s.titleSupport}>
               <FormattedMessage id="support.contactUs.title" tagName="p" />
            </div>
            <div className={s.inputContainert}>
               <div className={s.titleInput}>
                  <FormattedMessage id="support.contactUs.name" tagName="p" />
               </div>
               <input
                  onBlur={e => onBlurHandler(e)}
                  value={name}
                  type="text"
                  name="name"
                  onChange={(e) => onChangeName(e.target.value)}
                  className={errName && touchedName && s.errInput}
               />
               {(errName && touchedName) && <div className={s.errText}>{errName}</div>}

            </div>
            <div className={s.inputContainert}>
               <div className={s.titleInput}>
                  <FormattedMessage id="support.contactUs.email" tagName="p" />
               </div>
               <input
                  onBlur={(e) => onBlurHandler(e)}
                  value={email}
                  name="email"
                  type="text"
                  onChange={(e) => onChangeEmail(e.target.value)}
                  className={errEmail && touchedEmail && s.errInput}
               />
               {(errEmail && touchedEmail) && <div className={s.errText}>{errEmail}</div>}

            </div>
            <div className={s.inputContainert}>
               <div className={s.titleInput}>
                  <FormattedMessage id="support.contactUs.subject" tagName="p" />
               </div>
               <input
                  onBlur={(e) => onBlurHandler(e)}
                  value={subject}
                  type="text"
                  name="subject"
                  onChange={(e) => onChangeSubject(e.target.value)}
                  className={errSubject && touchedSubject && s.errInput}
               />
               {(errSubject && touchedSubject) && <div className={s.errText}>{errSubject}</div>}

            </div>
            <div className={s.inputContainert}>
               <div className={s.titleInput}>
                  <FormattedMessage id="support.contactUs.subject" tagName="p" />
               </div>
               <textarea
                  onBlur={(e) => onBlurHandler(e)}
                  value={text}
                  name="text"
                  type="text"
                  onChange={(e) => onChangeText(e.target.value)}
                  className={errText && touchedText && s.errInput}
               />
               {(errText && touchedText) && <div className={s.errText}>{errText}</div>}

            </div>
            <button
               className={!validateForm ? `${s.disabledBTN}` : `${s.btnRegister}`}
               onClick={() => send()}
               disabled={!validateForm}
            ><FormattedMessage id="support.contactUs.send" tagName="p" /></button>
         </div>

      </div>

   );
}

