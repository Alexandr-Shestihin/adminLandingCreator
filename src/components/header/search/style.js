import styled from "styled-components";

export const SearchForm = {
    Form: styled.form`
        display: flex;
        margin-right: 30px;
        
        @media (max-width: 991px) {
            display: none;
        }
    `,
    Input: styled.input`
        background: #2B244A;
        border-radius: 3px 0 0 3px;
        border: none;
        outline: none;
        width: 180px;
        padding: 0 12px;
        
        font-size: 14px;
        color: #fff;
        font-weight: 500;
        
        @media (max-width: 1199px) {
            width: 120px;
        }
    `,
    Button: styled.button`
        width: 40px;
        height: 34px;
        background: rgba(255,255,255,.1);
        border-radius: 0 3px 3px 0;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background .3s ease;
        flex-shrink: 0;
        border: none;
        
        &:hover {
            background: rgba(255,255,255,.2);
        }
    `
}