import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {SearchForm} from "./style";
import {useIntl} from "react-intl";

export const searchIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.54" fillRule="evenodd" clipRule="evenodd" d="M15.502 14H14.708L14.432 13.726C15.407 12.589 16 11.115 16 9.50003C16 5.91003 13.09 3.00003 9.5 3.00003C5.91 3.00003 3 5.91003 3 9.50003C3 13.09 5.91 16 9.5 16C11.115 16 12.588 15.408 13.725 14.434L14.001 14.708V15.5L18.999 20.491L20.49 19L15.502 14ZM9.5 14C7.014 14 5 11.986 5 9.50003C5 7.01503 7.014 5.00003 9.5 5.00003C11.985 5.00003 14 7.01503 14 9.50003C14 11.986 11.985 14 9.5 14Z" fill="white"/>
    </svg>
)

const HeaderSearch = () => {
    const [value, setValue] = useState('')
    const history = useHistory()
    const intl = useIntl()
    const onSubmit = (e, value) => {
        e.preventDefault()

        if (value.length) {
            setValue('')
            history.push('/find-friends?search=' + value)
        }
    }

    return (
        <SearchForm.Form onSubmit={e => onSubmit(e, value)}>
            <SearchForm.Input
                onChange={e => setValue(e.target.value)}
                value={value}
                placeholder={intl.formatMessage({id: "header.search.placeholder"})}/>
            <SearchForm.Button type="submit">
                {searchIcon()}
            </SearchForm.Button>
        </SearchForm.Form>
    )
}

export default HeaderSearch