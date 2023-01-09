import React, { useState } from "react";
import s from './modal.module.scss';
import closeButtonImage from '../../../../img/MainBlock/closeButton.svg';

const Modal = (props) => {

   const deepCopyData = (data) => {
      return JSON.parse(JSON.stringify(data));
   }

   const getData = (data) => {
      const newArray = deepCopyData(data);

      for (var key in newArray) {
         newArray[key].memberScore1 = Number(newArray[key].memberScore1);
         newArray[key].memberScore2 = Number(newArray[key].memberScore2);
         newArray[key].id = key;
      }
      return newArray;
   }

   const [newGames, setNewGames] = useState(getData(props.games.games));
   const [error, setError] = useState(false);
   const [winner, setWinner] = useState('pending');
   const [score1, setScore1] = useState(props.tournamentMemberScore1);
   const [score2, setScore2] = useState(props.tournamentMemberScore2);

   const onChangeMemberScore1 = (e) => {
      const id = e.target.id;
      const result = Number(e.target.value);

      if (Number.isNaN(result)) {
         setError(true)
      } else {
         setError(false)
         const newArray = deepCopyData(newGames);
         for (var key in newArray) {
            if (newArray[key].id === id) newArray[key].memberScore1 = Number(e.target.value);
         }
         setNewGames(newArray);
      }
   }

   const onChangeMemberScore2 = (e) => {
      const id = e.target.id;
      const result = Number(e.target.value);

      if (Number.isNaN(result)) {
         setError(true)
      } else {
         setError(false)
         const newArray = deepCopyData(newGames);
         for (var key in newArray) {
            if (newArray[key].id === id) newArray[key].memberScore2 = Number(e.target.value);
         }
         setNewGames(newArray);
      }
   }

   const processArrayForDatabase = (arr) => {
      let newArray = deepCopyData(arr)
      for (let key in newArray) {
         newArray[key].memberScore1 = String(newArray[key].memberScore1)
         newArray[key].memberScore2 = String(newArray[key].memberScore2)
         delete newArray[key].id;
      }
      return newArray;
   }

   const confirmAndCloseModal = () => {
      props.changeScore(props.matchId, winner, processArrayForDatabase(newGames));
      props.setActive(false);
   }

   return (
      <div className={s.modalContainer}>
         <div className={s.modal}>

            <div className={s.closeButton}
               onClick={() => props.setActive(false)}>
               <img src={closeButtonImage} alt="close" />
            </div>

            <div className={s.contantContainer}>
               <div className={s.infoContainer}>
                  <div className={s.teamContainer}>
                     {(props.tournamentMember1.user?.avatar || props.tournamentMember1.team?.logo) &&
                        <div className={s.imageContainer}>
                           <img
                              src={props.tournamentMember1.user?.avatar || props.tournamentMember1.team?.logo}
                              alt="avatar logo" />
                        </div>
                     }
                     <div className={s.infoTeamBlock}>
                        <div className={s.name}>{props.tournamentMember1.user?.nickname || props.tournamentMember1.team?.name}</div>
                     </div>
                  </div>

                  <div className={s.scoreInfoContainer}>
                     <div className={s.BOname}>{`Best of ${props.games.games.length}`}</div>
                     <div className={s.scoreComtainer}>
                        <div className={s.score}>{props.compareScore(score1, score2)}</div> -
                        <div className={s.score}>{props.compareScore(score2, score1)}</div>
                     </div>
                  </div>

                  <div className={s.teamContainer}>
                     {(props.tournamentMember1.user?.avatar || props.tournamentMember1.team?.logo) &&
                        <div className={s.imageContainer}>
                           <img
                              src={props.tournamentMember2.user?.avatar || props.tournamentMember2.team?.logo}
                              alt="avatar logo" />
                        </div>
                     }
                     <div className={s.infoTeamBlock}>
                        <div className={s.name}>{props.tournamentMember2.user?.nickname || props.tournamentMember2.team?.name}</div>
                     </div>
                  </div>
               </div>

               {error && <div className={s.err}>Only numbers!</div>}
               <div className={s.inputContainer}>
                  {newGames.map(u => <div className={s.inputItem}>
                     <input
                        className={error && s.errInput}
                        type="text"
                        value={u.memberScore1}
                        id={u.id}
                        onChange={onChangeMemberScore1}
                     />
                     <span>{`Game ${+u.id + 1}`}</span>
                     <input
                        className={error && s.errInput}
                        type="text"
                        value={u.memberScore2}
                        id={u.id}
                        onChange={onChangeMemberScore2}
                     />
                  </div>
                  )}
               </div>

            </div>
            <div className={s.radioContainer}>
               <div
                  className={winner === 'first' ? `${s.radio} ${s.winner}` : `${s.radio}`}
                  onClick={() => setWinner('first')}
               ></div>
               <span>Who is winner? (Optional)</span>
               <div
                  className={winner === 'second' ? `${s.radio} ${s.winner}` : `${s.radio}`}
                  onClick={() => setWinner('second')}
               ></div>
            </div>
            <div className={s.buttonContainer}>
               {error || <button onClick={confirmAndCloseModal}>Confirm</button>}
            </div>
         </div>

      </div>
   )
}
export default Modal;