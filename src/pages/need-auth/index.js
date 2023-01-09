import React, {useEffect} from "react";
import {ContentBox, Container} from "../../components/UI";
import store from "../../redux/store";
import {showAuthModal} from "../../redux/actions/auth";

export default function NeedAuth() {
    useEffect(() => {
        store.dispatch(showAuthModal())
    }, [])
    return (
        <Container>
            <ContentBox>
                Please sign in...
            </ContentBox>
        </Container>
    )
}