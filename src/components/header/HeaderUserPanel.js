import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { useSelector } from 'react-redux';

import { ClickOutside, getAvatar } from "../../helpers";
import { IconMessages, IconNotifications } from './icons';
import { ProfileNavItems } from "../profile/profile-nav";
import { ROUTER } from "../../config";
import Notifications from "./notifications";

const StyledHeaderUserPanel = styled.div`
        display: ${props => props.navStatus ? "none" : "flex"};
        align-items: center;
        position: relative;
        
        @media (min-width: 768px) {
            margin-left: 30px;
        }
        
        @media (min-width: 992px) {
            display: flex;
        }
    `,
   Item = styled.div`
        width: 26px;
        height: 26px;
        margin-left: 16px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        
        .icon-holder {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        @media (min-width: 768px) {
            margin-left: 20px;
        }

        &:first-child {
            margin-left: 0;
        }
        
        &.is-active:after {
            content: '';
            display: block;
            border: 6px solid transparent;
            border-bottom-color: #2B244A;
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            margin-top: 12px;
            z-index: 12;
            pointer-events: none;
        }
    `,
   NotificationsCounter = styled.div`
        position: absolute;
        top: -6px;
        right: -6px;
        background: #FFBE3F;
        border: 2px solid #201941;
        box-sizing: border-box;
        color: #201941;
        border-radius: 10px;
        font-size: 10px;
        font-weight: bold;
        height: 20px;
        min-width: 20px;
        padding: 0 2px;
        display: flex;
        align-items: center;
        justify-content: center;
    `,
   DropDownList = styled.ul`
        margin: 10px 0 0;
        padding: 5px;
        list-style: none;
        position: absolute;
        z-index: 2;
        top: 100%;
        right: 0;
        background: #3F317C;
        border-radius: 3px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
        
        li {
            background: #2B244A;
            border-radius: 3px;
            
            & + li {
                margin-top: 5px;
            }
        }
        
        li.locked {
            pointer-events: none;
        }
        
        li.active {
            a {
                color: #EDA211;
                font-weight: bold;
            }
        }
        
        a {
            font-weight: 500;
            width: 240px;
            font-size: 16px;
            line-height: 1.5;
            text-decoration: none;
            color: #fff;
            padding: 6px 20px;
            white-space: nowrap;
            display: block;
            
            &:hover, &:focus {
                color: #EDA211;
            }
        }
        
        svg {
            margin-left: 6px;
        }
    `,
   Avatar = styled.div`
        width: 26px;
        height: 26px;
        border-radius: 50%;
        cursor: pointer;
        background: ${props => props.image ? `#eee url(${props.image}) no-repeat center center` : '#eee'};
        background-size: cover;
    `;

const HeaderUserPanel = ({ navStatus, history }) => {
   const userData = useSelector(state => state.userData);
   const isUserOnline = useSelector(state => state.userOnline);
   const notifications = useSelector(state => state.userNotifications);

   // info notifications
   const infoRef = useRef(null);
   const [infoNotifications, setInfoNotifications] = useState(false);
   const hideNotifications = () => setInfoNotifications(false);
   ClickOutside(infoRef, hideNotifications);

   // menu
   const avatarRef = useRef(null);
   const [dropDownState, setDropDownState] = useState(false);
   const hideDropDown = () => setDropDownState(false);
   ClickOutside(avatarRef, hideDropDown);

   // return if no data
   if (!userData || !isUserOnline) return null;

   return (
      <StyledHeaderUserPanel navStatus={navStatus}>
         {/* <Item ref={infoRef} className={infoNotifications && 'is-active'}>
                <div className="icon-holder" onClick={() => setInfoNotifications(!infoNotifications)}>
                    <IconNotifications />
                    {notifications && notifications.info && notifications.info.filter(item => !item.viewed).length > 0 &&
                        <NotificationsCounter>
                            {notifications.info.filter(item => !item.viewed).length}
                        </NotificationsCounter>
                    }
                </div>
                {infoNotifications && notifications && notifications.info &&
                    <Notifications
                        closeHandler={hideNotifications}
                        notifications={notifications && notifications.info}/>
                }
            </Item> */}
         {/* <Item onClick={() => history.push(ROUTER.messenger)}>
            <IconMessages />
         </Item> */}
         <Item ref={avatarRef}>
            <Avatar
               image={getAvatar(userData.avatars)}
               onClick={() => setDropDownState(!dropDownState)} />
            {dropDownState &&
               <DropDownList>
                  {ProfileNavItems(hideDropDown, history)}
               </DropDownList>
            }
         </Item>
      </StyledHeaderUserPanel>
   )
};

export default withRouter(HeaderUserPanel);

HeaderUserPanel.propTypes = {
   navStatus: PropTypes.bool.isRequired
};
