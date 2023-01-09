import React, { useState, useEffect } from 'react';
import ContentContainer from '../../components/ContentContainer/ContentContainer';

import { API, API_ROUTER } from "../../api/index";
import { FormattedMessage } from "react-intl";

import s from '../../comon/ComonAdmin.module.scss';
//обнуляющие стили
import "../../comon/_null_style.css";

//компоненты, из которых состоит страница
import ProfilePanel from '../../components/AdminComponents/ProfilePanelComponent/index';
import HeaderAdmin from '../../components/AdminComponents/header-admin';
import Table from '../../comon/Table-component';
import InfoPanel from '../../components/AdminComponents/InfoPanel/index';

//const
import { pageInfo, titleHeader, headerItem } from "./const";
import { profileInfo, chatInfo, pageMenu } from "../../comon/comonConst";
import BtnBan from '../../components/AdminComponents/btnBan';
import Checkbox from '../../components/AdminComponents/Checkbox';

const MembersPageTournament = (props) => {

   const [itemArray, setItemArray] = useState(null);

   const changeUsersData = (data) => {
      let newArr = []
      for (let key in data) {
         let rows = {}
         rows.firstName = data[key].firstName;
         rows.lastName = data[key].lastName;
         rows.middleName = data[key].middleName;
         rows.username = data[key].username;
         rows.phone = data[key].phone;
         rows.birthDate = data[key].birthDate;
         rows.document = data[key].document;
         rows.nickname = data[key].nickname;
         rows.steamId = data[key].steamId;
         rows.teamName = data[key].teamName;
         newArr.push(rows);
      }
      setItemArray(newArr);
   }

   const getUsers = () => {
      API.request({ ...API_ROUTER.userAdmin.getUserAdmin })
         .then((res) => {
            changeUsersData(res.rows);
            console.log(res)
         })
         .catch((err) => console.log(err));
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
               pageName={<FormattedMessage id="members.pageName.title" tagName="span" />}
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
            </div>
         </ContentContainer>
         {/* <InfoPanel chatInfo={chatInfo} /> */}
      </div>

   )
}

export default MembersPageTournament;