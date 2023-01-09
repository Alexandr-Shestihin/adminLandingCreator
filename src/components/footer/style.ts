import styled from "styled-components";
import {Container} from '../UI';

export const Styled = {
    Footer: styled.footer`
        background: #201941;
        padding: 32px 0;
    `,
    Container: styled(Container)``,
    Row: styled.div`
        display: flex;
        flex-wrap: wrap;
        margin: 0 -15px;
    `,
    Col: styled.div`
        width: 33.3333%;
        padding: 0 15px;
        
        @media (max-width: 991px) {
            width: 50%;
            
            &:last-child {
                width: 100%;
            }
        }

        @media (max-width: 767px) {
            width: 100%;
            
            &:nth-child(2) {
                margin-top: 16px;
            }
        }
    `,
    NavItem: styled.div`

        @media (max-width: 991px) {
            text-align: center;
        }
            
        & + & {
            margin-top: 16px;
        }

        a {
            font-weight: 500;
            font-size: 14px;
            text-decoration: none;
            color: #fff;

            &:hover, &focus {
                text-decoration: underline;
            }
        }
    `,
    SocialTitle: styled.div`
        font-weight: bold;
        font-size: 16px;
        line-height: 22px;
        margin: 0 0 12px;
        text-align: center;

        @media (max-width: 991px) {
            margin-top: 32px;
        }
        
    `,
    SocialLinks: styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
    `,
    SocialLink: styled.a`
        width: 24px;
        height: 24px;
        opacity: .6;
        transition: opacity .3s ease;
        
        &:hover, &:focus {
            opacity: 1;
        }
        
        & + & {
            margin-left: 20px;
        }
    `,
    Copy: styled.div`
        margin: 16px 0 0;
        color: #fff;
        font-size: 14px;
        font-weight: 500;
        
        @media (max-width: 991px) {
            text-align: center;
        }
    `
}