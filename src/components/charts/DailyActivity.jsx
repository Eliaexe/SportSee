import React from 'react';
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  Bar, 
  BarChart, 
  ResponsiveContainer } from 'recharts';
import './../../styles/DailyActivity.css';

/*
* Render the chart for daily kcal and weight information
* @param {Object} the data to display
* @retuns {JSX.Element} chart
*
*/

function DailyActivity(props) {
  let data = props.data;

  // formatting the day for the chart x axis
  if (data) {
    data.forEach(e => {
      if (e.day && e.day.match(/^\d{4}-\d{2}-\d{2}$/)) {
        e.day = e.day.split("-")[2].trim();
      }
    });
  }

  const legendDataNames = {
    kilogram: 'Poids (kg)', 
    calories: 'Calories brûlées (kCal)',
  };

  const renderTooltipContent = ({ payload, label }) => {
    if (payload && payload.length > 0) {
      return (
        <div className='daily-custom-tooltip' style={{backgroundColor: '#E60000', width: '70px', height: '120px'}}>
          {payload.map((entry, index) => (
            <p key={`item-${index}`} >
              {` ${entry.value} ${entry.name.match(/\((.*)\)/)[1]} `}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className='daily-chart-container'>
      <div
        style={{
          position: 'absolute',
          fontSize: '20px',
          fontWeight: 700,
          color: '#666',
        }}
      >
        Activité quotidienne
      </div>
      <ResponsiveContainer 
        width="100%" 
        aspect={2}>
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
          barGap={8}
        >
          <CartesianGrid 
            strokeDasharray="3 3" 
            vertical={false} />
          <YAxis 
            orientation='right' 
            tickCount={3} />
          <XAxis 
            dataKey="day" />
          <Tooltip 
            content={renderTooltipContent} />
          <Legend 
            verticalAlign='top' 
            align='right' 
            margin='0 0 50px 0' 
            iconType='circle' 
            iconSize={8} 
            labelStyle={{ fontSize: '14px', color: '#666' }} 
            height={50} 
          />
          <Bar 
            dataKey="kilogram" 
            name={legendDataNames['kilogram']} 
            fill="#282D30" 
            barSize={7} 
            radius={[10, 10, 0, 0]} />
          <Bar 
            dataKey="calories" 
            name={legendDataNames['calories']}
            fill="#E60000" 
            barSize={7} 
            radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DailyActivity;
