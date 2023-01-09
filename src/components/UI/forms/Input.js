import React from "react";
import PropTypes from "prop-types";
import InputMask from 'react-input-mask';
import styled from "styled-components";
import ErrorMessage from "../blocks/ErrorMessage";
import {Label} from "./Label";

const StyledInput = styled.input`
        width: 100%;
        height: 30px;
        display: block;
        
        border: 1px solid rgba(213, 203, 255, .2);
        background: transparent;
        border-radius: 3px;
        
        font-weight: 500;
        font-size: 14px;
        color: #fff;
        padding: 0 6px;
        
        transition: all .3s ease;
        outline: none;
        
        &:hover, &:focus {
            border-color: rgba(213, 203, 255, .6);
        }
        
        &.has-error {
            border-color: rgba(235, 87, 87, .2)
        }
    
        &.homepage {
            height: 50px;
            border: 1px solid #fff;
            background: #fff;
            color: #333;
            padding: 0 12px;
            
            &:hover, &:focus {
                border-color: #fff;
            }
            
            &.has-error {
                border-color: #fff;
            }
        }
    
    `,
    Holder = styled.div`
        position: relative;
        width: 100%;
    `;

export default function Input({
    name,
    type = "text",
    value,
    onChange,
    onClick,
    placeholder,
    readOnly = false,
    error = '',
    variant = 'default',
    mask = false,
    showErrorMessage = true,
    required,
    label
}) {

    const maskedInput = () => (
        <>
            {label &&
                <Label>{label} {required && '*'}</Label>
            }
            <InputMask mask={mask} value={value} onChange={onChange} readOnly={readOnly}>
                {inputProps => (
                    <StyledInput
                        {...inputProps}
                        name={name}
                        type={type}
                        placeholder={placeholder}
                        className={variant}
                    />
                )}
            </InputMask>
        </>
    )

    const defaultInput = () => (
        <>
            {label &&
                <Label>{label} {required && '*'}</Label>
            }
            <StyledInput
                required={required}
                value={value}
                onChange={onChange}
                name={name}
                type={type}
                readOnly={readOnly}
                placeholder={placeholder}
                className={variant}
            />
        </>
    )

    return (
        <Holder onClick={onClick}>
            {mask ? maskedInput() : defaultInput()}
            {error && showErrorMessage &&
                <ErrorMessage>{error}</ErrorMessage>
            }
        </Holder>
    )
}

Input.propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    error: PropTypes.string,
    type: PropTypes.oneOf(['text', 'password', 'email']),
    readOnly: PropTypes.bool,
    placeholder: PropTypes.string,
    variant: PropTypes.oneOf(['default', 'homepage']),
    showErrorMessage: PropTypes.bool,
    mask: PropTypes.string,
    required: PropTypes.bool,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};