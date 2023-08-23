import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const LineChartComponent = () => {
  const data = [
    {
      name: "10/06",
      point: 1000,
    },
    {
      name: "10/07",
      point: 1398,
    },
    {
      name: "10/08",
      point: 1000,
    },
    {
      name: "10/09",
      point: 3908,
    },
    {
      name: "10/10",
      point: 1200,
    },
    {
      name: "10/11",
      point: 1800,
    },
    {
      name: "10/12",
      point: 1300,
    },
  ];

  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={730}
          height={500}
          data={data}
          margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
        >
          <XAxis dataKey="name" stroke="#9D9FDE" />
          <YAxis
            type="number"
            scale={"linear"}
            domain={[0, 5000]}
            stroke="#9D9FDE"
          />
          <Tooltip />
          <Line type="linear" dataKey="point" stroke="#00D676" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
