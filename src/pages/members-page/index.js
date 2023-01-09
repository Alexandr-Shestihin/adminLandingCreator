import React, { useState, useEffect } from 'react';
import ContentContainer from '../../components/ContentContainer/ContentContainer';

import { API, API_ROUTER } from "../../api/index";

import s from '../../comon/ComonAdmin.module.scss';
//обнуляющие стили
import "../../comon/_null_style.css";

//компоненты, из которых состоит страница
import ProfilePanel from '../../components/AdminComponents/ProfilePanelComponent/index';
import HeaderAdmin from '../../components/AdminComponents/header-admin';
import Table from '../../comon/Table-component';
import InfoPanel from '../../components/AdminComponents/InfoPanel/index';

//const
import { pageInfo, titleHeader, headerItem, getUsersOfline } from "./const";
import { profileInfo, chatInfo, pageMenu, setPaginatorDate } from "../../comon/comonConst";
import BtnBan from '../../components/AdminComponents/btnBan';
import Checkbox from '../../components/AdminComponents/Checkbox';
import Paginator from '../../comon/Paginator';

const MembersPage = (props) => {
   const limit = 100;

   const [pagesCount, setPagesCount] = useState(0);

   const [itemArray, setItemArray] = useState(null);
   const [pages, setPages] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);

   const changeValueVerified = (id, value, fnChange, fnPreloader) => {
      fnPreloader(true);

      API.request({
         ...API_ROUTER.userAdmin.changeUserAdminVerified,
         data: {
            userId: id,
            newValue: !value,
         }
      })
         .then((res) => {
            fnChange(!value);
            fnPreloader(false);
         })
         .catch((err) => { console.log(err) });
   }
   const changeValuePro = (id, value, fnChange, fnPreloader) => {
      fnPreloader(true);

      API.request({
         ...API_ROUTER.userAdmin.changeUserAdminIsPro,
         data: {
            userId: id,
            newValue: !value,
         }
      })
         .then((res) => {
            fnChange(!value);
            fnPreloader(false);
         })
         .catch((err) => { console.log(err) });
   }

   const changeUsersData = (data) => {
      let newArr = []
      for (let key in data) {
         //console.log(data[key].verified)
         let rows = {}
         rows.nickname = <a className={s.userLink} href={`https://app.passport.gg/id/${data[key].id}`} target='_blank'>{data[key].nickname}</a>;
         rows.firstName = data[key].firstName;
         rows.lastName = data[key].lastName;
         rows.country = data[key].country;
         rows.city = data[key].city;
         rows.verified = <Checkbox
            userId={data[key].id}
            onChange={changeValueVerified}
            isActiveBack={data[key].verified}
         />;
         rows.pro = <Checkbox
            userId={data[key].id}
            isActiveBack={data[key].pro}
            onChange={changeValuePro}
         />;
         rows.banned = <BtnBan isBanFromBack={data[key].banned} />;
         newArr.push(rows);
      }
      setItemArray(newArr);
   }

   const getUsers = (page = 1, limit = 100) => {

      let params = {
         ...API_ROUTER.userAdmin.getUserAdmin,
         pathKeys: {
            page: page,
            limit: limit,
         }
      };

      API.request(params)
         .then((res) => {
            changeUsersData(res.rows || getUsersOfline());
            console.log(res.rows);

            setPaginatorDate(
               res.paginator.lastPage,
               res.paginator.currentPage,
               setPagesCount,
               setPages,
               setCurrentPage
            );

         })
         .catch((err) => {
            alert('Some error')
            changeUsersData(getUsersOfline());
            console.log(err);
         });
   }

   useEffect(() => {
      getUsers();
      const timeID = setInterval(() => {
         getUsers();
      }, 300000);
      return () => clearInterval(timeID)
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
               /* pageMenu={pageMenu} */
               filter={pageInfo.filter}
            />

            <div className={s.mainScrollContainer}>
               <div className={s.scrollContainer}>
                  <Table
                     bodyTitle={titleHeader}
                     infoItem={itemArray || headerItem.rows}
                  />
               </div>

               {pagesCount > 1 ? <Paginator
                  limit={limit}
                  pages={pages}
                  getFn={getUsers}
                  pagesCount={pagesCount}
                  currentPage={currentPage}
               /> : false}

            </div>
         </ContentContainer>
         {/* <InfoPanel chatInfo={chatInfo} /> */}
      </div>

   )
}

export default MembersPage;