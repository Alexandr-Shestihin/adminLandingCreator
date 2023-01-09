import React from 'react';
import Table from '../../comon/Table-component';
import s from './landingEuro.module.scss';
import baku from '../../img/LandingEuro/baku.svg';
import azerbaijan from '../../img/LandingEuro/azerbaijan.svg';
import pass from '../../img/LandingEuro/pass.svg';
import esports from '../../img/LandingEuro/esports.svg';

const LandingEuro = (props) => {

   return (
      <div className={s.landingContainer}>
         <div className={s.rowContainer}>
            <div className={s.baku}>
               <img src={baku} alt="" />
            </div>
            <div className={s.esports}>
               <img src={esports} alt="" />
            </div>
            <div className={s.azerbaijan}>
               <img src={azerbaijan} alt="" />
            </div>
            <div className={s.pass}>
               <img src={pass} alt="" />
            </div>

         </div>

         <Table
            bodyTitle={props.data.infoMainTableTitle.titleHeader}
            infoItem={props.data.infoItem.headerItem}
         />
         <Table
            bodyTitle={props.data.infoMainTableTitle.bodyTitle.firstTitle}
            infoItem={props.data.infoItem.bodyFirstItem}
            titleRowTable={props.data.titleRowTable.firstHeader}
         />
         <Table
            bodyTitle={props.data.infoMainTableTitle.bodyTitle.secondTitle}
            infoItem={props.data.infoItem.bodyLastItem}
            titleRowTable={props.data.titleRowTable.lastHeader}
         />

      </div>
   )
}
export default LandingEuro;
