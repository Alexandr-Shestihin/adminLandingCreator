import React from "react";
import s from '../../comon/ComonAdmin.module.scss';

export const pageInfo = {
   filter: false,
   periodContainer: false,
}
export const titleHeader = ['Ad', 'Soyad', 'Ata Adı', 'Email', 'Telefon', 'Təvəllüd', 'Şəxsiyyət Vəsiqəsinin', 'Nick-name', 'Steam ID', 'Komandanın adı'];
export const headerItem = {
   "rows": [
      {
         "firstName": "Loading...",
         "lastName": "Loading...",
         "middleName": "Loading...",
         "username": "Loading...",
         "phone": "Loading...",
         "birthDate": "Loading...",
         "documentId": "Loading...",
         "nickname": "Loading...",
         "steamId": "Loading...",
         "teamName": "Loading...",
      },
   ]
}

/* export const btnEvensObj = {
   topBtn: {
      edit: 'Edit Event', img1: editImage, to1: '/admin/editEvent',
      create: 'Create Tournament', img2: createImage,
   },
   hiddenBtn: [
      { name: 'Statistics', img: statisticsImage },
      { name: 'Tournament List', img: tournamentsImage },
   ]
} */