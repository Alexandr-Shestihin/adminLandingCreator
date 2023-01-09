import { API, API_ROUTER } from "../../../api";
import { toast } from "react-toastify";
import { SET_EVENTS_DATA } from "../../types";

export function getEvens() {
   return dispatch => {
      API.request({ ...API_ROUTER.events.getEvents })
         .then((res) => {
            console.log(res.events);
            setItemArray(res.events);

            setRequestSuccess(true);
         })
         .catch(err => toast.error(err.data && err.data.message))
   }
}

export function setEvens(data) {
   return {
      type: SET_EVENTS_DATA,
      payload: data
   }
}
