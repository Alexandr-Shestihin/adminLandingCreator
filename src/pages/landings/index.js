import React, { useState, useEffect } from 'react';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import { API, API_ROUTER } from "../../api/index";

import s from '../../comon/ComonAdmin.module.scss';
//обнуляющие стили
import "../../comon/_null_style.css";

//компоненты, из которых состоит страница
import ProfilePanel from '../../components/AdminComponents/ProfilePanelComponent/index';
import HeaderAdmin from '../../components/AdminComponents/header-admin';
import Item from '../../components/AdminComponents/itemComponent/itemComponent';
import InfoPanel from '../../components/AdminComponents/InfoPanel/index';

//const
import { pageInfo, } from "./const";
import { profileInfo, chatInfo, itemConstArrayLandings, btnLandingsObj } from "../../comon/comonConst";

const Landings = (props) => {
   const [itemArray, setItemArray] = useState(itemConstArrayLandings);

   useEffect(() => {
      API.request({ ...API_ROUTER.landing.getDataLandings })
         .then((res) => {
            console.log(res.landings)
            setItemArray(res.landings || itemConstArrayLandings);
         })
         .catch((err) => console.log(err));
   }, []);

   return (
      <div className={s.evensPageContainer}>
         <ProfilePanel
            pageInfo={pageInfo}
            profileInfo={profileInfo} />
         <ContentContainer
            MainBlock={true}
            MainCreateBlock={null}
         >
            <HeaderAdmin
               pageName={pageInfo.pageName}
               toROUTER={pageInfo.toROUTER}
               addBtn={pageInfo.addBtn}
               periodContainer={pageInfo.periodContainer}
               btnInfo={pageInfo?.btnInfo}
               filter={pageInfo.filter}/* 
            setActiveBtn={setActiveBtn}
            activeBtn={activeBtn}
            onChangeActiveBtn={onChangeActiveBtn} */
            />

            <div className={s.mainScrollContainer}>
               <div className={s.scrollContainer}>
                  {itemArray?.map((u, i) =>
                     < Item
                        key={i}
                        id={u.id}
                        name={u.name}
                        status={true}
                        startedAt={u.active_at}
                        endedAt={u.ended_at}
                        btnObj={btnLandingsObj}
                        hiddenBtn={btnLandingsObj.hiddenBtn}
                        domain={u.domain}
                        //Пока не приходят данные с сервера я сделал так
                        pro={pageInfo.pro}
                        live={pageInfo.live}
                     />
                  )}
               </div>
            </div>
         </ContentContainer>
         <InfoPanel chatInfo={chatInfo} />
      </div>

   )
}
export default Landings;
