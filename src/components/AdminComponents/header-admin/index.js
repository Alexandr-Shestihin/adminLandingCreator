import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../../../config';
import Menu from '../MenuComponent/index';
import s from './headerAdmin.module.scss';

import { FormattedMessage } from "react-intl";

const HeaderAdmin = (props) => {
   const [isFilter, setIsFilter] = useState(props.filter);


   const showButton = (btnArrayName) => {
      return (
         btnArrayName.map(btn => <button
            onClick={props.onChangeActiveBtn}
            className={props.activeBtn === btn.name ? `${s.panelBtn} ${s.activeBtn}` : s.panelBtn}
            value={btn.name}
         >{props.activeBtn === btn.name ? <img src={btn.iconActive} alt="" /> : <img src={btn.icon} alt="" />}
            {btn.name}<i className='iconLock' /></button>)
      )
   }

   return (
      <div className={s.contentHeaderTitleContainer}>

         <div className={s.eventsHeaderTitleContainer}>
            <div className={s.title}>{props.pageName}</div>
            {props.addBtn ? <div className={s.buttonContainer}>
               <button className={s.exportBtn}><FormattedMessage id="events.btn.export" tagName="span" /></button>
               <NavLink
                  activeClassName={s.active}
                  className={s.addEventBtn}
                  to={ROUTER[props.toROUTER]}

               >{props.addBtn}</NavLink>
            </div> : false}

         </div>

         <div className={s.eventsHeaderFilterContainer}>

            {props.periodContainer && <div className={s.periodContainer}>
               <div className={s.periodTitle}><FormattedMessage id="events.btn.period" tagName="span" /></div>
               <button className={s.fromBtn}><FormattedMessage id="events.btn.from" tagName="span" /></button>
               <div className={s.line}></div>
               <button className={s.toBtn}><FormattedMessage id="events.btn.to" tagName="span" /></button>
            </div>}

            {props.btnInfo ? <div className={s.periodContainer}>
               {showButton(props.btnInfo)}
            </div> : false}

            <div className={s.sortFilterContainer} title='sort'>
               {/* <div className={s.sortContainer}>
                  <div>Sort</div>
               </div> */}
               {isFilter ? <div className={s.filterContainer} title='filter'>
                  <div><FormattedMessage id="events.btn.filter" tagName="span" /></div>
               </div> : false}
               {/* <div className={s.inputContainer}><input type="text" placeholder='Search' /></div> */}
            </div>
         </div>
         <Menu
            pageMenu={props.pageMenu}
         />
      </div>
   )
}
export default HeaderAdmin;