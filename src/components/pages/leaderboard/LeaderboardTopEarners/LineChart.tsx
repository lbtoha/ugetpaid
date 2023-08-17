import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
const LineChart = () => {
  const series = [
    //data on the y-axis
    {
      data: [45, 52, 38, 24, 33],
    },
  ];
  //

  const options: ApexOptions = {
    chart: {
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    stroke: {
      curve: "straight",
    },

    xaxis: {
      categories: [
        "10/06",
        "10/07",
        "10/08",
        "10/09",
        "10/10",
        "10/11",
        "10/12",
      ],
    },
  };

  return (
    <div className="">
      <ReactApexChart options={options} series={series} type="line" />
    </div>
  );
};

export default LineChart;
