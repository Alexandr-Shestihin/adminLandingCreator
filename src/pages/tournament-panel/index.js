import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ContentContainer from '../../components/ContentContainer/ContentContainer';

import { API, API_ROUTER } from "../../api";

import { FormattedMessage } from "react-intl";

import s from '../../comon/ComonAdmin.module.scss';
//обнуляющие стили
import "../../comon/_null_style.css";

//компоненты, из которых состоит страница 
import ProfilePanel from '../../components/AdminComponents/ProfilePanelComponent/index';
import HeaderAdmin from '../../components/AdminComponents/header-admin';
import ItemUserTask from '../../components/AdminComponents/item-user-task-component/itemUserTaskComponent';
import ItemMatchesComponent from '../../components/AdminComponents/item-matches-component/itemMatchesComponent';

//const
import { pageInfo, rosterList, matchesForPannel, dataMatchesOld } from "./const";
import { profileInfo } from "../../comon/comonConst";

const TournamentPanel = (props) => {
   const { pathname } = useLocation();
   const megaId = pathname.split('/tournamentPanel/')[1];//выводит id лендинга из URL

   const [dataMatches, setDataMatches] = useState(dataMatchesOld);
   const [tournamentId, setTournamentId] = useState(megaId);

   const [activeBtn, setActiveBtn] = useState(pageInfo.btnDefault);
   const onChangeActiveBtn = (e) => {
      setActiveBtn(e.target.value);
   }
   const checkTabs = (activeBtn) => {
      switch (activeBtn) {
         case 'Roster list':
            return <ItemUserTask rosterList={rosterList} />
            break;
         case 'Bracket':
            return <div>Тут будут брекет</div>
            break;
         case 'Matches':
            return <div>{dataMatches && <div className={s.filterContainer}>
               <select name="lavel" onChange={(e) => dataMatchesFilter(e.target.value)}>
                  <option value={'All'} className={s.matchesOptions}>
                     All
                     <FormattedMessage id="tournamentPanel.pageName.title" tagName="span" />
                  </option>
                  {dataMatches?.rounds?.map((el, i) => <option key={i} value={el.name} className={s.matchesOptions}>
                     {el.name}
                  </option>)}
               </select>
            </div>}
               {dataMatches.matches.map((u, i) => <ItemMatchesComponent
                  key={u.tournament.id}

                  tournamentLogo={u.tournament.logo}
                  tournamentName={u.tournament.name}
                  nameGame={u.game.name}
                  gameLogo={u.game.logo}
                  tournamentMember1={u.tournamentMember1 || 0}
                  tournamentMember2={u.tournamentMember2 || 0}
                  tournamentMemberScore1={u.tournamentMemberScore1}
                  tournamentMemberScore2={u.tournamentMemberScore2}
                  games={u.games}
                  groupsName={u.round.name}
                  startedAt={u.startedAt}
                  matchId={u.matchId}
                  changeScore={props.changeScore}
               />)}
            </div>
            break;

         default:
            break;
      }
   }

   const getDataMatches = () => {
      let params = {
         ...API_ROUTER.Tournaments.getTournamentsMatches,
         pathKeys: {
            tournamentId: tournamentId
         },
      };

      API.request(params)
         .then((res) => {
            console.log(res)
            setDataMatches(res)
         })
         .catch(err => console.log(err))
   }

   useEffect(() => {
      getDataMatches()

   }, []);

   const changeScore = (matchId, winner, newGameResult) => {

      /* console.log(newGameResult) */
      let params = {
         ...API_ROUTER.Tournaments.setScoreTournamentsMatches,
         pathKeys: {
            matchId: matchId,
         },

         data: {
            matchWinner: winner,
            gameResult: newGameResult
         }
      };

      API.request(params)
         .then((res) => {
            console.log(res)
            setDataMatches(res)
         })
         .catch(err => console.log(err))
   }

   const dataMatchesFilter = (parameter) => {
      let params = {
         ...API_ROUTER.Tournaments.getTournamentsMatches,
         pathKeys: {
            tournamentId: tournamentId
         },
      };

      API.request(params)
         .then((res) => {
            let newArr = {
               ...res,
               matches: [...res.matches.filter(el => parameter === "All" ? true : (el.round.name === parameter))]
            };
            setDataMatches(newArr)
         })
         .catch(err => console.log(err))


   }

   return (
      <div className={s.evensPageContainer}>

         <ProfilePanel
            pageInfo={pageInfo}
            profileInfo={profileInfo} />
         <ContentContainer
            MainBlock={true}
            MainCreateBlock={null}
         >
            <HeaderAdmin
               pageName={pageInfo.pageName}
               toROUTER={pageInfo.toROUTER}
               addBtn={pageInfo.addBtn}
               periodContainer={pageInfo.periodContainer}
               btnInfo={pageInfo?.btnInfo}
               filter={pageInfo.filter}
               setActiveBtn={setActiveBtn}
               activeBtn={activeBtn}
               onChangeActiveBtn={onChangeActiveBtn}
            />
            <div className={s.mainScrollContainer}>
               <div className={s.scrollContainer}>
                  <div className={s.tabsContainer}>{checkTabs(activeBtn)}</div>
               </div>
            </div>
         </ContentContainer>
      </div>

   )
}
export default TournamentPanel;