import React from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {getUserNotifications} from "../../../redux/actions/user";
import {markSingleNotificationAsViewed, markArrayNotificationsAsViewed, createDateAsUTC} from "../../../helpers";
import {iconUsers, iconRating} from "./icons";
import {Styled} from "./style";
import {FormattedMessage, useIntl} from "react-intl";
import {ArrowButton} from "../../UI";

const NotificationsInfo = ({notifications, closeHandler}) => {
    const dispatch = useDispatch();
    const history = useHistory()
    const intl = useIntl()
    const sorted = notifications.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));

    const active = sorted.filter(item => !item.viewed);
    const viewed = sorted.filter(item => item.viewed);

    const markSingleAsViewed = (notificationUuid, isViewed) => {
        if (!isViewed) {
            markSingleNotificationAsViewed(notificationUuid)
                .then(() => dispatch(getUserNotifications()))
                .catch(err => console.log(err))
        }
    };
    const markArrayAsViewed = notifications => {
        markArrayNotificationsAsViewed(notifications)
            .then(() => dispatch(getUserNotifications()))
            .catch(err => console.log(err))
    };

    const drawMessage = notification => {
        const date = createDateAsUTC(new Date(notification.createdAt));
        const isToday = date => {
            const today = new Date();
            return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()
        };
        const printDate = date => {
            const today = isToday(date);
            const daysAgo = date => {
                const now = new Date();
                const diffTime = Math.abs(date - now);
                return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            };

            if (today) {
                const hours = date.getHours();
                const minutes = date.getMinutes();
                return `${String(hours).length === 1 ? '0' + hours : hours}:${String(minutes).length === 1 ? '0' + minutes : minutes}`;
            }

            return daysAgo(date) === 1
                ? intl.formatMessage({id: "notifications.yesterday"})
                : daysAgo(date) + ' ' + intl.formatMessage({id: "notifications.daysAgo"}) ;
        };

        const renderIcon = type => {
            switch (type) {
                case 'info':
                    return iconUsers()
                default:
                    return iconRating()
            }
        }

        return (
            <Styled.Item
                key={notification.uuid}
                onClick={() => markSingleAsViewed(notification.uuid, notification.viewed)}
                className={!notification.viewed && 'new' }>
                <div className="message">
                    <div dangerouslySetInnerHTML={{__html: notification.message}} />
                    {notification.action === 'match_confirmation' &&
                        <ArrowButton
                            variant="secondary"
                            label={<FormattedMessage id="notifications.confirm" />}
                            action={() => {
                                closeHandler()
                                history.push('/fifa/match/' + notification.metadata.match)
                            }} />
                    }
                </div>
                <div className="description">
                    <div className="icon">{renderIcon(notification.type)}</div>
                    <div className="date">{printDate(date)}</div>
                </div>
            </Styled.Item>
        )
    };

    return (
        <Styled.Container>
            <Styled.Controls>
                <div className="title">
                    {intl.formatMessage({id: "notifications.title"})}
                </div>
                <div className="controls">
                    {active.length > 0
                        ? (
                            <button onClick={() => markArrayAsViewed(active.map(item => item.uuid))}>
                                {intl.formatMessage({id: "notifications.markAsRead"})}
                            </button>
                        )
                        : null
                    }
                </div>
            </Styled.Controls>

            {active.length ? <Styled.Section>{intl.formatMessage({id: "notifications.new"})}</Styled.Section> : <div/>}
            <Styled.Notifications>
                {active.map(notification => drawMessage(notification))}
            </Styled.Notifications>

            {viewed.length ? <Styled.Section>{intl.formatMessage({id: "notifications.viewed"})}</Styled.Section> : <div/>}
            <Styled.Notifications>
                {viewed.map(notification => drawMessage(notification))}
            </Styled.Notifications>
        </Styled.Container>
    )
};

export default NotificationsInfo;