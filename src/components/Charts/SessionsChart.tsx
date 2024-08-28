import "./SessionsChart.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { SessionType } from "../../types/UserTypes";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload) {
    return (
      <div
        style={{
          width: 39,
          height: 25,
          backgroundColor: "#FFFFFF",
          fontSize: "12px",
          fontFamily: "Roboto",
          fontWeight: 500,
          color: "#000",
          textAlign: "center",
          padding: "7px",
          lineHeight: "24px",
        }}
      >
        {`${payload[0].value} min`}
      </div>
    );
  }

  return null;
};

const CustomCursor = ({ points, width, height }) => {
  const { x } = points[0];
  return (
    <rect
      x={x}
      y={0}
      width={width}
      height={height + 180}
      fill="rgba(0, 0, 0, 0.15)"
    ></rect>
  );
};

type dataProps = { data: SessionType[] };

const SessionsChart = ({ data }: dataProps) => {
  const labelMapping = {
    1: "L",
    2: "M",
    3: "M",
    4: "J",
    5: "V",
    6: "S",
    7: "D",
  };

  return (
    <div className="sessions-chart">
      <p className="sessions-chart-title">
        Durée moyenne des
        <br /> sessions
      </p>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis
            dataKey="day"
            tickFormatter={(tick) => labelMapping[tick]}
            tickLine={false}
            axisLine={false}
            opacity={0.5}
            stroke="#FFF"
            tick={{
              fontSize: 12,
              fontFamily: "Roboto",
              fontWeight: 500,
              fill: "#FFF",
            }}
          />
          <YAxis hide={true} domain={["dataMin - 15", "dataMax + 15"]} />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="#FFFFFF"
            dot={false}
            activeDot={{
              fill: "#FFFFFF",
              r: 4,
              stroke: "#FFFFFF",
              strokeWidth: 5,
              style: {
                fillOpacity: 1,
                strokeOpacity: 0.2,
              },
            }}
            strokeWidth={2}
            strokeOpacity={0.4}
          />
          <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SessionsChart;
