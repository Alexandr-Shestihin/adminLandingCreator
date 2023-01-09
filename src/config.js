require('dotenv').config();

export const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
export const API_URL = process.env.REACT_APP_API_URL;
export const GTM_ID = process.env.REACT_APP_GTM_ID;

export const STEAM_GAMES_CODES = {
   'cs-go': 730,
   'dota2': 570
};

export const INTERFACE_LANGUAGES = [
   'en',
   'ru',
   'pt',
   'fr',
   'es',
]

export const INTERFACE_LANGUAGES_OPTIONS = [
   {
      label: 'English',
      value: 'en'
   },
   {
      label: 'Русский',
      value: 'ru'
   },
   {
      label: 'Português',
      value: 'pt'
   },
   {
      label: 'Français',
      value: 'fr'
   },
   {
      label: 'Español',
      value: 'es'
   },
]

export const LANGUAGE_SPEAK_OPTIONS = [
   {
      label: 'German',
      value: 'de'
   },
   {
      label: 'English',
      value: 'en'
   },
   {
      label: 'French',
      value: 'fr'
   },
   {
      label: 'Italian',
      value: 'it'
   },
   {
      label: 'Portuguese',
      value: 'pt'
   },
   {
      label: 'Russian',
      value: 'ru'
   },
   {
      label: 'Spanish',
      value: 'es'
   },
   {
      label: 'Ukrainian',
      value: 'ua'
   }
]

export const SOCIAL_LINKS = {
   instagram: 'https://www.instagram.com/PassportGG',
   facebook: 'https://www.facebook.com/PassportGG',
   twitter: 'https://twitter.com/PassportGG',
   telegram: 'https://t.me/PassportGG',
   vk: 'https://vk.com/passportgg'
}

export const ROUTER = {
   membersPage: '/admin/members',
   communitysPage: '/admin/community',
   createCommunity: '/admin/community/createCommunity',
   evensPage: '/admin/events',
   tournamentsPage: '/admin/tournaments',
   requestsPage: '/admin/requests',
   matchesPage: '/admin/matches',
   logsPage: '/admin/logs',
   createEvent: '/admin/events/createEvent',
   createTournament: '/admin/tournaments/createTournament',
   editEvent: '/admin/editEvent',
   tournamentPanel: '/admin/tournaments/tournamentPanel/:id?',
   landingEuro: '/admin/landingEuro',
   landings: '/admin/landings',
   createLanding: '/admin/landings/createLanding',
   editLanding: '/admin/landings/editLanding/:id?',
   homepage: '/',
   notFound: '/404',
   login: '/login',
   support: '/contactUs',
   launcher: '/launcher',
   ratings: '/ratings/:game?',
   // cityBattle: '/city-battle/:battleUuid?/:details?/:city?',
   community: {
      findFriends: '/find-friends',
      myFriends: '/my-friends',
      community: '/communities/:communityUuid?',
      createCommunity: '/create-community'
   },
   earnSpend: '/earn-spend',
   id: '/id/:url/:idCard?',
   messenger: '/messenger',
   comparison: '/comparison',
   steam: '/steam/:gameCode',                      // game connect
   steamRegistration: '/steam/registration',       // registration
   resetPassword: '/password/reset',
   emailConfirm: '/email/confirm',
   profile: {
      settings: '/profile/settings',
      password: '/profile/password'
   },
   tournaments: {
      tournaments: '/tournaments',
      details: '/tournaments/tournament/:tournamentUuid/:activeTab?',
      match: '/tournaments/match/:matchUuid'
   },
   teams: {
      create: '/teams/create-team',
      find: '/teams/find-team/:game?',
      team: '/teams/team/:team?',
      edit: '/teams/edit/:team?',
      invite: '/teams/invite/:code?'
   }
};

export const TYPE_OPTIONS = [
   {
      label: 'battle.types.city',
      value: 'city'
   },
   {
      label: 'battle.types.country',
      value: 'country'
   },
   {
      label: 'battle.types.community',
      value: 'community'
   },
   {
      label: 'battle.types.company',
      value: 'company'
   }
]

export const TEAM_GAMES = ['cs-go', 'dota2', 'pes-mobile', 'cod-mobile', 'pubg-mobile']
