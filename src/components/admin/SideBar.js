import { useState } from "react"
import {RiHome8Line, RiLogoutCircleLine, RiArrowRightFill, RiMailAddLine, RiSettings2Line, RiUser2Line, RiUserAddLine} from "react-icons/ri"
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
                    <A className={location.pathname !== "/admin" && "inactive"} to={"/admin"} href=""><RiHome8Line /> <span>Home</span></A>
                </li>
                <li>
                    <A to={"/admin/students"} href=""><RiUser2Line /> <span>Students</span></A>
                </li>
                <li>
                    <A to={"/admin/add-student"} href=""><RiUserAddLine /> <span>Add student</span></A>
                </li>

                <li>
                    <A to={"/admin/send-mail"} href=""><RiMailAddLine /> <span>Send mail</span></A>
                </li>

            </ul>

            <ul>
                <li>
                    <A to={"/admin/settings"} href=""><RiSettings2Line /> <span>Settings</span></A>
                </li>
                <li>
                    <A to={"/admin/login"} href=""><RiLogoutCircleLine /> <span>Logout</span></A>
                </li>
            </ul>
        </menu>
    </nav>
  )
}

export default SideBar