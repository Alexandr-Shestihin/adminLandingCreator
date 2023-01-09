import { SET_EVENTS_DATA } from "../../types";

const rd = (state = [], action) => {
   switch (action.type) {
      case SET_EVENTS_DATA:
         return state = action.payload;
      default:
         return state
   }
}

export default rd