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
import Paginator from '../../comon/Paginator';

//const
import { pageInfo, } from "./const";
import { profileInfo, chatInfo, pageMenu, itemConstArray, btnTournamentsObj, setPaginatorDate } from "../../comon/comonConst";

const TournamentsPage = (props) => {

   const limit = 10;
   const [itemArray, setItemArray] = useState([]);
   const [pages, setPages] = useState([]);
   const [pagesCount, setPagesCount] = useState(0);
   const [currentPage, setCurrentPage] = useState(1);

   const getTournamentsData = (page = 1, limit = 10) => {
      let params = {
         ...API_ROUTER.Tournaments.getTournaments,
         pathKeys: {
            page: page,
            limit: limit,
         }
      };

      API.request(params)
         .then((res) => {
            console.log(res);
            setItemArray(res.tournaments || itemConstArray);

            setPaginatorDate(
               res.paginator.lastPage,
               res.paginator.currentPage,
               setPagesCount,
               setPages,
               setCurrentPage
            );

         })
         .catch((err) => console.log(err));
   }

   useEffect(() => {
      getTournamentsData(1, limit)
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
               pageMenu={pageMenu}
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
                        startedAt={u.startedAt}
                        endedAt={u.endedAt}
                        btnObj={btnTournamentsObj}
                        hiddenBtn={btnTournamentsObj.hiddenBtn}
                        domain={u.domain}
                        //Пока не приходят данные с сервера я сделал так
                        pro={pageInfo.pro}
                        live={pageInfo.live}
                     />
                  )}
               </div>

               {pagesCount > 1 ? <Paginator
                  limit={limit}
                  pages={pages}
                  getFn={getTournamentsData}
                  pagesCount={pagesCount}
                  currentPage={currentPage}
               /> : false}

            </div>
         </ContentContainer>
         <InfoPanel chatInfo={chatInfo} />
      </div>

   )
}
export default TournamentsPage;
