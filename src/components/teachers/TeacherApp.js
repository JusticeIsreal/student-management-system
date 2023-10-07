import { Outlet } from "react-router-dom"
import SideBar from "./SideBar"
const TeacherApp = () => {
  return (
    <div className="adminApp">
            <SideBar />
            <div className="app_content">
            <Outlet />
        </div>
    </div>
  )
}

export default TeacherApp