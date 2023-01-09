import csGoImg from "../../img/MainBlock/logos/GSGOLogo.png";
import leftLogo from "../../img/MainBlock/logos/leftTeamLogo.png";
import rightLogo from "../../img/MainBlock/logos/rightTeamLogo.png";

export const pageInfo = {
   pageName: 'Matches',
   filter: true,
   addBtn: false,
   periodContainer: true,
}
export const matches = [
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
