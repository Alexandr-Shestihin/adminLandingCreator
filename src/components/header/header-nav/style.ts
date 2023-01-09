import styled from "styled-components";

interface Props {
    navStatus?: boolean
}

export const Dropdown = {
    Wrapper: styled.li`
        position: relative;
        
        > a {
            pointer-events: none;
        }
        
        &:hover {
            > div {
                opacity: 1;
                pointer-events: auto;
            }
        }
    `,
    Holder: styled.div`
        position: absolute;
        top: 100%;
        left: 0;
        pointer-events: none;
        transition: all .3s ease;
        opacity: 0;
        padding: 10px 0 0;
        z-index: 1;
    `,
    List: styled.ul`
        list-style: none;
        margin: 0; 
        background: #3F317C;
        border-radius: 3px;
        padding: 5px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.25);
        
        li {
            a {
                background: #2B244A;
                border-radius: 3px;
                display: block;
                padding: 6px 20px;
                white-space: nowrap;
                
                &:hover, &:focus {
                    color: #EDA211;
                }
            }
        }
        
        li + li {
            margin-top: 5px !important;
            margin-left: 0 !important;
        }
    `
}

export const StyledNav = styled.ul`
    display: ${(props: Props) => props.navStatus ? "flex" : "none"};
    list-style: none;
    margin: 0;
    padding: 0;
    align-items: center;
   
    @media (max-width: 767px) {
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
    }

    li + li {
        margin-left: 30px;
        
        @media (max-width: 1199px) {
            margin-left: 20px;
        }
        
        @media (max-width: 767px) {
            margin-left: 0;
            margin-top: 16px;
        }
    }
    
    li.active {
        a {
            color: #EDA211;
        }
    }
    
    li.locked {
        pointer-events: none;
        
        svg {
            display: inline-block;
            margin-left: 6px;
        }
    }

    a {
        color: #fff;
        text-decoration: none;
        transition: color .3s ease;
        font-weight: 500;
        font-size: 16px;

        &:hover, &:focus {
            color: #EDA211;
        }
    }
    
    @media (min-width: 992px) {
        display: flex;
    }
`;