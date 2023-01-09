import React from "react";
import s from './itemUserTaskComponent.module.scss';

const itemUserTaskComponent = (props) => {
   const showIndicator = (value) => {
      if (value === 'New') {
         return <div className={`${s.indicator} ${s.red}`}></div>
      } else if (value === 'Taken') {
         return <div className={`${s.indicator} ${s.yellow}`}></div>
      } else if (value === 'Closed') {
         return <div className={`${s.indicator} ${s.green}`}></div>
      }
   }
   const showCapitan = (array) => {
      var positiveArr = array.filter(function (number) {
         return number.role === 'capitan';
      });
      let value = positiveArr.map(u => u.nickname);
      return value.join('');
   }
   return (
      <>
         {props.rosterList ? <div>

            <div className={s.mainTitle}>
               <div className={`${s.mainTtem} ${s.itemLittle}`}>№</div>
               <div className={s.mainTtem}>Roster Name</div>
               <div className={`${s.mainTtem}`}>Captain Name</div>
               <div className={`${s.mainTtem}`}>Operator</div>
               <div className={`${s.mainTtem}`}>Status </div>
               <div className={`${s.mainTtem}`}>Chat</div>
            </div>

            {props.rosterList.members?.map(u =>
               <div className={`${s.tasksRow} ${u.id % 2 === 0 ? s.even : false}`}>
                  <div className={s.item}>
                     {u.id}
                  </div>
                  <div className={s.item}>
                     {u.team?.name || u.user?.nickname}
                  </div>
                  <div className={`${s.item}`}>

                     {u.team ? showCapitan(u.team.roster) : u.user.nickname}

                  </div>
                  <div className={`${s.item}`}>{u.moderation?.moderateBy}</div>
                  <div className={`${s.item}`}>
                     status
                  </div>
                  <div className={s.item}>
                     chat
                     {/* <div className={s.statusContainer}>
                        {showIndicator(u.status)}
                        {u.status}
                     </div> */}
                  </div>
               </div>
            )
            }
         </div > : <div>

            <div className={s.mainTitle}>
               <div className={s.mainTtem}>User</div>
               <div className={s.mainTtem}>Type</div>
               <div className={`${s.mainTtem} ${s.itemLittle}`}>Date</div>
               <div className={`${s.mainTtem} ${s.itemLittle}`}>Operator</div>
               <div className={`${s.mainTtem} ${s.itemMasage}`}>Message </div>
               <div className={s.mainTtem}>Status</div>
            </div>

            {props.usersTasks?.map(u =>
               <div className={`${s.tasksRow} ${u.id % 2 === 0 ? s.even : false}`}>
                  <div className={s.item}>
                     <div className={s.imgContainer}>
                        <img src={u.userImg} alt="userImage" />
                     </div>
                  </div>
                  <div className={s.item}>
                     <div className={`${s.typeContainer} ${u.typeTask === 'Game conflict' ? s.conflict : s.problem}`}>
                        <p>{u.typeTask}</p>
                     </div>
                  </div>
                  <div className={`${s.item} ${s.itemLittle}`}>{u.date}</div>
                  <div className={`${s.item} ${s.itemLittle}`}>{u.operator}</div>
                  <div className={`${s.item} ${s.itemMasage}`}>
                     <div className={s.textContainer}>{u.message}</div>
                  </div>
                  <div className={s.item}>
                     <div className={s.statusContainer}>
                        {showIndicator(u.status)}
                        {u.status}
                     </div>
                  </div>
               </div>
            )
            }
         </div >}

      </>
   )
}
export default itemUserTaskComponent;

