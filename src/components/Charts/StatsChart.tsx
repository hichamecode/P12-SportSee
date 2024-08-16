

import './StatsChart.scss'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { UserStatsType } from '../../types/UserTypes';

const CustomTooltip = ({ active, payload }) => {
    if (active && payload) {
      return (
        <div style={{ 
          width: 39, 
          height: 25, 
          backgroundColor: '#FFF',
          fontSize: '12px',
          fontFamily: 'Roboto',
          fontWeight: 500,
          color: '#000',
          textAlign: 'center',
          padding: '7px',
          lineHeight: '24px',
        }}>
          {`${payload[0].value}`}
        </div>
      );
    }
  
    return null;
  };


type UserStatsTypeProps = {statistics: UserStatsType}

const StatsChart = ({statistics}: UserStatsTypeProps) => {

  const labelMapping = {
    intensity: "Intensité",
    speed: "Vitesse",
    strength: "Force",
    endurance: "Endurance",
    energy: "Énergie",
    cardio: "Cardio"
};

const data = Object.entries(statistics).map(([subject, value]) => ({
  subject: labelMapping[subject], 
  value
}));


    return (
        <div className="stats-chart">
            <ResponsiveContainer width="100%" height="100%" >
                <RadarChart data={data}>
                    <PolarGrid gridType='polygon' stroke='white' radialLines={false}/>
                    <PolarAngleAxis dataKey="subject" stroke='white' tickLine={false} tickSize={12} />
                    <PolarRadiusAxis tick={false} axisLine={false} />
                    <Tooltip 
                        content={<CustomTooltip />}
                        cursor={false}
                    />
                    <Radar name="radarName" dataKey="value" stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>

    );
}

export default StatsChart;



