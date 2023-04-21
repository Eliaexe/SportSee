import React from 'react';
import {XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, BarChart, ResponsiveContainer} from 'recharts';

function DailyActivity(props) {
  let data = props.data;
  return (
    <div>
        <h3>Activité quotidienne</h3>
        <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" /> 
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="kilogram" fill="#8884d8" /> 
            <Bar dataKey="calories" fill="#82ca9d" /> 
        </BarChart>
        </ResponsiveContainer>
    </div>
  );
}

export default DailyActivity;
