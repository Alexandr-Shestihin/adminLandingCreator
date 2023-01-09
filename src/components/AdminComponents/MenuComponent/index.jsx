import React, { useState } from "react";
import s from './MenuComponent.module.scss';

const Menu = (props) => {
   const [isActive, setIsActive] = useState(1)
   const onChangeActiveBtn = (id) => {
      setIsActive(id)
   }
   return (
      <div className={s.eventsHeaderMenuContainer}>
         {props.pageMenu?.map(u =>
            <div
               key={u.id}
               className={isActive === u.id ? `${s.item} ${s.active}` : `${s.item}`}
               onClick={() => onChangeActiveBtn(u.id)}
            >{u.name}</div>
         )}
      </div>
   )
}
export default Menu;