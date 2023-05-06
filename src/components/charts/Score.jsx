import React from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import './../../styles/Score.css'

/*
* Render the chart for the % of the objective 
* @param {Object} the data to display
* @retuns {JSX.Element} chart
*
*/

export default function Score(props) {
  const objectifData = [{ name: 'de votre objectif', uv: props.data * 100 }];
  const style = {
    top: 70,
    left: 5,
    lineHeight: '20px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  };
  //rendering the central message whit the data
  objectifData[0].name = <div><h3 className='percentual'>{objectifData[0].uv + '% '}</h3><h3 className='objectif'>{objectifData[0].name}</h3></div>
  return (
    <div className='mini-container'>
      <ResponsiveContainer width="100%" aspect={1}>
        <RadialBarChart cx="50%" cy="50%" 
                        innerRadius={70} 
                        outerRadius={90} 
                        barSize={10} 
                        startAngle={90} 
                        endAngle={90 + (objectifData[0].uv * 360)/100} 
                        data={objectifData} 
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
