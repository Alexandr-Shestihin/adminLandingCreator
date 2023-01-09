import React from 'react';
import s from './ProfilePanel.module.scss';

import { FormattedMessage } from "react-intl";

import userPhoto from '../../../img/avatars/User_ProfilePanel.png';
//icon for menu
import activeMembers from '../../../img/Icon_for_menu/Icon_for_active_menu/groupWhite.png';
import disableMembers from '../../../img/Icon_for_menu/Icon_for_disable_menu/groupLilac.png';
import activeEventsIcon from '../../../img/Icon_for_menu/Icon_for_active_menu/Events.png';
import disableEventsIcon from '../../../img/Icon_for_menu/Icon_for_disable_menu/Events.png';
import activeTournamentsIcon from '../../../img/Icon_for_menu/Icon_for_active_menu/Tournaments.png';
import disableTournamentsIcon from '../../../img/Icon_for_menu/Icon_for_disable_menu/Tournaments.png';
import activeRequestsIcon from '../../../img/Icon_for_menu/Icon_for_active_menu/Requests.png';
import disableRequestsIcon from '../../../img/Icon_for_menu/Icon_for_disable_menu/Requests.png';
import activeMatchesIcon from '../../../img/Icon_for_menu/Icon_for_active_menu/Matches.png';
import disableMatchesIcon from '../../../img/Icon_for_menu/Icon_for_disable_menu/Matches.png';
//для Logs нет активной иконки
/* import activeLogsIcon from '../../../img/Icon_for_menu/Icon_for_active_menu/'; */
import disableLogsIcon from '../../../img/Icon_for_menu/Icon_for_disable_menu/Logs.png';

import activeLandingsIcon from '../../../img/Icon_for_menu/Landing_button.png';

import { useState, useEffect } from 'react';

import { NavLink, Router } from 'react-router-dom';
import { ROUTER } from '../../../config';

const ProfilePanel = (props) => {
   /* const screenWidth = window.screen.width;
   const screenHeight = window.screen.heigh; */

   const getTime = (d) => {
      let currentTimeZoneOffsetInHours = (d.getTimezoneOffset() / 60) * (-1);
      return `${d.getHours()}:${d.getMinutes()} UTC +${currentTimeZoneOffsetInHours}`;
   }
   const [currentTime, setCurrentTime] = useState(getTime(new Date()))

   const getData = (d) => {
      if (window.screen.width > 852) {
         return `${d.getDate()}.${d.getMonth()}.${d.getFullYear()}`
      } else {
         const year = d.toLocaleDateString(undefined, { year: '2-digit' })
         return `${d.getDate()}.${d.getMonth()}.${year}`
      }
   }
   const [currentData, setCurrentData] = useState(getData(new Date()))
   useEffect(() => {
      const time = setInterval(() => {
         setCurrentTime(getTime(new Date()));
         setCurrentData(getData(new Date()))
      }, 2000);
      return () => clearInterval(time)
   })

   return (
      <div className={s.profilePanel}>

         <div className={s.topContainer}>

            <p className={s.communityTitle}><FormattedMessage id="profilePanel.pageName.edit" tagName="span" /></p>
            <div className={s.edit}><FormattedMessage id="profilePanel.pageName.title" tagName="span" /></div>

            <div className={s.imgContainer}>
               <img src={userPhoto} alt="userPhoto" />
            </div>
            <div className={s.userName}>{props.profileInfo.userName}</div>

            <div className={s.navLinkContainer}>
               <NavLink
                  activeClassName={s.active}
                  className={s.link}
                  to={ROUTER.membersPage}
               >
                  <div className={s.iconMenu}>
                     <div className={s.imgContainerMenu}>
                        <img className={s.imgActive} src={activeMembers} alt="Members" />
                        <img className={s.imgDisable} src={disableMembers} alt="Members" />
                     </div>
                  </div>
                  <FormattedMessage id="profilePanel.menu.item1" tagName="span" />
               </NavLink>
               <NavLink
                  activeClassName={s.active}
                  className={s.link}
                  to={ROUTER.communitysPage}
               >
                  <div className={s.iconMenu}>
                     <div className={s.imgContainerMenu}>
                        <img className={s.imgActive} src={activeMembers} alt="Communitys" />
                        <img className={s.imgDisable} src={disableMembers} alt="Communitys" />
                     </div>
                  </div>
                  <FormattedMessage id="profilePanel.menu.item2" tagName="span" />
               </NavLink>
               <NavLink
                  activeClassName={s.active}
                  className={s.link}
                  to={ROUTER.evensPage}
               /* to={ROUTER} */
               >
                  <div className={s.iconMenu}>
                     <img className={s.imgActive} src={activeEventsIcon} alt="events" />
                     <img className={s.imgDisable} src={disableEventsIcon} alt="events" />
                  </div>
                  <FormattedMessage id="profilePanel.menu.item3" tagName="span" />
                  {/* <i className='iconLock' /> */}
               </NavLink>
               <NavLink
                  activeClassName={s.active}
                  className={s.link}
                  to={ROUTER.tournamentsPage}
               /* to={ROUTER} */
               >
                  <div className={s.iconMenu}>
                     <img className={s.imgActive} src={activeTournamentsIcon} alt="tournaments" />
                     <img className={s.imgDisable} src={disableTournamentsIcon} alt="tournaments" />
                  </div>
                  <FormattedMessage id="profilePanel.menu.item4" tagName="span" />
                  {/* <i className='iconLock' /> */}
               </NavLink>
               <NavLink
                  activeClassName={s.active}
                  className={s.link}
                  /* to={ROUTER.requestsPage} */
                  to={ROUTER}
               >
                  <div className={s.iconMenu}>
                     <img className={s.imgActive} src={activeRequestsIcon} alt="requests" />
                     <img className={s.imgDisable} src={disableRequestsIcon} alt="requests" />
                  </div>
                  <FormattedMessage id="profilePanel.menu.item5" tagName="span" />
                  <i className='iconLock' />
               </NavLink>
               <NavLink
                  activeClassName={s.active}
                  className={s.link}
                  /* to={ROUTER.matchesPage} */
                  to={ROUTER}
               >
                  <div className={s.iconMenu}>
                     <img className={s.imgActive} src={activeMatchesIcon} alt="matches" />
                     <img className={s.imgDisable} src={disableMatchesIcon} alt="matches" />
                  </div>
                  <FormattedMessage id="profilePanel.menu.item6" tagName="span" />
                  <i className='iconLock' />
               </NavLink>
               <NavLink
                  activeClassName={s.active}
                  className={s.link}
                  /* to={ROUTER.logsPage} */
                  to={ROUTER}
               >
                  <div className={s.iconMenu}>
                     <img className={s.imgActive} src={disableLogsIcon} alt="logs" />
                     <img className={s.imgDisable} src={disableLogsIcon} alt="logs" />
                  </div>
                  <FormattedMessage id="profilePanel.menu.item7" tagName="span" />
                  <i className='iconLock' />
               </NavLink>
               <NavLink
                  activeClassName={s.active}
                  className={s.link}
                  to={ROUTER.landings}
               /* to={ROUTER} */
               >
                  <div className={s.iconMenu}>
                     <img className={s.imgActive} src={activeLandingsIcon} alt="logs" />
                     <img className={s.imgDisable} src={activeLandingsIcon} alt="logs" />
                  </div>
                  <FormattedMessage id="profilePanel.menu.item8" tagName="span" />
                  {/* <i className='iconLock' /> */}
               </NavLink>
            </div>
         </div>

      </div>
   )
}
export default ProfilePanel; 