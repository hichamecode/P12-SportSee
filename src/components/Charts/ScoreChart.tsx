import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";
import "./ScoreChart.scss";

type UserScoreTypeProps = { userScore: number };

const ScoreChart = ({ userScore }: UserScoreTypeProps) => {

  const score = userScore;
  const endAngle = 90 + (360 * score); 

  // tableau avec un seul objet pour data
  const data = [
    { name: "Score", value: score }
  ]

  return (
    <div className="score-chart">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="70%"
          outerRadius="80%"
          barSize={10}
          data={data} 
          startAngle={90}
          endAngle={endAngle}
        >
          <RadialBar
            dataKey="value"
            startAngle={90}
            endAngle={endAngle}
            fill="#FF0101"
            label={false}
            cornerRadius={10}
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <p className="score-chart-title">Score</p>
      <p className="score-chart-text">
        {score*100}%<br />
        <span>de votre objectif</span>
      </p>
    </div>
  );
};

export default ScoreChart;
