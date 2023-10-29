import {LayoutStyles} from "./Layout.styles.tsx";
import {FC, ReactNode} from "react";
import TopBar from "../TopBar/TopBar.tsx";
import SideBar from "../SideBar/SideBar.tsx";

interface LayoutProps {
    children: ReactNode,
}
const Layout: FC<LayoutProps> = ({children}) => {
    return (
        <LayoutStyles>
            <SideBar />
            <div style={{  gridArea: 2 / 2 / 3 / 3}}>
                {children}
            </div>
            <TopBar />
        </LayoutStyles>
        )
}

export default Layout;