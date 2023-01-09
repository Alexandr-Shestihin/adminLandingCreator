import React, { useState } from "react";
import s from './item.module.scss';

import { useHistory, useLocation } from "react-router-dom";

const Item = (props) => {
   const [statusPro, setStatusPro] = useState(props.pro);
   const [statusLive, setStatusLive] = useState(props.live);

   const history = useHistory();
   function goToUrl(url) {
      history.push(url);
   }

   /* const [status, setStatus] = useState(props.status); */
   const [activeMenu, setActiveMenu] = useState(false);
   const onChangeMenu = (value) => {
      setActiveMenu(!value)
   }
   const getDate = (d) => {
      if (d) {
         return d.slice(d.indexOf('T') + 1).slice(0, -6);
      } else return false;
   }

   const url = props.btnObj.topBtn.to1;

   /* const returnArr = (value) => {
      let arr = []
      value.map(el => {
         for (let key in el) {
            arr.push(el[key])
         }
      })
      return arr;
   } */

   const returnArr = (value) => {
      if (typeof props.name === 'object') {
         let arr = []
         value.map(el => {
            for (let key in el) {
               arr.push(el[key])
            }
         })
         return (arr.map(el => <div className={s.title}>{el}</div>));
      } else {
         return <div className={s.title}>{props.name}</div>
      }
   }

   return (
      <div className={activeMenu ? s.showMenu : s.hiddenMenu}>

         <div className={s.itemContainer}>
            <div className={s.info}>
               {returnArr(props.name)}
               <div className={s.status}>
                  {statusPro ? <div className={s.status__pro}>PRO</div> : false}
                  {statusLive ? <div className={s.status__live}>Live</div> : false}
               </div>
               {props.domain && <div className={s.domain}>{props.domain}</div>}

               {/* <div className={s.infoContainer}>
                  <div className={s.statusContainer}>
               <div className={s.status}>Status:</div>
               {
                  status ? <div className={`${s.indicator} ${s.grean}`}></div> : <div className={`${s.indicator} ${s.red}`}></div>
               }
               <div className={s.statusResult}>{props.title}</div>
            </div>
                  <div className={s.date}>{getDate(props.startedAt)} - {getDate(props.endedAt)}</div>
               </div> */}

            </div>
            <div className={s.btnContainer}>

               <button
                  className={s.edit}
                  onClick={() => goToUrl(url + `${props.id}`)}
               >
                  {props.btnObj.topBtn.edit}
                  <img src={props.btnObj.topBtn.img1} alt="" />
               </button>


               {/* <button className={s.create}><i className='iconLock' />
            {props.btnObj.topBtn.create}
            {props.btnObj.topBtn.img2 ? <img src={props.btnObj.topBtn.img2} alt="" /> : false}
         </button> */}
               {!props.domain &&
                  <button
                     className={s.switch}
                     onClick={() => onChangeMenu(activeMenu)}
                  >
                     {activeMenu ? <div className={s.switchOff}></div> : <div className={s.switchOn}></div>}
                  </button>
               }
            </div>
            <div className={s.btnContainerHidden}>
               {props.hiddenBtn?.map(u =>
                  <button className={s.statistics}><i className='iconLock' />
                     {u.name}
                     <img src={u.img} alt="" />
                  </button>
               )}
            </div>
         </div>
      </div>
   )
}
export default Item;