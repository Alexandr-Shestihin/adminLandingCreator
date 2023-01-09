import React, { useState, useEffect } from 'react';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import { API, API_ROUTER } from "../../api";

import s from '../../comon/ComonAdmin.module.scss';
//обнуляющие стили
import "../../comon/_null_style.css";

//компоненты, из которых состоит страница 
import ProfilePanel from '../../components/AdminComponents/ProfilePanelComponent/index';
import HeaderAdmin from '../../components/AdminComponents/header-admin';
import CreateEvent from '../../components/AdminComponents/CreateEvent/index';
import InfoPanel from '../../components/AdminComponents/InfoPanel/index';

//const
import { pageInfo, } from "./const";
import { profileInfo, pageMenu, itemConstArray, btnTournamentsObj, uploadImg, convertDateISO8601 } from "../../comon/comonConst";

/* import TournamentList from '../../components/AdminComponents/Tournament-list/Tournament-list'; */


const EditEvent = (props) => {
   const [itemArray, setItemArray] = useState(itemConstArray);

   useEffect(() => {
      API.request({ ...API_ROUTER.Tournaments.getTournaments })
         .then((res) => {
            /* console.log(res); */
            setItemArray(res.tournaments || itemConstArray);
            /* console.log(res.tournaments); */
         })
         .catch((err) => console.log(err));
   }, []);

   return (
      <div className={s.evensPageContainer}>
         <ProfilePanel
            pageInfo={pageInfo}
            profileInfo={profileInfo} />
         <ContentContainer
            MainBlock={null}
            MainCreateBlock={true}
         >
            {/* <HeaderAdmin
               pageName={pageInfo.pageName}
               toROUTER={pageInfo.toROUTER}
               addBtn={pageInfo.addBtn}
               periodContainer={pageInfo.periodContainer}
               btnInfo={pageInfo?.btnInfo}
               filter={pageInfo.filter}
               setActiveBtn={setActiveBtn}
               activeBtn={activeBtn}
               onChangeActiveBtn={onChangeActiveBtn}
            /> */}
            <CreateEvent
               convertDateISO8601={convertDateISO8601}
               uploadImg={uploadImg}
            />
         </ContentContainer>
         {/* <TournamentList
            itemArray={itemArray}
            pageMenu={pageMenu}
            btnObj={btnTournamentsObj}
         /> */}
      </div>
   )
}
export default EditEvent;