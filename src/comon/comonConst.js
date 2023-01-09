import editImage from "../img/MainBlock/EditEvent.png";
import statisticsImage from "../img/MainBlock/Statistics.png";
import bracketImage from "../img/MainBlock/Bracket.png";
import rosterImage from "../img/MainBlock/Roster.png";
import upload from '../img/MainCreateBlock/Upload.png';

import { FormattedMessage } from "react-intl";

export const uploadImg = upload;

export const profileInfo = {
   userName: 'ADMINISTRATOR',
}
export const chatInfo = {
   countUsersOnline: 11,
   isOnline: true,
}
export const pageMenu = [
   { name: <FormattedMessage id="menu.btn1" tagName="span" />, id: 1, },
   { name: <FormattedMessage id="menu.btn2" tagName="span" />, id: 2, },
   { name: <FormattedMessage id="menu.btn3" tagName="span" />, id: 3, },
   { name: <FormattedMessage id="menu.btn4" tagName="span" />, id: 4, },
]
export const itemConstArray = [
   {
      id: 1,
      name: 'Loading...',
      endedAt: 'Loading...',
      startedAt: 'Loading...',
   },
]
export const itemConstArrayLandings = [
   {
      id: 1,
      name: [{ n: 'Loading...' }],
      active_at: 'Loading...',
      ended_at: 'Loading...',
      domain: 'Loading...',
   },
]
export const btnTournamentsObj = {
   topBtn: {
      edit: <FormattedMessage id="tournaments.btn.topBtn.edit" tagName="span" />, img1: statisticsImage, to1: '/admin/tournaments/tournamentPanel/',
      create: <FormattedMessage id="tournaments.btn.topBtn.create" tagName="span" />, img2: null,
   },
   hiddenBtn: [
      { name: <FormattedMessage id="tournaments.btn.hiddenBtn.name1" tagName="span" />, img: editImage },
      { name: <FormattedMessage id="tournaments.btn.hiddenBtn.name2" tagName="span" />, img: bracketImage },
      { name: <FormattedMessage id="tournaments.btn.hiddenBtn.name3" tagName="span" />, img: rosterImage },
   ]
}
export const btnLandingsObj = {
   topBtn: {
      edit: <FormattedMessage id="landings.topBtn.edit" tagName="span" />, img1: editImage, to1: '/admin/landings/editLanding/',
   },
}
export const setPaginatorDate = (lastPage, currentPage, setPagesCount, setPages, setCurrentPage) => {
   setPagesCount(lastPage)
   let newArr = [];
   for (let i = 1; i <= lastPage; i++) {
      newArr.push(i);
   }
   setPages(newArr);
   setCurrentPage(currentPage);
}
export const convertDateISO8601 = (value) => {
   return value.toISOString().replace("T", " ").split(' ', 1)[0];
}