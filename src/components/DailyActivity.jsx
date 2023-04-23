import React from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, BarChart, ResponsiveContainer } from 'recharts';
import '../styles/DailyActivity.css';

function DailyActivity(props) {
  let data = props.data;

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

  return (
    <div className='daily-chart-container'>
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
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <YAxis orientation='right' tickCount={3} />
          <XAxis dataKey="day" />
          <Tooltip />
          <Legend 
            verticalAlign='top' 
            align='right' 
            margin='0 0 50px 0' 
            iconType='circle' 
            iconSize={8} 
            labelStyle={{ fontSize: '14px', color: '#666' }} /* Aggiorna lo stile del testo della legenda */
            height={20} /* Imposta l'altezza della legenda */
          />
          <Bar dataKey="kilogram" name={legendDataNames['kilogram']} fill="#282D30" barSize={7} radius={[10, 10, 0, 0]} />
          <Bar dataKey="calories" name={legendDataNames['calories']} fill="#E60000" barSize={7} radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DailyActivity;
