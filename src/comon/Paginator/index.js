import React, { useState } from 'react';
import s from './paginator.module.scss';

const Paginator = (props, { portionSize = 10 }) => {

   console.log(props);

   const [portionNumber, setPortionNumber] = useState(1);
   const leftBorder = ((portionNumber - 1) * portionSize + 1);
   const rightBorder = (portionNumber * portionSize);
   const portionCount = Math.ceil(props.pagesCount / portionSize);

   return (
      <div className={s.btnPaginatorContainer}>

         {portionNumber > 1 ? <button
            className={s.paginatorBtn}
            onClick={() => setPortionNumber(portionNumber - 1)}
         >{'<'}</button> : false}

         {props.pages
            .filter(el => el >= leftBorder && el <= rightBorder)
            .map((el, i) => <button
               key={i}
               className={(props.currentPage == el) ? `${s.paginatorBtn} ${s.currentPage}` : `${s.paginatorBtn}`}
               onClick={() => props.getFn(el, props.limit)}
            >{el}</button>)}

         {portionNumber < portionCount ? <button
            className={s.paginatorBtn}
            onClick={() => { setPortionNumber(portionNumber + 1) }}
         >{'>'}</button> : false}

      </div>
   )
}
export default Paginator; 