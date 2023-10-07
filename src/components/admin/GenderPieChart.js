import Chart from "react-apexcharts";

const GenderPieChart = () => {
    const options = { labels: ["Male", "Female"] };
    const series = [4, 5];

  return (
   <div>
      <h3>Student's gender</h3>
      <Chart options={options} series={series} type="donut" width={"100%"} />
    </div>
  )
}

export default GenderPieChart