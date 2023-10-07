import TopBar from "../../components/admin/TopBar"
import TimeTable from "../../components/teachers/TimeTable"

const TeacherHome = () => {
    return (
        <div>
            <TopBar pageName={"Home"} />
            <div className="app_container">
                <TimeTable />
            </div>
        </div>
    )
}

export default TeacherHome