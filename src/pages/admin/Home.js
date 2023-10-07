import OverviewCard from "../../components/admin/OverviewCard"
import TopBar from "../../components/admin/TopBar"
import { RiGroupLine, RiBarChartHorizontalFill } from "react-icons/ri"
import LevelChart from "../../components/admin/LevelChart"
import DataTable from "react-data-table-component"
import GenderPieChart from "../../components/admin/GenderPieChart"

const Home = () => {

    const tableColumns = [
        {
            name: "First name",
            sortable: true,
        },
        {
            name: "Last name",
            sortable: true,
        },
        {
            name: "Department",
        },
        {
            name: "Gender",
            sortable: true,
        },
    ];

    return (
        <div>
            <TopBar pageName={"Home"} />
            <div className="app_container">
                <div className="overview_container">
                    <OverviewCard title={"Total students"} amount={"2.12K"} icon={<RiGroupLine />} color={"slateblue"} />
                    <OverviewCard title={"Today's students"} amount={"+120"} icon={<RiBarChartHorizontalFill />} color={"slateblue"} />
                    <OverviewCard title={"Total students"} amount={"2.12K"} icon={<RiGroupLine />} color={"slateblue"} />
                </div>

                <div className="student_overview_container">
                    <div className="main recent_student_table">
                        <h3>Today's users</h3>
                        <DataTable
                            columns={tableColumns}
                            data={[{}, {}]}
                            pagination
                            noHeader
                            defaultSortField="id"
                            defaultSortAsc={false}
                            highlightOnHover
                            selectableRows
                            fixedHeader
                        />
                    </div>

                    <div className="level_chart">
                        <LevelChart />
                    </div>
                    <div className="level_chart">
                        <GenderPieChart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home