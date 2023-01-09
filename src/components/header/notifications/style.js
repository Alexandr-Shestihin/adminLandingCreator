import styled from "styled-components";

export const Styled = {
    Container: styled.div`
        padding: 6px;
        background: #2B244A;
        box-shadow: 0 0 20px #140F2B;
        border-radius: 1px;
        
        position: absolute;
        z-index: 11;
        top: 100%;
        right: -92px;
        width: 578px;
        margin-top: 24px;
        cursor: auto;
        
        @media (max-width: 991px) {
            right: -151px;
        }
        
        @media (max-width: 767px) {
            right: -139px;
            width: calc(100vw - 30px)
        }
    `,
    Controls: styled.div`
        background: #201941;
        border-radius: 3px;
        padding: 6px 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .title {
            font-weight: 500;
            font-size: 14px;
            color: #EDA211;
        }
        
        .controls {
            display: flex;
            
            button {
                font-size: 14px;
                color: #D5CBFF;
                border: none;
                background: transparent;
                cursor: pointer;
                transition: color .3s ease;
                outline: none;
                
                &:hover, &:focus {
                    color: #EDA211;
                }
            }
            
            button + button {
                margin-left: 30px;
            }
        }
    `,
    Section: styled.div`
        font-size: 10px;
        color: #D5CBFF;
        padding: 6px 10px;
    `,
    Notifications: styled.div`
        max-height: 250px;
        overflow-y: scroll;
    `,
    Item: styled.div`
        background: #201941;
        border-radius: 3px;
        padding: 6px 36px 6px 10px;
        position: relative;
        transition: background .3s ease;
        
        & + & {
            margin-top: 1px;
        }
        
        &.new {
            cursor: pointer;
            
            &:hover {
                background: #1c163a;
            }
            
            &:after {
                content: '';
                display: block;
                width: 8px;
                height: 8px;
                background: #EDA211;
                border-radius: 50%;
                position: absolute;
                top: 50%;
                right: 16px;
                transform: translateY(-50%);
            }
        }
        
        .message {
            font-size: 14px;
            margin: 0 0 4px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            
            p {
                margin: 0
            }
            
            a {
                color: #EDA211;
            }
        }
        
        .description {
            display: flex;
            align-items: center;
            
            .icon {
                margin-right: 8px;
                display: flex;
                align-items: center;
                
                svg {
                    display: block;
                }
            }
            
            .date {
                font-weight: 600;
                font-size: 10px;
                color: #D5CBFF;
            }
        }
    `
}