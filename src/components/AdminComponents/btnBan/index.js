import React, { useState } from 'react';
import s from './btnBan.module.scss';

const BtnBan = (props) => {

   const [isBan, setIsBan] = useState(props.isBanFromBack);

   return (
      <button
         disabled={true}
         className={isBan ? `${s.btnBan} ${s.btnUnbanned}` : `${s.btnBan} ${s.btnBanned}`}
      /* onClick={() => setIsBan(!isBan)} */
      >Ban</button>
   )
}
export default BtnBan;