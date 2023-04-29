import React from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
// import '../styles/Score.css';

export default function Score(props) {
  const data = [{ name: 'Score', uv: props.data * 100 }];
  const style = {
    top: 0,
    left: 0,
    transform: 'translate(16px, 16px)',
    lineHeight: '30px',
    color: '#20253A'
  };

  return (
    <div className='mini-container'>
      <ResponsiveContainer width="100%" aspect={1}>
        <RadialBarChart cx="50%" cy="50%" innerRadius={90} outerRadius={90} barSize={10} startAngle={10} endAngle={300} data={data}>
          <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise={false} dataKey="uv" fill="#E60000" />
          <Legend iconSize={0} layout="vertical" verticalAlign="top" align='left' wrapperStyle={style} />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
