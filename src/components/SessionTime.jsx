import React from 'react';
import { LineChart, Line, XAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../styles/SessionTime.css';

export default function SessionTime(props) {
  let data = props.data;
  const weekDay = ['L', 'M', 'M', 'G', 'V', 'S', 'D'];
  if (data) {
    data = data.map(e => {
      return { ...e, day: weekDay[e.day - 1] };
    });
  }
  return (
    <div className='mini-container session-chart-container'>
      <ResponsiveContainer width="100%" aspect={1}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="day" tickSize={15} tickLine={false} axisLine={false}/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" strokeWidth={4} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
