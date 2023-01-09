import React from 'react';
import s from './infoPanel.module.scss';
import { useState, useEffect } from 'react';

import statistics from '../../../img/InfoPanel/statistics.jpg';
import dialogs from '../../../img/InfoPanel/dialogs.jpg';

const InfoPanel = (props) => {
   const [isActive, setIsActive] = useState(1);
   const onChangeBtn = (id) => {
      setIsActive(id)
   }

   const [isOnline, setIsOnline] = useState(props.chatInfo.isOnline);
   useEffect(() => setIsOnline(props.chatInfo.isOnline));
   return (
      <div className={s.infoPanel}>
         {/* 
         <div className={s.topContainer}>
            <div className={s.imgContainer}>
               <img src={statistics} alt="statistics" />
            </div>
            <div className={s.mainButtonContainer}>
               <div className={s.buttonContainer}>
                  <button
                     className={isActive === 1 ? s.active : false}
                     onClick={() => onChangeBtn(1)}
                  >Data 1</button>
                  <button
                     className={isActive === 2 ? s.active : false}
                     onClick={() => onChangeBtn(2)}>Data 2</button>
                  <button
                     className={isActive === 3 ? s.active : false}
                     onClick={() => onChangeBtn(3)}>Data 3</button>

                  <button
                     className={isActive === 4 ? s.active : false}
                     onClick={() => onChangeBtn(4)}>Data 4</button>
                  <button
                     className={isActive === 5 ? s.active : false}
                     onClick={() => onChangeBtn(5)}>Data 5</button>
               </div>
            </div>

         </div>

         <div className={s.bottomContainer}>
            <div className={s.textContainer}>
               <p>Team Chat</p>
               <div className={s.countOnlineContainer}>
                  {
                     isOnline ? <div className={`${s.indicator} ${s.grean}`}></div> : <div className={`${s.indicator} ${s.red}`}></div>
                  }
                  <div className={s.countOnline}>{`${props.chatInfo.countUsersOnline} online`}</div>
               </div>
            </div>

            <div className={s.imgContainer}>
               <img src={dialogs} alt="dialogs" />
            </div>
         </div>
 */}
      </div>
   )
}
export default InfoPanel;