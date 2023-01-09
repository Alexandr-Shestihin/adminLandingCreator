import React from "react";
import s from '../../comon/ComonAdmin.module.scss';

import { FormattedMessage } from "react-intl";

export const pageInfo = {
   pageName: <FormattedMessage id="members.title.pageName" tagName="span" />,
   filter: false,
   periodContainer: false,
}
export const titleHeader = [
   <FormattedMessage id="members.title.nickname" tagName="span" />,
   <FormattedMessage id="members.title.firstName" tagName="span" />,
   <FormattedMessage id="members.title.lastName" tagName="span" />,
   <FormattedMessage id="members.title.country" tagName="span" />,
   <FormattedMessage id="members.title.city" tagName="span" />,
   <FormattedMessage id="members.title.verified" tagName="span" />,
   <FormattedMessage id="members.title.pro" tagName="span" />,
   <FormattedMessage id="members.title.banned" tagName="span" />
];
export const headerItem = {
   "rows": [
      {
         "nickname": "Loading...",
         "firstName": "Loading...",
         "lastName": "Loading...",
         "country": "Loading...",
         "city": "Loading...",
         "verified": "Loading...",
         "pro": "Loading...",
         "banned": "Loading...",
      },
   ]
}

export const getUsersOfline = () => {
   const users = [
      {
         "id": "01GDD64C3N6W7R15AF95J0Z6HJ",
         "username": "ghhgh@hdhdh.com",
         "firstName": "example",
         "lastName": "",
         "middleName": "",
         "phone": "",
         "birthDate": "2022-09-20",
         "document": "",
         "nickname": "",
         "teamName": "",
         "steamId": "",
         "city": "",
         "country": "VE",
         "verified": false,
         "pro": false,
         "banned": false
      },
      {
         "id": "01GDAR2ZD9VD30YNV7GZCE5HFR",
         "username": "ytreew@mail.com",
         "firstName": "example",
         "lastName": "",
         "middleName": "",
         "phone": "",
         "birthDate": "2022-09-19",
         "document": "",
         "nickname": "",
         "teamName": "",
         "steamId": "",
         "city": "",
         "country": "BH",
         "verified": false,
         "pro": false,
         "banned": false
      },
      {
         "id": "01GDAQXSM3GPRCSQH83P6F4A6N",
         "username": "jenny@mail.com",
         "firstName": "example",
         "lastName": "",
         "middleName": "",
         "phone": "",
         "birthDate": "2022-09-19",
         "document": "",
         "nickname": "",
         "teamName": "",
         "steamId": "",
         "city": "",
         "country": "USA",
         "verified": false,
         "pro": false,
         "banned": false
      },
      {
         "id": "01GDAPSCJ6A0RXHZJ3KZSE3AF9",
         "username": "khimichv@gmail.com",
         "firstName": "example",
         "lastName": "",
         "middleName": "",
         "phone": "",
         "birthDate": "2022-09-19",
         "document": "",
         "nickname": "",
         "teamName": "",
         "steamId": "",
         "city": "",
         "country": "ZM",
         "verified": false,
         "pro": false,
         "banned": false
      },
      {
         "id": "01GD4VTNQBAPHHQ6P08KYEC1GR",
         "username": "fabiorhc92@gmail.com",
         "firstName": "example",
         "lastName": "",
         "middleName": "",
         "phone": "",
         "birthDate": "2022-09-17",
         "document": "",
         "nickname": "",
         "teamName": "",
         "steamId": "",
         "city": "",
         "country": "BR",
         "verified": false,
         "pro": false,
         "banned": false
      },
      {
         "id": "01GD2YQ9BR2518SM8HQ0M1X1SC",
         "username": "eratest16092022@gmail.com",
         "firstName": "example",
         "lastName": "",
         "middleName": "",
         "phone": "",
         "birthDate": "2022-09-16",
         "document": "",
         "nickname": "",
         "teamName": "",
         "steamId": "",
         "city": "",
         "country": "AX",
         "verified": false,
         "pro": false,
         "banned": false
      },
      {
         "id": "01GD2PWHQA4T54P74TAK4RGR6S",
         "username": "vabati8447@bongcs.com",
         "firstName": "example",
         "lastName": "",
         "middleName": "",
         "phone": "",
         "birthDate": "2022-09-16",
         "document": "",
         "nickname": "",
         "teamName": "",
         "steamId": "",
         "city": "",
         "country": "AL",
         "verified": false,
         "pro": false,
         "banned": false
      },
      {
         "id": "01GD2PR7256SM0V81WNY18ZGY6",
         "username": "gijefo1509@laluxy.com",
         "firstName": "example",
         "lastName": "",
         "middleName": "",
         "phone": "",
         "birthDate": "2022-09-16",
         "document": "",
         "nickname": "",
         "teamName": "",
         "steamId": "",
         "city": "",
         "country": "AF",
         "verified": false,
         "pro": false,
         "banned": false
      },
      {
         "id": "01GD2NSZ66HV1FFCCRXBCM5XMY",
         "username": "IgnatBobrovich10158554218586761",
         "firstName": "example",
         "lastName": "",
         "middleName": "",
         "phone": "",
         "birthDate": "",
         "document": "",
         "nickname": "",
         "teamName": "",
         "steamId": "",
         "city": "",
         "country": "",
         "verified": false,
         "pro": false,
         "banned": false
      },
      {
         "id": "01GD26TMDHX7DMAED3F9WEZVHB",
         "username": "ArtemZakharov2976059826030508",
         "firstName": "example",
         "lastName": "",
         "middleName": "",
         "phone": "",
         "birthDate": "",
         "document": "",
         "nickname": "",
         "teamName": "",
         "steamId": "",
         "city": "",
         "country": "",
         "verified": false,
         "pro": false,
         "banned": false
      },
      {
         "id": "01GD1RM5K2FCZXD8XESTVR6RGH",
         "username": "vebeb73713@keyido.com",
         "firstName": "example",
         "lastName": "",
         "middleName": "",
         "phone": "",
         "birthDate": "2022-09-15",
         "document": "",
         "nickname": "",
         "teamName": "",
         "steamId": "",
         "city": "",
         "country": "AX",
         "verified": false,
         "pro": false,
         "banned": false
      }
   ]
   return users;
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