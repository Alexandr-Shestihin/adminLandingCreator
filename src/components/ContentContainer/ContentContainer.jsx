import React from "react";
import s from "./ContentContainer.module.css"

const ContentContainer = (props) => {

   return (
      <>
         {props.MainBlock ? <div className={s.mainBlockContainer}>
            {props.children}
         </div> : <div className={`${s.mainCreateBlock} ${s.mainBlockContainer}`}>
            {props.children}
         </div>}
         {/* {!(props.MainBlock || props.MainCreateBlock) && <div className={s.mainBlockContainer}>
            {props.childred}
         </div>} */}

      </>
   )
}
export default ContentContainer;