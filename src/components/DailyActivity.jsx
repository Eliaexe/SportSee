import React from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, BarChart, ResponsiveContainer } from 'recharts';

function DailyActivity(props) {
  let data = props.data;

  const legendDataNames = {
    kilogram: 'Poids (kg)', 
    calories: 'Calories brûlées (kCal)',
  };

  return (
    <div>
      <h3>Activité quotidienne</h3>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={600}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 0" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign='top' iconType='circle' iconSize={8} labelStyle={{ fontSize: '4px', color: '#666' }} />
          <Bar dataKey="kilogram" name={legendDataNames['kilogram']} fill="#282D30" barSize={7} radius={[10, 10, 0, 0]} />
          <Bar dataKey="calories" name={legendDataNames['calories']} fill="#E60000" barSize={7} radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DailyActivity;
