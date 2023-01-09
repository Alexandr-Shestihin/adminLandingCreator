import userImg1 from "../../img/MainBlock/usersImages/user1.png";
import userImg2 from "../../img/MainBlock/usersImages/user2.png";
import userImg3 from "../../img/MainBlock/usersImages/user3.png";
import userImg4 from "../../img/MainBlock/usersImages/user4.png";

export const pageInfo = {
   pageName: 'Requests',
   filter: true,
   addBtn: false,
   periodContainer: true,
}
export const usersTasks = [
   { id: 1, userImg: userImg1, typeTask: 'Game conflict', date: '14.04.2022', operator: 'John Wick', message: 'Help Me', status: 'New' },
   { id: 2, userImg: userImg2, typeTask: 'Client problem', date: '14.04.2022', operator: 'John Wick', message: 'Hello', status: 'Taken' },
   { id: 3, userImg: userImg3, typeTask: 'Game conflict', date: '14.04.2022', operator: 'John Wick', message: 'I have a question, how do I access the site?', status: 'Closed' },
   { id: 4, userImg: userImg4, typeTask: 'Game conflict', date: '14.04.2022', operator: 'John Wick', message: 'Help Me', status: 'Closed' },
]
