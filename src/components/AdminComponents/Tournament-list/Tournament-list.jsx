import React from 'react';
import s from './Tournament-list.module.scss';
import MenuComponent from '../MenuComponent/index';
import Item from '../itemComponent/itemComponent';

const TournamentList = (props) => {
   return (
      <div className={s.mainContainerTournamentList}>
         <div className={s.contentContainerTournamentList}>
            <div className={s.title}>Tournament list</div>
            <MenuComponent pageMenu={props.pageMenu} />
         </div>


         <div className={s.itemContainer}>
            {props.itemArray?.map(u =>
               < Item
                  key={u.id}
                  name={u.name}
                  title={'Current'}
                  status={true}
                  startedAt={u.startedAt}
                  endedAt={u.endedAt}
                  btnObj={props.btnObj}
                  hiddenBtn={props.btnObj.hiddenBtn}
               />
            )}
         </div>
      </div>
   )
}
export default TournamentList;