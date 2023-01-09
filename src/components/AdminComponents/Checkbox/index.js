import React, { useState } from 'react';
import s from './checkbox.module.scss';
import preloaderImg from '../../../img/icons/preloaderIcon.svg';

import { API, API_ROUTER } from "../../../api/index";


const Checkbox = (props) => {

   const [isActive, setIsActive] = useState(props.isActiveBack);
   const [preloader, setPreloader] = useState(false);

   return (
      <div className={s.container}>
         {preloader ?
            <img src={preloaderImg} className={s.preloaderImg} alt="" /> : <input
               type='checkbox'
               checked={isActive}
               onClick={() => props.onChange(
                  props.userId,
                  isActive,
                  setIsActive,
                  setPreloader
               )}
            />}
      </div>
   )
}
export default Checkbox;