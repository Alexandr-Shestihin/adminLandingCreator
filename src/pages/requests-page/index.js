import React from 'react';
import ContentContainer from '../../components/ContentContainer/ContentContainer';

import s from '../../comon/ComonAdmin.module.scss';
//обнуляющие стили
import "../../comon/_null_style.css";

//компоненты, из которых состоит страница 
import ProfilePanel from '../../components/AdminComponents/ProfilePanelComponent/index';
import HeaderAdmin from '../../components/AdminComponents/header-admin';
import ItemUserTask from '../../components/AdminComponents/item-user-task-component/itemUserTaskComponent';
import InfoPanel from '../../components/AdminComponents/InfoPanel/index';

//const
import { pageInfo, usersTasks } from "./const";
import { profileInfo, chatInfo } from "../../comon/comonConst";

const RequestsPage = (props) => {

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
            <ItemUserTask usersTasks={usersTasks} />
         </ContentContainer>
         <InfoPanel chatInfo={chatInfo} />
      </div>

   )
}
export default RequestsPage;