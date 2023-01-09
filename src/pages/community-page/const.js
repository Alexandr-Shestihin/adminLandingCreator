import editImage from "../../img/MainBlock/EditEvent.png";
import createImage from "../../img/MainBlock/buttonCross.png";
import statisticsImage from "../../img/MainBlock/Statistics.png";
import tournamentsImage from "../../img/MainBlock/Tournaments.png";

import { FormattedMessage } from "react-intl";

export const pageInfo = {
   pageName: <FormattedMessage id="communitys.pageName.title" tagName="span" />,
   filter: false,
   periodContainer: true,
   addBtn: <FormattedMessage id="communitys.btn.addEvent" tagName="span" />,
   toROUTER: 'createCommunity',
   pro: true,
   live: true,
}
export const btnEvensObj = {
   topBtn: {
      edit: <FormattedMessage id="communitys.topBtn.edit" tagName="span" />, img1: editImage, to1: '/admin/editEvent',
      create: <FormattedMessage id="events.topBtn.create" tagName="span" />, img2: createImage,
   },
   hiddenBtn: [
      { name: <FormattedMessage id="events.hiddenBtn.btn1" tagName="span" />, img: statisticsImage },
      { name: <FormattedMessage id="events.hiddenBtn.btn2" tagName="span" />, img: tournamentsImage },
   ]
}