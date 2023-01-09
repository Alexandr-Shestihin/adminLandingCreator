import { dataUriToBlob } from "../helpers";
import { API, API_ROUTER } from "../api/index";

export const uploadData = (img, id, name) => {
   const blob = dataUriToBlob(img);
   const formData = new FormData();
   formData.append("media", blob);
   formData.append("mediaType", name);
   formData.append("mediaOwnerId", id);
   return API.request(
      {
         ...API_ROUTER.media,
         headers: {
            "Content-type": "multipart/form-data",
         },
         data: formData,
      },
      true
   );

}
export const onChangeDudlePhotos = (e, id, fn, data) => {
   let newValue = [...data];
   newValue[id] = e;
   fn(newValue);
}
export const addPhotos = (value, fn) => {
   let newValue = [...value];
   newValue.push('');
   fn(newValue);
}
export const delPhoto = (id, fn, data) => {
   let newValue = data.filter(el => el != data[id]);
   fn(newValue);
}
