import Title from "../Title/Title.tsx";
import Filter from "../Filter/Filter.tsx";
import {DashboardStyles, FilterWrapper, HeadingWrapper} from "./Dashboard.styles.tsx";
import Map from "../Map/Map.tsx";

const Dashboard = () => {
    return (
        <DashboardStyles>
            <HeadingWrapper>
                <Title />
                <FilterWrapper>
                    Filter by:
                    <Filter title='All locations' options={[]} />
                    <Filter title='All squads' options={[]}/>
                </FilterWrapper>
            </HeadingWrapper>
            <Map />
        </DashboardStyles>
    )
}

export default Dashboard;