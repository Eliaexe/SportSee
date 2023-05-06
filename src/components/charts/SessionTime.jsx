import React from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import './../../styles/SessionTime.css';

/*
* Render the chart for the time spent working out
* @param {Object} the data to display
* @retuns {JSX.Element} chart
*
*/

export default function SessionTime(props) {
  let data = props.data;

  // formatting the day for the x-axis
  const weekDay = ['L', 'M', 'M', 'G', 'V', 'S', 'D'];
  if (data) {
    data = data.map(e => {
      return { ...e, day: weekDay[e.day - 1] };
    });
  }

  const renderTooltipContent = ({ payload }) => {
    if (payload && payload.length > 0) {
      return (
        <div className='session-custom-tooltip' style={{backgroundColor: '#FFFFFF', width: '80px', height: '50px'}}>
          {payload.map((entry, index) => (
            <p key={`item-${index}`} >
              {` ${entry.value} min`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  function renderLegend() {
      return(<h3 className='session-title'>Durée moyenne des sessions</h3>)
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
          <Legend content={renderLegend} verticalAlign='top'/>
          <XAxis dataKey="day" tickSize={15} tickLine={false} axisLine={false} style={{fontSize: 16, fill: '#FFFFFF', opacity: '0.5'}}/>
          <Tooltip content={renderTooltipContent} />
          <Line legendType="none" type="monotone" dataKey="sessionLength" stroke="#FFFFFF" strokeWidth={4} strokeLinecap="round" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
