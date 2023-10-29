import {FC} from "react";
import {SideBarImg, SidebarLinkStyles, SideBarTitle} from "./SidebarItem.styles.tsx";

interface SideBarItemProps {
    title?: string,
    icon: string,
    path: string,
}
const SideBarItem: FC<SideBarItemProps> = ({title, icon, path }) => {
    return (
        <SidebarLinkStyles to={path}>
                <SideBarImg src={icon} alt={title} $hasBackground={title === 'Dashboard'}/>
                {title ? <SideBarTitle>{title}</SideBarTitle> : null}
        </SidebarLinkStyles>
    )
}

export default SideBarItem;