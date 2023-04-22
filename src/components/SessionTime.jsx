import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
export default function SessionTime(props) {
    
    return (
      <div className='mini-container'>
          <ResponsiveContainer width="100%" aspect={1}>
          <LineChart
            width={500}
            height={300}
            data={props.data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sessionLength" stroke="#888" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
    
}

