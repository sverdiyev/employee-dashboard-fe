import NotificationIcon from '../../assets/icons/Notifications.svg';
import UserIcon from '../../assets/icons/User.svg';
import {InnerWrapper, TopBarStyles} from "./TopBar.styles.tsx";
const TopBar = () => {
    return (
        <TopBarStyles>
            <InnerWrapper>
                <img src={NotificationIcon} alt='Notification icon'/>
                <img src={UserIcon} alt='User icon'/>
            </InnerWrapper>
        </TopBarStyles>
        )
}

export default TopBar;