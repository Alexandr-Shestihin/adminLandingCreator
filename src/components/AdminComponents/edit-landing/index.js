import React, { useState, useEffect } from "react";
import s from './EditLandingPage.module.scss';
import Calendar from '../../../comon/Calendar/index';
import { useHistory, useLocation } from "react-router-dom";
import { API, API_ROUTER } from "../../../api/index";

import { FormattedMessage } from "react-intl";
import { useIntl } from "react-intl";

const EditLanding = (props) => {

   const { pathname } = useLocation();
   const megaId = pathname.split('/editLanding/')[1];//выводит id лендинга из URL

   //Запрос данных о лендинге по id
   const [requestSuccess, setRequestSuccess] = useState(false);
   useEffect(() => {
      if (megaId) {
         let params = {
            ...API_ROUTER.landing.getDataLanding,
            pathKeys: {
               landingId: megaId
            }
         };
         API.request(params)
            .then((res) => {
               console.log(res);
               setLandingName(res?.name);
               setDiscription(res?.description);
               setLink(res?.link);
               setDomainName(res?.domain);
               setActiveAtDate(res?.activeAt);
               setEndedAtDate(res?.endedAt);

               setRequestSuccess(true);
            })
            .catch(err => console.log(err))
      }
   }, []);

   //Visible-unVisible
   const [activeAtIsVisible, setActiveAtIsVisible] = useState(false);
   const [endedAtIsVisible, setEndedAtIsVisible] = useState(false);

   //calendar data
   const [activeAtDate, setActiveAtDate] = useState(new Date().toLocaleDateString());
   const [endedAtDate, setEndedAtDate] = useState(new Date().toLocaleDateString());

   //change calendar data
   const handleActiveAtChange = e => setActiveAtDate(e.toLocaleDateString());
   const handleEndedAtChange = e => setEndedAtDate(e.toLocaleDateString());

   //Organizers
   const [organizersArray, setOrganizersArray] = useState(props.organizers);
   const [sponsorsArray, setSponsorsArray] = useState(props.sponsors);
   const [partnersArray, setPartnersArray] = useState(props.partners);

   //name
   const [landingName, setLandingName] = useState('');
   //description
   const [description, setDiscription] = useState('');
   //link
   const [link, setLink] = useState('');
   //domainName
   const [domainName, setDomainName] = useState('');

   //функция, добавляющая input-ы
   const add = (arr, addFn) => {
      const copyArr = JSON.parse(JSON.stringify(arr));
      copyArr.push({
         id: copyArr.length + 1,
         name: `${copyArr[0].name}${copyArr.length + 1}`,
         type: 'file',
         inputAccept: 'image/*',
         title: `${copyArr[0].title}`,
      })
      addFn(copyArr);
   }
   const showUploadBtns = (arr, setArr, nameBtn) => {
      return <div>
         {arr.map((el, i) => <div key={i} className={s.editContainer}>
            <label htmlFor={el.name}>{`${el.title} ${el.id}`}</label>
            <input type={el.type} id={el.name} accept={el.inputAccept} />
         </div>)}
         <button onClick={() => add(arr, setArr)} className={s.addBtn}>
            {nameBtn}
         </button>
      </div>
   }


   const submitDateCreate = (name, description, activeAt, endedAt, link, domain) => {

      props.setFormData(name, description, activeAt, endedAt, link, domain);

      setLandingName('');
      setDiscription('');
      setLink('');
      setDomainName('');
   }

   const submitDateEdit = (name, description, activeAt, endedAt, link, domain, id) => {

      props.updataLandingData(name, description, activeAt, endedAt, link, domain, id);

      setLandingName('');
      setDiscription('');
      setLink('');
      setDomainName('');
   }


   return (
      <div className={s.editLandingContainer}>

         <h1>{props.pageInfo.pageName}</h1>
         <div className={s.itemContainer}>
            <div className={s.editContainer}>
               <label htmlFor="name">Landing Name*</label><input
                  type="text"
                  id="name"
                  placeholder="Landing Name"
                  value={landingName}
                  onChange={(e) => setLandingName(e.target.value)}
               />
            </div>
            <div className={s.editContainer}>
               <label htmlFor="about">About Landing*</label><textarea
                  type="about"
                  id="name"
                  placeholder="About Landing"
                  value={description}
                  onChange={(e) => setDiscription(e.target.value)}
               />
            </div>
            <div className={s.calendarFlexContainer}>
               {/* Календарь activeAt*/}
               <div
                  className={s.btnInnerContainer}
                  onMouseEnter={() => setActiveAtIsVisible(true)}
                  onMouseLeave={() => setActiveAtIsVisible(false)}
               >
                  <div className={s.titleBtn}>the date of the beginning</div>
                  <button className={s.filterBtn}>
                     {activeAtDate}
                  </button>
                  {activeAtIsVisible ? <div className={s.calendarModal}>
                     <Calendar onChange={handleActiveAtChange} />
                  </div> : false}
               </div>
               {/* Календарь endedAt*/}
               <div
                  className={s.btnInnerContainer}
                  onMouseEnter={() => setEndedAtIsVisible(true)}
                  onMouseLeave={() => setEndedAtIsVisible(false)}
               >
                  <div className={s.titleBtn}>Endings</div>
                  <button className={s.filterBtn}>
                     {endedAtDate}
                  </button>
                  {endedAtIsVisible ? <div className={s.calendarModal}>
                     <Calendar onChange={handleEndedAtChange} />
                  </div> : false}
               </div>
            </div>


            <div className={s.editContainer}>
               <label htmlFor="bannerFile">Upload banner*</label>
               <input type="file" id="bannerFile" accept="image/*" />
            </div>
            <div className={s.editContainer}>
               <label htmlFor="fileLogo">Upload logo Landing*</label>
               <input type="file" id="fileLogo" accept="image/*" />
            </div>

            {/*  Загрузка Лого организаторов */}
            {showUploadBtns(organizersArray, setOrganizersArray, 'Add organizers')}

            {/*  Загрузка Лого спонсоров */}
            {showUploadBtns(sponsorsArray, setSponsorsArray, 'Add sponsors')}

            {/*  Загрузка Лого партнеров */}
            {showUploadBtns(partnersArray, setPartnersArray, 'Add partners')}

            {/* Ссылка на стрим (по желанию) */}
            <div className={s.editContainer}>
               <label htmlFor="link">Link to stream*</label><input
                  type="link"
                  id="name"
                  placeholder="link"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
               />
            </div>
            {/* Загрузка логотипов игр (дисциплин) для планируемых турниров */}
            <div className={s.editContainer}>
               <label htmlFor="filePartners">Upload logo partners*</label>
               <input type="file" id="filePartners" accept="image/*" />
            </div>
            {/* Доменное имя для подключения лендинга */}
            <div className={s.editContainer}>
               <label htmlFor="domainName">Domain name*</label><input
                  type="domainName"
                  id="name"
                  placeholder="domainName"
                  value={domainName}
                  onChange={(e) => setDomainName(e.target.value)}
               />
            </div>
         </div>
         <button className={s.submitBtn} onClick={() => {
            !megaId ? submitDateCreate(landingName, description, activeAtDate, endedAtDate, link, domainName) : submitDateEdit(landingName, description, activeAtDate, endedAtDate, link, domainName, megaId)
         }}>
            Apply
         </button>
      </div>
   )
}
export default EditLanding;