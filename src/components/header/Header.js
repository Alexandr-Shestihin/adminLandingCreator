import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { ROUTER } from "../../config";
import { Container } from '../UI';
import HeaderNav from './header-nav';
import HeaderSearch from "./search";
import HeaderNavButton from "./HeaderNavButton";
import HeaderUserPanel from './HeaderUserPanel';
import logoLG from '../../img/logo-lg.png';
import logoSM from '../../img/logo-sm.png';

const StyledHeader = styled.header`
        background: #201941;
        margin: 0 0 10px;
        position: relative;
    `,
   StyledContainer = styled(Container)`
        width: 66%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 15px;
        @media (max-width: 1730px) {
            width: 60%;
         }
        @media (min-width: 768px) {
            height: 100px;
        }
    `,
   StyledLogo = styled.a`
        display: ${props => props.navStatus ? "none" : "block"};
        position: absolute;
        top: calc (50%-20px);
        left: 7px;
        
        .logo {
            margin-left: 25px;
            img {
                display: block;
                max-height: 40px;

                @media (max-width: 767px) {
                    max-height: 50px;
                }
            }

            &-sm {
                display: none;

                @media (max-width: 767px) {
                    display: block;
                }
            }

            &-lg {
                display: block;

                @media (max-width: 767px) {
                    display: none;
                }
            }
            }
    `,
   StyledControls = styled.div`
        display: flex;
        justify-content: flex-end;
        align-items: ${props => props.navStatus ? "flex-start" : "center"};
        width: 100%;

        @media (min-width: 768px) {
            align-items: center;
        }
    `;

const Header = ({ history, match }) => {
   const [navState, setNavState] = useState(false);
   const isUserOnline = useSelector(state => state.userOnline);
   const toHomepage = e => {
      e.preventDefault();
      history.push(isUserOnline ? '/admin/members' : ROUTER.homepage);
   };

   if (window.location.pathname === ROUTER.homepage) return null;

   return (
      <StyledHeader>
         <StyledContainer>
            <StyledLogo href="/" navStatus={navState} onClick={toHomepage}>
               <div className="logo logo-sm">
                  <img src={logoSM} alt="passport.gg" />
               </div>
               <div className="logo logo-lg">
                  <img src={logoLG} alt="passport.gg" />
               </div>
            </StyledLogo>
            <StyledControls navStatus={navState}>
               {/* <HeaderSearch /> */}
               {/* <HeaderNav navStatus={navState} /> */}
               <HeaderUserPanel navStatus={navState} />
               <HeaderNavButton navStatus={navState} clickHandler={setNavState} />
            </StyledControls>
         </StyledContainer>
      </StyledHeader>
   )
};

export default withRouter(Header);

