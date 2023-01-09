import React, { FunctionComponent } from 'react';
import { Link, useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";
import { showAuthModal } from "../../../redux/actions/auth";
import { RootState } from "../../../redux/store";
import store from "../../../redux/store";
import { ROUTER } from "../../../config";
import Lock from "../../lock";
import { StyledNav, Dropdown } from './style';
import { isAuthenticated } from "../../../helpers";

const LoginButton = () => {
   return (
      <li>
         <a href={ROUTER.login} onClick={
            e => {
               e.preventDefault();
               store.dispatch(showAuthModal());
            }
         }>
            <FormattedMessage id="navigation.login" />
         </a>
      </li>
   )
};

interface INavLink {
   label: JSX.Element | string;
   to: string;
   activeOnlyWhenExact?: boolean;
   locked?: boolean;
}

const NavLink: FunctionComponent<INavLink> = ({
   label,
   to,
   activeOnlyWhenExact,
   locked
}) => {
   let match = useRouteMatch({
      path: to,
      exact: activeOnlyWhenExact
   });

   return (
      <li className={`${match ? "active" : ""} ${locked ? "locked" : ""}`}>
         <Link to={to}>
            {label}
            {locked && <Lock />}
         </Link>
      </li>
   );
}

interface IHeaderNav {
   navStatus?: boolean;
}

const HeaderNav: FunctionComponent<IHeaderNav> = ({ navStatus }) => {
   const isUserOnline = useSelector<RootState>(state => state.userOnline);

   return (
      <StyledNav navStatus={navStatus}>
         <NavLink to="/ratings" label={<FormattedMessage id="navigation.ratings" />} />
         <NavLink to="/tournaments" label={<FormattedMessage id="navigation.tournaments" />} />
         <NavLink to="/teams/find-team" label={<FormattedMessage id="navigation.teams" />} />
         {isAuthenticated() &&
            <Dropdown.Wrapper>
               <Link to="/communities">
                  <FormattedMessage id="navigation.community" />
               </Link>
               <Dropdown.Holder>
                  <Dropdown.List>
                     <NavLink to="/my-friends" label={<FormattedMessage id="navigation.myFriends" />} />
                     <NavLink to="/find-friends" label={<FormattedMessage id="navigation.findFriends" />} />
                     <NavLink to="/communities" label={<FormattedMessage id="navigation.community" />} />
                  </Dropdown.List>
               </Dropdown.Holder>
            </Dropdown.Wrapper>
         }
         {!isUserOnline && <LoginButton />}
      </StyledNav>
   )
}

export default HeaderNav;