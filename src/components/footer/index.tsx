import React from 'react';
import {ROUTER} from "../../config";
import {Styled} from "./style";
import {SOCIAL_LINKS} from "../../config";
import {FormattedMessage} from "react-intl";
import {getCookiesPolicyLink, getPrivacyPolicyLink, getTermsLink} from "../../helpers";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {IconFacebook, IconInstagramm, IconTelegram, IconTwitter, IconVK} from "../social-icons";

const Footer =() => {
    const interfaceLang = useSelector<RootState>(store => store.interfaceLang)

    if (window.location.pathname === ROUTER.messenger) return null;

    return (
        <Styled.Footer>
            <Styled.Container>
                <Styled.Row>
                    <Styled.Col>
                        <Styled.NavItem>
                            <a href={getPrivacyPolicyLink(interfaceLang)} target="_blank" rel="noopener noreferrer">
                                <FormattedMessage id="footer.privacyPolicy" />
                            </a>
                        </Styled.NavItem>
                        <Styled.NavItem>
                            <a href={getCookiesPolicyLink(interfaceLang)} target="_blank" rel="noopener noreferrer">
                                <FormattedMessage id="footer.cookiesPolicy" />
                            </a>
                        </Styled.NavItem>
                    </Styled.Col>
                    <Styled.Col>
                        <Styled.NavItem>
                            <a href={getTermsLink(interfaceLang)} target="_blank" rel="noopener noreferrer">
                                <FormattedMessage id="footer.termsOfUse" />
                            </a>
                        </Styled.NavItem>
                        <Styled.NavItem>
                            <a href="mailto:support@passport.gg">
                                <FormattedMessage id="footer.support" />
                            </a>
                        </Styled.NavItem>
                    </Styled.Col>
                    <Styled.Col>
                        <Styled.SocialTitle>
                            <FormattedMessage id="footer.followUs" />
                        </Styled.SocialTitle>
                        <Styled.SocialLinks>
                            <Styled.SocialLink
                                target="_blank"
                                href={SOCIAL_LINKS.facebook}>
                                <IconFacebook />
                            </Styled.SocialLink>
                            <Styled.SocialLink
                                target="_blank"
                                href={SOCIAL_LINKS.instagram}>
                                <IconInstagramm />
                            </Styled.SocialLink>
                            <Styled.SocialLink
                                target="_blank"
                                href={SOCIAL_LINKS.twitter}>
                                <IconTwitter />
                            </Styled.SocialLink>
                            <Styled.SocialLink
                                target="_blank"
                                href={SOCIAL_LINKS.telegram}>
                                <IconTelegram />
                            </Styled.SocialLink>
                            <Styled.SocialLink
                                target="_blank"
                                href={SOCIAL_LINKS.vk}>
                                <IconVK />
                            </Styled.SocialLink>
                        </Styled.SocialLinks>
                    </Styled.Col>
                </Styled.Row>
            </Styled.Container>
        </Styled.Footer>
    )
}

export default Footer