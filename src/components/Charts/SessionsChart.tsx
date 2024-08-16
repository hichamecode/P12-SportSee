import './SessionsChart.scss'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts'
import { SessionType } from '../../types/UserTypes'


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
          {`${payload[0].value} min`}
        </div>
      );
    }
  
    return null;
  };


type dataProps = { data: SessionType[] }

const SessionsChart = ({ data }: dataProps) => {

    return (
        <div className='sessions-chart' >
            <p className='sessions-chart-title'>Durée moyenne des<br /> sessions</p>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <XAxis dataKey="day" tickLine={false} axisLine={false} opacity={0.5} stroke='#FFF' />
                    <YAxis hide={true} domain={['dataMin - 15', 'dataMax + 15']} />
                    <Line type="natural" dataKey="sessionLength" stroke="#FFF"
                        dot={false}
                        activeDot={{
                          fill: '#FFF',         
                          r: 4,                
                          stroke: '#FFF',       
                          strokeWidth: 5,     
                          style: { 
                              fillOpacity: 1, 
                              strokeOpacity: 0.2 
                          }
                      }}
                         strokeWidth={2} 
                         strokeOpacity={0.4} />
                    <Tooltip
                        content={<CustomTooltip />}
                        cursor={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default SessionsChart;
