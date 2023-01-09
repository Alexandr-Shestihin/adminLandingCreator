import React, { useState, useEffect } from 'react';
import ContentContainer from '../../components/ContentContainer/ContentContainer';

import { API, API_ROUTER } from "../../api/index";

import s from '../../comon/ComonAdmin.module.scss';
//обнуляющие стили
import "../../comon/_null_style.css";

//компоненты, из которых состоит страница
import ProfilePanel from '../../components/AdminComponents/ProfilePanelComponent/index';
import CreateLanding from '../../components/AdminComponents/create-landing';
import InfoPanel from '../../components/AdminComponents/InfoPanel/index';

//const
import { pageInfo, formData } from "./const";
import { profileInfo, chatInfo, pageMenu } from "../../comon/comonConst";

import { convertDate } from '../../comon/convertDate';

const CreateLandingPage = (props) => {

   const setFormData = (name, description, activeAt, endedAt, link, domain) => {
      let params = {
         ...API_ROUTER.landing.setFormDataLanding,
         data: {
            name: name,
            description: description,
            activeAt: convertDate(activeAt),
            endedAt: convertDate(endedAt),
            link: link,
            domain: domain
         }
      };

      API.request(params)
         .then((res) => {
            console.log(res)
         })
         .catch(err => console.log(err))
   }

   const updataLandingData = (name, description, activeAt, endedAt, link, domain, id) => {
      let params = {
         ...API_ROUTER.landing.upDataLanding,
         pathKeys: {
            landingId: id
         },
         data: {
            name: name,
            description: description,
            activeAt: convertDate(activeAt),
            endedAt: convertDate(endedAt),
            link: link,
            domain: domain
         }
      };

      API.request(params)
         .then((res) => {
            console.log(res)
         })
         .catch(err => console.log(err))
   }

   return (
      <div className={s.evensPageContainer}>
         <ProfilePanel
            pageInfo={pageInfo}
            profileInfo={profileInfo} />
         <ContentContainer
            MainBlock={true}
            MainCreateBlock={null}
         >
            <CreateLanding
               pageInfo={pageInfo}
               organizers={formData.organizers}
               sponsors={formData.sponsors}
               partners={formData.partners}
               setFormData={setFormData}
               updataLandingData={updataLandingData}
            />
         </ContentContainer>
         <InfoPanel chatInfo={chatInfo} />
      </div>

   )
}
export default CreateLandingPage;
