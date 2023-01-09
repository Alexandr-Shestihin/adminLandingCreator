import styled from "styled-components";

export const Styled = {
    Button: styled.button`
        height: 40px;
        border-radius: 3px;
        border: none;
        font-weight: bold;
        font-size: 16px;
        transition: all .3s ease;
        padding: 0 20px;
        cursor: pointer;
        outline: none;
        
        @media (max-width: 767px) {
            height: 36px;
            font-size: 14px;
        } 
        
        &.primary {
            color: #fff;
            background: #EDA211;
            
            &:hover, &:focus {
                background: #bd810d;
            }
            
            &:active {
                background: #a5710b;
            }
        }
        
        &.secondary {
            color: #201941;
            background: #D5CBFF;
            
            &:hover, &:focus {
                background: #b09dfe;
            }
            
            &:active {
                background: #8b6ffe;
            }
        }
        
        &.sm {
            height: 36px;
            padding: 0 12px;
            font-size: 14px;
        }
        
        &.full-width {
            width: 100%;
        }
        
        &[disabled] {
            background: #999;
            pointer-events: none;
        }
    `
}