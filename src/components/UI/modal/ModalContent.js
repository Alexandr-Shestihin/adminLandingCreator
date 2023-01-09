import React from "react";
import styled from "styled-components";

const StyledModal = styled.div`
    width: ${props => props.fullWidth ? '100%' : '434px'};
    max-width: 100%;
    background: #201941;
    padding: 40px 70px 60px;
    color: #fff;
    position: relative;
    
    @media (max-width: 767px) {
        padding: 20px 20px 40px;
    }
`;

export default function ModalContent({children, fullWidth}) {
    return (
        <StyledModal fullWidth={fullWidth}>
            {children}
        </StyledModal>
    )
}