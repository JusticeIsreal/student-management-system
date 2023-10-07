import Chart from "react-apexcharts";
const options = {
  xaxis: {
    categories: ["100", "200", "300", "400", "500"]
  }
};
const series = [
  {
    name: "series-1",
    data: [30, 40, 25, 50, 49]
  },
];

const LevelChart = () => {
  return (
    <div>
      <h3>Student's level</h3>
      <Chart width={"100%"} options={options} series={series} type="bar" />
    </div>
  )
}

export default LevelChart;