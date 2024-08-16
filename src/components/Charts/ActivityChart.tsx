import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './ActivityChart.scss';
import { ActivitiesType } from '../../types/UserTypes';

const customTooltip = ({ active, payload }) => {
    if (active && payload) {
        return (
            <div style={{
                width: 39,
                height: 63,
                backgroundColor: '#E60000',
                fontSize: '10px',
                fontFamily: 'Roboto',
                fontWeight: 500,
                color: '#FFF',
                textAlign: 'center',
                padding: '4px 7px',
                lineHeight: '24px',
                borderRadius: '3px'
            }}>
                {`${payload[0].value}kg`}<br />
                {`${payload[1].value}kCal`}
            </div>
        );
    }

    return null;
};

type ActivitiesChartProps = { data: ActivitiesType }

const ActivityChart = ( {data}: ActivitiesChartProps ) => {

    return (
        <div className="activity-chart" >
            <p className="activity-chart-title">Activité quotidienne</p>
            <ResponsiveContainer width='100%' height='100%' >
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="2 2" vertical={false} />
                    <XAxis dataKey="id" tickMargin={15} tickLine={false} axisLine={false} />
                    <YAxis
                        yAxisId="right"
                        orientation="right"
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={(tick) => Math.floor(tick)} // arrondi les valeurs au entier
                        tickMargin={40}
                        tick={{ fontSize: 14, fontFamily: 'Rboto', fill: '#74798C', fontWeight: 500 }}
                        interval={0}
                        dataKey="weight"
                        domain={['dataMin-3', 'dataMax+5']}
                    />
                    <YAxis
                        yAxisId="left"
                        orientation="left"
                        axisLine={false}
                        tickLine={false}
                        hide={true}
                    />
                    <Tooltip content={customTooltip}
                        cursor={{ fill: '#C4C4C4', fillOpacity: '0.5', radius: '3px' }} />
                    <Legend iconType='circle' iconSize={7} align='right' verticalAlign='top' height={50} formatter={(value, entry) => (
                        <span
                            style={{
                                color: '#74798C',
                                fontWeight: '500',
                                fontFamily: 'Roboto',
                                fontSize: '14px',
                            }}
                        >
                            {value}
                        </span>
                    )} />
                    <Bar name={"Poids (kg)"}  dataKey="weight" fill="#282D30" barSize={7} radius={3} yAxisId="right" />
                    <Bar name={"Calories brûlées (kCal)"}  dataKey="caloriesBurnt" fill="#E60000" barSize={7} radius={3} yAxisId="left" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ActivityChart;
