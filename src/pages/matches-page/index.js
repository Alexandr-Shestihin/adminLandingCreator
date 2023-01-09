import React from 'react';
import ContentContainer from '../../components/ContentContainer/ContentContainer';

import s from '../../comon/ComonAdmin.module.scss';
//обнуляющие стили
import "../../comon/_null_style.css";

//компоненты, из которых состоит страница 
import ProfilePanel from '../../components/AdminComponents/ProfilePanelComponent/index';
/* import MainBlock from '../../components/AdminComponents/MainBlock/index'; */
import InfoPanel from '../../components/AdminComponents/InfoPanel/index';

//const
import { pageInfo, matches } from "./const";
import { profileInfo, chatInfo } from "../../comon/comonConst";

const MatchesPage = (props) => {
   /* let value = <MainBlock
      pageInfo={pageInfo}
      matches={matches}
   /> */
   return (
      <div className={s.evensPageContainer}>
         <ProfilePanel
            pageInfo={pageInfo}
            profileInfo={profileInfo} />
         <ContentContainer
            MainBlock={null}
            MainCreateBlock={null}
         />
         <InfoPanel chatInfo={chatInfo} />

      </div>

   )
}
export default MatchesPage;