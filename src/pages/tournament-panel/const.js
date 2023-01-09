import userImg1 from '../../img/MainBlock/usersImages/user1.png';
import userImg2 from '../../img/MainBlock/usersImages/user2.png';
import userImg3 from '../../img/MainBlock/usersImages/user3.png';
import userImg4 from '../../img/MainBlock/usersImages/user4.png';

import csGoImg from "../../img/MainBlock/logos/GSGOLogo.png";
import leftLogo from "../../img/MainBlock/logos/leftTeamLogo.png";
import rightLogo from "../../img/MainBlock/logos/rightTeamLogo.png";

import bracketImageActive from '../../img/MainBlock/Bracket.png';
import bracketImage from '../../img/MainBlock/bracketImageNoActive.png';
import activeRosterIcon from '../../img/MainBlock/rosterWhite.png';
import disableRosterIcon from '../../img/MainBlock/Roster.png';

import activeMatchesIcon from '../../img/Icon_for_menu/Icon_for_active_menu/Matches.png';
import disableMatchesIcon from '../../img/Icon_for_menu/Icon_for_disable_menu/Matches.png';

import { FormattedMessage } from "react-intl";

export const pageInfo = {
   pageName: <FormattedMessage id="tournamentPanel.pageName.title" tagName="span" />,
   filter: true,
   addBtn: false,
   periodContainer: false,
   btnDefault: 'Matches',
   btnInfo: [
      { name: <FormattedMessage id="tournamentPanel.btn.btnInfo.name1" tagName="span" />, iconActive: activeRosterIcon, icon: disableRosterIcon },
      { name: <FormattedMessage id="tournamentPanel.btn.btnInfo.name2" tagName="span" />, iconActive: bracketImageActive, icon: bracketImage },
      { name: <FormattedMessage id="tournamentPanel.btn.btnInfo.name3" tagName="span" />, iconActive: activeMatchesIcon, icon: disableMatchesIcon },
   ]
}

export const rosterList = {
   members: [
      {
         id: 1,
         moderation: {//может быть null если так, то статус New цвет синий, а остальные жёлтый
            bannedReason: 'Rejected',
            bannedReasonComment: '',
            moderateBy: 'Operator name'
         },
         user: {//может быть null
            id: 1,
            nickname: 'string',
            avatar: 'string'
         },// или или
         team: {//может быть null
            id: 1,
            name: 'Pe4enka',
            logo: 'string', //не нужно
            roster: [
               {
                  userId: 201,
                  nickname: 'John Wick',
                  role: 'capitan',
                  avatar: 'string'
               },
               {
                  userId: 202,
                  nickname: 'Fedya',
                  role: 'gamer',
                  avatar: 'string'
               },
               {
                  userId: 204,
                  nickname: 'Vasya',
                  role: 'reserve',
               }
            ]
         }
      },
      {
         id: 2,
         moderation: {//может быть null если так, то статус New цвет синий, а остальные жёлтый
            bannedReason: 'Rejected',
            bannedReasonComment: '',
            moderateBy: 'Operator name'
         },
         user: {//может быть null
            id: 1,
            nickname: 'string',
            avatar: 'string'
         },// или или
         team: {//может быть null
            id: 1,
            name: 'Pe4enka',
            logo: 'string', //не нужно
            roster: [
               {
                  userId: 201,
                  nickname: 'John Wick',
                  role: 'capitan',
                  avatar: 'string'
               },
               {
                  userId: 202,
                  nickname: 'Fedya',
                  role: 'gamer',
                  avatar: 'string'
               },
               {
                  userId: 204,
                  nickname: 'Vasya',
                  role: 'reserve',
               }
            ]
         }
      },
      {
         id: 3,
         moderation: {//может быть null если так, то статус New цвет синий, а остальные жёлтый
            bannedReason: 'Rejected',
            bannedReasonComment: '',
            moderateBy: 'Operator name'
         },
         user: {//может быть null
            id: 1,
            nickname: 'string',
            avatar: 'string'
         },// или или
         team: {//может быть null
            id: 1,
            name: 'Pe4enka',
            logo: 'string', //не нужно
            roster: [
               {
                  userId: 201,
                  nickname: 'John Wick',
                  role: 'capitan',
                  avatar: 'string'
               },
               {
                  userId: 202,
                  nickname: 'Fedya',
                  role: 'gamer',
                  avatar: 'string'
               },
               {
                  userId: 204,
                  nickname: 'Vasya',
                  role: 'reserve',
               }
            ]
         }
      },
   ]
}
export const matchesForPannel = [
   {
      id: 1, title: {
         logo: csGoImg, TournamentsName: 'Best Tournament', statusEvent: ' (First Event)', game: 'CS:GO', date: '14.04.2022, 23:00 (UTC +0)'
      },
      btn: false,
      leftTeam: {
         logo: leftLogo, title: 'Test Team',
      },
      score: { left: 0, right: 0, status: 'Soon' },
      rightTeam: {
         logo: rightLogo, title: 'Test Team',
      },
   },
   {
      id: 2, title: {
         logo: csGoImg, TournamentsName: 'Best Tournament', statusEvent: ' (First Event)', game: 'CS:GO', date: '13.04.2022, 18:00 (UTC +0)'
      },
      btn: false,
      leftTeam: {
         logo: leftLogo, title: 'Test Team',
      },
      score: { left: 1, right: 2, status: 'Live' },
      rightTeam: {
         logo: rightLogo, title: 'Test Team',
      },
   },
   {
      id: 3, title: {
         logo: csGoImg, TournamentsName: 'Best Tournament', statusEvent: ' (First Event)', game: 'CS:GO', date: '13.04.2022, 18:00 (UTC +0)'
      },
      btn: 'Request',
      leftTeam: {
         logo: leftLogo, title: 'Test Team',
      },
      score: { left: 2, right: 1, status: 'Pause' },
      rightTeam: {
         logo: rightLogo, title: 'Test Team',
      },
   }, ,
   {
      id: 4, title: {
         logo: csGoImg, TournamentsName: 'Best Tournament', statusEvent: ' (First Event)', game: 'CS:GO', date: '13.04.2022, 18:00 (UTC +0)'
      },
      btn: false,
      leftTeam: {
         logo: leftLogo, title: 'Test Team',
      },
      score: { left: 1, right: 2, status: 'End' },
      rightTeam: {
         logo: rightLogo, title: 'Test Team',
      },
   },
]
export const dataMatchesOld = {
   "matches": [
      {
         "matchId": "1ASDASDSSSSSFASFF14212",
         "tournament": {
            "id": "1ASDASD3123FASFF14212",
            "name": "Loading...",
            "logo": null
         },
         "game": {
            "id": "1ASDASD3123FASF4B4212",
            "name": "Loading...",
            "logo": null
         },
         "tournamentMember1": {
            "id": "1",
            "user": {
               "id": "1ASDASD3123FA2414212",
               "nickname": "",
               "avatar": null
            },
            "team": {
               "id": "1ASDASda123FASF4B4212",
               "name": "Loading...",
               "logo": null
            }
         },
         "tournamentMember2": {
            "id": "1",
            "user": {
               "id": "BASDASD3123FdaF414212",
               "nickname": "Loading...",
               "avatar": null
            },
            "team": {
               "id": "1ASDASDff123FASF41B212",
               "name": "Loading...",
               "logo": null
            }
         },
         "tournamentMemberScore1": "0",
         "tournamentMemberScore2": "0",
         "round": {
            "name": "Laoding..."
         },
         "games": {
            "games": [
               { "memberScore1": "-", "memberScore2": "-" },
               { "memberScore1": "-", "memberScore2": "-" },
               { "memberScore1": "-", "memberScore2": "-" },
               /* { "memberScore1": "1", "memberScore2": "0" },
               { "memberScore1": "0", "memberScore2": "0" },
               { "memberScore1": "1", "memberScore2": "1" },
               { "memberScore1": "1", "memberScore2": "0" },
               { "memberScore1": "0", "memberScore2": "0" },
               { "memberScore1": "1", "memberScore2": "1" }, */
            ]
         }
      },

   ],
   "rounds": [{
      "id": "1",
      "name": "Laoding..."
   },]
}
