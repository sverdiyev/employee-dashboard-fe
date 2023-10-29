import {SideBarStyles, InnerWrapperStyles} from "./SideBar.styles.tsx";
import LogoIcon from '../../assets/icons/Logo.svg';
import MapIcon from '../../assets/icons/Map.svg';
import ProfileIcon from '../../assets/icons/profile.svg';
import SideBarItem from "../SidebarItem/SidebarItem.tsx";


const SIDEBAR_ITEMS_DATA = [
    {
        id: '234hjd',
        icon: LogoIcon,
        path: '/'
    },
    {
        id: '2rdaa',
        icon: MapIcon,
        title: 'Dashboard',
        path: '/dashboard'
    },
    {
        id: '2dasdu',
        icon: ProfileIcon,
        title: 'My Profile',
        path: '/profile'
    },

]

const SideBar = () => {
    return (
        <SideBarStyles>
            <InnerWrapperStyles>
            {SIDEBAR_ITEMS_DATA.map(item => (
                <SideBarItem key={item.id} title={item.title} icon={item.icon} path={item.path}/>
            ))}
            </InnerWrapperStyles>
        </SideBarStyles>
    )
}

export default SideBar;