import staticImg from "../../static/images/user.png"
const TopBar = ({pageName}) => {
  return (
    <div className="top_nav">
        <h2>{pageName}</h2>
        <div className="admin_profile_details">
          <img src={staticImg} alt="" />
            <div>
                <h4>Golden</h4>
                <p>Super admin</p>
            </div>
        </div>
    </div>
  )
}

export default TopBar