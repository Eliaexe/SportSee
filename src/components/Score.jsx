import React from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import '../styles/Score.css'

export default function Score(props) {
  const data = [{ name: 'de votre objectif', uv: props.data * 100 }];
  const style = {
    top: 55,
    left: 5,
    lineHeight: '30px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',

  };
  data[0].name = <div><h3 className='percentual'>{data[0].uv + '% '}</h3><h3 className='objectif'>{data[0].name}</h3></div>
  return (
    <div className='mini-container'>
      <ResponsiveContainer width="100%" aspect={1}>
        <RadialBarChart cx="50%" cy="50%" 
                        innerRadius={90} 
                        outerRadius={90} 
                        barSize={10} 
                        startAngle={90} 
                        endAngle={90 + (data[0].uv * 360)/100} 
                        data={data} 
                        textAnchor="middle">
          <RadialBar  minAngle={15} 
                      clockWise={false} dataKey="uv" fill="#E60000"
                      cornerRadius={15} />
          <Legend iconSize={0} 
                  layout="horizontal" 
                  verticalAlign="center" 
                  align='center' 
                  wrapperStyle={style} />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
