import { useState } from "react"
import {RiHome8Line, RiLogoutCircleLine, RiArrowRightFill, RiDraftFill, RiSettings2Line, RiBookReadFill, RiPieChartBoxLine} from "react-icons/ri"
import { NavLink as A , Link, useLocation } from "react-router-dom"
import {MdCastForEducation} from "react-icons/md"
const SideBar = () => {
    const location = useLocation();
    const [resizeBar, setResizeBar] = useState(false);
    
  return (
    <nav className={resizeBar ? "user_bar resize_bar" : "user_bar"}>
        <div className="nav_logo">
            <Link to={"/"}><MdCastForEducation /><span>School</span></Link>
            <RiArrowRightFill onClick={() => setResizeBar(!resizeBar)} className="resize_icon" />
        </div>
        <menu>
            <ul>
                <li>
                    <A className={location.pathname !== "/teacher" && "inactive"} to={"/teacher"} href=""><RiHome8Line /> <span>Home</span></A>
                </li>
                <li>
                    <A to={"/teacher/courses"} href=""><RiBookReadFill /> <span>Courses</span></A>
                </li>
                <li>
                    <A to={"/teacher/projects"} href=""><RiPieChartBoxLine /> <span>Projects</span></A>
                </li>

                <li>
                    <A to={"/teacher/Exams"} href=""><RiDraftFill /> <span>Exams</span></A>
                </li>

            </ul>

            <ul>
                <li>
                    <A to={"/teacher/settings"} href=""><RiSettings2Line /> <span>Settings</span></A>
                </li>
                <li>
                    <A to={"/teacher/login"} href=""><RiLogoutCircleLine /> <span>Logout</span></A>
                </li>
            </ul>
        </menu>
    </nav>
  )
}

export default SideBar