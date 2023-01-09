import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

const StyledButton = styled.button`
    width: 40px;
    height: 40px;
    margin-left: 16px;
    border-radius: 3px;
    background: rgba(255,255,255,.05);
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media (min-width: 768px) {
        margin-left: 20px;
    }
    
    @media (min-width: 992px) {
        display: none;
    }
`;

const IconOpen = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M3 17H21V16H3V17ZM3 12H21V11H3V12ZM3 6V7H21V6H3Z" fill="white"/>
    </svg>
);

const IconClose = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M19 6.4L17.6 5L12 10.6L6.4 5L5 6.4L10.6 12L5 17.6L6.4 19L12 13.4L17.6 19L19 17.6L13.4 12L19 6.4Z" fill="white"/>
    </svg>
);

export default function HeaderNavButton({navStatus, clickHandler}) {
    return (
        <StyledButton onClick={() => clickHandler(!navStatus)}>
            {navStatus ? <IconClose/> : <IconOpen/>}
        </StyledButton>
    )
}

HeaderNavButton.propTypes = {
    navStatus: PropTypes.bool.isRequired,
    clickHandler: PropTypes.func.isRequired
};