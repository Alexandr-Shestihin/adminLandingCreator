import React from 'react';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import LandingEuro from '../../components/landing-euro';

//data
import { data } from './const';

import s from './landingEuro.module.scss';
//обнуляющие стили
import "../../comon/_null_style.css";

const LandingEuroPage = (props) => {
   return (
      <div className={s.landingEuroContainer}>
         <ContentContainer
            MainBlock={true}
            MainCreateBlock={null}
         >
            <LandingEuro
               data={data}
               titleHeader={data.infoMainTableTitle.titleHeader}
               bodyTitle={data.infoMainTableTitle.bodyTitle}
               bodyFirstItem={data.infoItem.bodyFirstItem}
               bodyLastItem={data.infoItem.bodyLastItem}
               titleRowTable={data.titleRowTable}
               headerItem={data.infoItem.headerItem}
            />
         </ContentContainer>
      </div>
   )
}
export default LandingEuroPage;