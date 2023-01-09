import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {connect} from 'react-redux'
import {getUrlParams} from "../../helpers";
import {API, API_ROUTER} from "../../api";
import {Styled} from "./style";
import {showAuthModal} from "../../redux/actions";
import {LinearProgress} from "@material-ui/core";
import {Container, ContentBox, Button} from "../../components/UI";

class EmailConfirm extends Component {

    state = {
        confirmed: false,
        error: false,
        emailSent: false
    }

    componentDidMount() {
        const {history} = this.props
        const {secret} = getUrlParams()

        !secret
            ? history.push('/')
            : this.confirmPassword(secret)
    }

    confirmPassword(secret) {
        const params = {
            ...API_ROUTER.auth.confirmEmail,
            data: {
                secret: secret
            }
        }

        API.request(params, true)
            .then(() => this.setState({confirmed: true, error: false}))
            .catch(() => this.setState({confirmed: false, error: true}))
    }

    render() {
        const {confirmed, error, emailSent} = this.state;

        return (
            <Container>
                <ContentBox>
                    {confirmed &&
                        <Styled.Message>
                            <div>Email confirmed!</div>
                            <Button
                                action={() => this.props.showAuthModal()}
                                label="Login"/>
                        </Styled.Message>
                    }

                    {error &&
                        <Styled.Message>
                            <div>Token has expired... Please try to send new Email.</div>
                            <Button
                                action={() => this.setState({emailSent: true})}
                                disabled={emailSent}
                                label={emailSent ? 'Email sent' : 'Send New Email'}/>
                        </Styled.Message>
                    }

                    {!confirmed && !error && <LinearProgress />}
                </ContentBox>
            </Container>
        )
    }
}

const mapDispatch = {
    showAuthModal: () => showAuthModal()
}

export default connect(null, mapDispatch)(withRouter(EmailConfirm));