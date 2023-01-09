import React, { useState } from 'react';
import s from './fileUploader.module.css';

const FileUploaderSingle = (props) => {

   //обработчик файлов
   const fileReader = new FileReader();
   fileReader.onloadend = () => {
      if (props.isMany) {
         props.onChangeDudlePhotos(fileReader.result, props.id, props.fn, props.data);
      } else {
         props.setImageURL(fileReader.result);
      }
   };

   //обработчик изменений input
   const handler = (e) => {
      fileReader.readAsDataURL(e.target.files[0])
   }

   const handleDrop = (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (event.dataTransfer.files && event.dataTransfer.files.length) {
         fileReader.readAsDataURL(event.dataTransfer.files[0]);
      }
   };

   const handleDragEmpty = (event) => {
      event.preventDefault();
      event.stopPropagation();
   };

   return (
      <div className={s.fileUploader}>
         <input
            type="file"
            id={props.htmlFor}
            onChange={handler}
            className={s.uploadImg}
         />
         <div className={s.imgContainer}>
            <img
               src={(props.imageURL.length && props.imageURL.length > 1) ? props.imageURL : props.defaultFoto}
               alt=""
               onDrop={handleDrop}
               onDragEnter={handleDragEmpty}
               onDragOver={handleDragEmpty}
            />
         </div>
         <label
            htmlFor={props.htmlFor}
            className={`${s.imgContainer} ${s.addImg}`}
         ></label>
      </div>
   )
}
export default FileUploaderSingle;