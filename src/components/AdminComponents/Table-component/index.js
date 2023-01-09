import React from 'react';
import s from './table.module.scss';

const Table = (props) => {

   const showItem = (obj) => {
      let newArr = []
      for (let key in obj) {
         newArr.push(<div title={obj[key]} className={`${s.tItem} ${s.tItem_t} ${s.tItem_big}`}
         >
            <span>{obj[key]}</span>
         </div>);
      }
      return newArr;
   }
   return (
      <div className={s.tableContainer}>

         <div className={s.tBody}>

            <div className={s.stickyContainer}>
               <div className={`${s.tRowContainer} ${s.tRowContainer_h}`}>
                  {props.bodyTitle?.map(el => <div className={`${s.tItem} ${s.tItem_left}`}>
                     {el}
                  </div>)}
               </div>
               <div className={`${s.tRowContainer} ${s.tRowContainer_h}`}>
                  {props.titleRowTable?.map((el, i) => <div className={`${s.tItem} ${s.tItem_left} ${s.tItem_t}`}
                  >
                     {el}
                  </div>)}
               </div>
            </div>

            <div className={s.tableBodyContainer}>
               {props.infoItem?.map((el, i) => <div key={i} className={`${s.tRowContainer} ${s.tRowContainer_bg}`}>
                  {showItem(el)}
               </div>)}
            </div>

         </div>
      </div>
   )
}
export default Table;