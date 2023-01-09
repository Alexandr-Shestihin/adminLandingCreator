import { red } from "@material-ui/core/colors";
import React, { useState } from "react";
import s from './itemMatchesComponent.module.scss';
import Modal from "./modal/Modal";


const ItemMatchesComponent = (props) => {

   const compareScore = (thisScore, anotherScore) => {
      return thisScore > anotherScore ? <div className={s.green}>{thisScore}</div> : thisScore < anotherScore ? <div className={s.red}>{thisScore}</div> : <div>{thisScore}</div>
   }
   const [active, setActive] = useState(false);
   const [leftUserId, setLeftUserID] = useState(props.tournamentMember1.user?.id || props.tournamentMember1.team?.id);
   const [rightUserId, setRightUserID] = useState(props.tournamentMember2.user?.id || props.tournamentMember2.team?.id);


   /*  const compareStatusScore = (status) => {
       switch (status) {
          case 'Soon':
             return <div className={s.soon}>{status}</div>
 
          case 'Live':
             return <div className={s.live}>{status}</div>
          case 'Pause':
             return <div className={s.pause}>{status}</div>
          case 'End':
             return <div className={s.end}>{status}</div>
 
          default:
             break;
       }
    } */

   return (
      <div className={s.mainPlanModContainer}>

         <div className={s.module}>
            {active ? <Modal
               {...props}
               leftUserId={leftUserId}
               rightUserId={rightUserId}
               compareScore={compareScore}
               setActive={setActive}
               changeScore={props.changeScore}
               matchId={props.matchId}
            /> : false}
         </div>

         <div className={s.itemContainer} onClick={() => setActive(true)}>
            <div className={s.title}>{props.tournamentName}</div>

            <div className={s.scoreContainer}>

               <div className={s.team}>

                  {(props.tournamentMember1.user?.avatar || props.tournamentMember1.team?.logo) ? <div className={s.imageContainer}>
                     <img
                        src={props.tournamentMember1.user?.avatar || props.tournamentMember1.team?.logo}
                        alt="avatar logo" />
                  </div> : false}
                  <div className={`${s.titleTeam} ${s.titleTeam_left}`}>
                     {props.tournamentMember1.user?.nickname || props.tournamentMember1.team?.name}
                  </div>
               </div>


               <div className={s.titleContainer}>

                  <div className={s.infoContainer}>
                     <div className={s.gameName}>{props.groupsName}</div>
                     <div className={s.gameName}>{props.startedAt}</div>
                     <div className={s.gameName}>{`BO${props.games.games.length}`}</div>

                     <div className={s.score}>
                        <div className={s.titleScoreContainer}>
                           <div className={s.titleScore}>
                              {compareScore(props.tournamentMemberScore1, props.tournamentMemberScore2)}
                           </div>
                           -
                           <div className={s.titleScore}>
                              {compareScore(props.tournamentMemberScore2, props.tournamentMemberScore1)}
                           </div>
                        </div>
                        {/* <div className={s.scoreStatus}>{compareStatusScore(props.score.status)}</div> */}
                     </div>

                  </div>

               </div>


               <div className={`${s.team} ${s.team_right}`}>
                  {(props.tournamentMember2.user?.avatar || props.tournamentMember2.team?.logo) ? <div className={s.imageContainer}>
                     <img src={props.tournamentMember2.user?.avatar || props.tournamentMember2.team?.logo}
                        alt="avatar" />
                  </div> : false}
                  <div className={`${s.titleTeam} ${s.titleTeam_right}`}>
                     {props.tournamentMember2.user?.nickname || props.tournamentMember2.team?.name}
                  </div>
               </div>
            </div>

            <div className={s.tableContainer}>
               <div className={s.tableHeader}>
                  <div className={s.tTitle}></div>{props.games.games.map((el, i) => <div className={s.tTitle}>{`game ${i + 1}`}</div>)}
               </div>
               <div className={s.rowContainer}>
                  <div className={s.tTitle}>
                     {(props.tournamentMember1.user?.avatar || props.tournamentMember1.team?.logo) ? <div className={`${s.imageContainer} ${s.imageContainer_mini} `}>
                        <img
                           src={props.tournamentMember1.user?.avatar || props.tournamentMember1.team?.logo}
                           alt="avatar logo" />
                     </div> : false}
                  </div>

                  {props.games.games.map(el => <div className={s.tTitle}>{el.memberScore1}</div>)}
               </div>
               <div className={s.rowContainer}>
                  <div className={s.tTitle}>
                     {(props.tournamentMember1.user?.avatar || props.tournamentMember1.team?.logo) ? <div className={`${s.imageContainer} ${s.imageContainer_mini} `}>
                        <img
                           src={props.tournamentMember2.user?.avatar || props.tournamentMember2.team?.logo}
                           alt="avatar logo" />
                     </div> : false}

                  </div>
                  {props.games.games.map(el => <div className={s.tTitle}>{el.memberScore2}</div>)}
               </div>
            </div>

         </div>
      </div>
   )
}
export default ItemMatchesComponent;