import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import { ROUTER } from "../../config";
import { isAuthenticated } from "../../helpers";

import EvensPage from "../../pages/evens-page/index";
import CommunityPage from "../../pages/community-page/index";
import TournamentsPage from "../../pages/tournaments-page/index";
import RequestsPage from "../../pages/requests-page/index";
import MatchesPage from "../../pages/matches-page/index";
import EditEvent from "../../pages/edit-event-page/index";
import EditCommunity from "../../pages/edit-community-page/index";
import EditTournament from "../../pages/edit-tournament-page/index";
import TournamentPanel from "../../pages/tournament-panel/index";

import Homepage from "../../pages/homepage";
import Login from "../../pages/login";
import Ratings from "../../pages/ratings";
// import CityBattles from "../../pages/city-battle";
import FindFriends from "../../pages/community/find-friends";
import MyFriends from "../../pages/community/my-friends";
import Community from "../../pages/community/community";
import CreateCommunity from "../../pages/community/community/create-community";
import EarnSpend from "../../pages/earn-spend";
import Profile from "../../pages/id";
import Messenger from "../../pages/messenger";
import Settings from "../../pages/settings";
import Password from "../profile/password";
import ConnectSteamGame from "../../pages/steam";
import SteamRegistration from "../../pages/steam-registration";
import ResetPassword from "../../pages/password-reset";
import EmailConfirm from "../../pages/email-confirm";
import Comparison from "../../pages/comparison";
import PageNotFound from "../../pages/page-not-found";
import NeedAuth from "../../pages/need-auth";
import { CreateTeam, FindTeam, TeamPage, TeamInvite } from "../../pages/teams";
import { Tournaments, TournamentDetails, Match } from "../../pages/tournaments";
import LandingEuroPage from "../../pages/landing-page";
import CreateLandingPage from "../../pages/create-landing-page";
import Landings from "../../pages/landings";
import MembersPage from "../../pages/members-page";
import Support from "../../pages/support";

const StyledMain = styled.main`
    flex: 1;
`;

const PrivateRoute = ({ children, ...rest }) => {

   if (!isAuthenticated()) {
      return <NeedAuth />
   }

   return (
      <Route {...rest} />
   )
}

const Main = () => {
   return (
      <StyledMain>
         <Switch>
            <PrivateRoute path={ROUTER.membersPage} exact component={MembersPage} />
            <PrivateRoute path={ROUTER.evensPage} exact component={EvensPage} />
            <PrivateRoute path={ROUTER.communitysPage} exact component={CommunityPage} />
            <PrivateRoute path={ROUTER.createCommunity} exact component={EditCommunity} />
            <PrivateRoute path={ROUTER.tournamentsPage} exact component={TournamentsPage} />
            <PrivateRoute path={ROUTER.requestsPage} exact component={RequestsPage} />
            <PrivateRoute path={ROUTER.matchesPage} exact component={MatchesPage} />
            <PrivateRoute path={ROUTER.createEvent} exact component={EditEvent} />
            <PrivateRoute path={ROUTER.createTournament} exact component={EditTournament} />
            <PrivateRoute path={ROUTER.tournamentPanel} exact component={TournamentPanel} />
            <PrivateRoute path={ROUTER.landingEuro} exact component={LandingEuroPage} />
            <PrivateRoute path={[ROUTER.editLanding, ROUTER.createLanding]} exact component={CreateLandingPage} />
            <PrivateRoute path={ROUTER.landings} exact component={Landings} />
            {/* <Route path={ROUTER.editEvent} exact component={MatchesPage} /> */}

            <Route path={ROUTER.homepage} exact component={Homepage} />
            <Route path={ROUTER.ratings} exact component={Ratings} />
            <Route path={ROUTER.earnSpend} exact component={EarnSpend} />
            <Route path={ROUTER.id} exact component={Profile} />
            <Route path={ROUTER.resetPassword} exact component={ResetPassword} />
            <Route path={ROUTER.emailConfirm} exact component={EmailConfirm} />
            <Route path={ROUTER.steamRegistration} exact component={SteamRegistration} />
            <Route path={ROUTER.comparison} exact component={Comparison} />
            <Route path={ROUTER.teams.invite} exact component={TeamInvite} />
            <Route path={ROUTER.support} exact component={Support} />

            <Route path={ROUTER.tournaments.tournaments} exact component={Tournaments} />
            <Route path={ROUTER.tournaments.details} exact component={TournamentDetails} />
            <PrivateRoute path={ROUTER.tournaments.match} exact component={Match} />

            <PrivateRoute path={ROUTER.profile.settings} exact component={Settings} />
            <PrivateRoute path={ROUTER.profile.password} exact component={Password} />
            <PrivateRoute path={ROUTER.steam} exac component={ConnectSteamGame} />
            <PrivateRoute path={ROUTER.messenger} exact component={Messenger} />
            <PrivateRoute path={ROUTER.community.community} exact component={Community} />
            <PrivateRoute path={ROUTER.community.findFriends} exact component={FindFriends} />
            <PrivateRoute path={ROUTER.community.myFriends} exact component={MyFriends} />
            <PrivateRoute path={ROUTER.community.createCommunity} exact component={CreateCommunity} />
            <PrivateRoute path={ROUTER.teams.create} exact component={CreateTeam} />
            <PrivateRoute path={ROUTER.teams.edit} exact render={(props) => (<CreateTeam {...props} editMode />)} />
            <PrivateRoute path={ROUTER.teams.find} exact component={FindTeam} />
            <PrivateRoute path={ROUTER.teams.team} exact component={TeamPage} />

            <Route path="*" exact component={PageNotFound} />
         </Switch>
      </StyledMain>
   )
}

export default Main;
