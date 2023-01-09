import {combineReducers} from 'redux';
import showAuthModal from "./particles/authModal";
import showRegisterModal from './particles/registerModal';
import showAuthBlockedModal from './particles/authBlocked';
import userOnline from "./particles/userOnline";
import spinner from "./particles/spinner";
import userData from "./particles/userData";
import userNotifications from "./particles/userNotifications";
import countriesList from "./particles/countriesList";
import platformsList from "./particles/platformsList";
import devicesList from "./particles/devicesList";
import activeChat from "./particles/activeChat";
import presetChatMessage from "./particles/presetChatMessage";
import scrollTo from "./particles/scrollTo";
import interfaceLang from "./particles/interfaceLang";
import steamData from "./particles/steamData";
import notificationModal from "./particles/notificationModal";

const reducers = combineReducers({
    showAuthModal,              // show auth modal
    showRegisterModal,          // switch auth modal to register (use before 'showAuthModal')
    showAuthBlockedModal,       // switch auth modal to user blocked (use before 'showAuthModal')
    userOnline,                 // is user logged in?
    userData,                   // user data object
    userNotifications,          // all user notifications
    countriesList,              // list of countries used on selects
    platformsList,              // list of platforms used on selects
    devicesList,                // list of devices used on selects
    spinner,                    // XHR spinner
    activeChat,                 // target chat id
    presetChatMessage,          // preset chat message on "Offer to play"
    scrollTo,                   // hot fix, should be removed later
    interfaceLang,              // selected interface lang, 'en' is default
    steamData,                  // steam profile data, used on steam registration
    notificationModal           // notification modal
});

export default reducers;