
const OverviewCard = ({ icon, amount, color, title }) => {
    return (
        <div className="overview_card">
            <p>{title}</p>
            <div className="overview_details">
                <div style={{ backgroundColor: color }} className="icon_container">
                    {icon}
                </div>
                <h1>{amount}</h1>
            </div>
        </div>
    )
}

export default OverviewCard