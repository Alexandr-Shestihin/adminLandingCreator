import React, { useState } from 'react';
import s from './fileUploader.module.css';

const FileUploaderMany = (props) => {

   const [imageURL, setImageURL] = useState(props.imageURL);
   props.setImageURL(imageURL);

   //обработчик файлов
   const fileReader = new FileReader();
   fileReader.onloadend = () => {
      setImageURL(fileReader.result);
   };

   //обработчик изменений input
   const handler = (e) => {
      const selectedFIles = [...props.imageURL];
      const targetFiles = e.target.files;
      const targetFilesObject = [...targetFiles]
      targetFilesObject.map((file) => {
         return selectedFIles.push(URL.createObjectURL(file))
      })
      setImageURL(selectedFIles);
   }

   //удаление
   const deleteImg = (imgID) => {
      const selectedFIles = [...imageURL];
      const targetFilesObject = selectedFIles.filter(el => el != selectedFIles[imgID])
      setImageURL(targetFilesObject);
   }

   const handleDrop = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.dataTransfer.files && e.dataTransfer.files.length) {
         const selectedFIles = [...imageURL];
         const targetFilesObject = [...e.dataTransfer.files]
         targetFilesObject.map((file) => {
            return selectedFIles.push(URL.createObjectURL(file))
         })
         setImageURL(selectedFIles);
      }
   };

   const handleDragEmpty = (e) => {
      e.preventDefault();
      e.stopPropagation();
   };

   return (
      <div className={s.fileUploader}>
         <input
            type="file"
            id={props.htmlFor}
            multiple
            /* accept='' */
            onChange={handler}
            className={s.uploadImg}
         />
         {props.imageURL.length ?
            props.imageURL.map((url, imgId) => {
               return (
                  <div key={imgId} className={s.btnContainer}>
                     <div className={s.imgContainer}>
                        <img src={url} alt="" />
                     </div>
                     <div
                        className={s.delBtn}
                        onClick={() => deleteImg(imgId)}
                     ></div>
                  </div>
               )
            }) : <div className={s.imgContainer}>
               <img
                  src={props.defaultFoto}
                  onDrop={handleDrop}
                  onDragEnter={handleDragEmpty}
                  onDragOver={handleDragEmpty}
               />
            </div>
         }
         <label
            htmlFor={props.htmlFor}
            className={`${s.imgContainer} ${s.addImg}`}
         ></label>
      </div>
   )
}
export default FileUploaderMany;