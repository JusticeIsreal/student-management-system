import { Outlet } from "react-router-dom"
import SideBar from "./SideBar"
const AdminApp = () => {
  return (
    <div className="adminApp">
            <SideBar />
            <div className="app_content">
            <Outlet />
        </div>
    </div>
  )
}

export default AdminApp