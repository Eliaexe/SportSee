import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';


  const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
  };
export default function Score (props) {
      // console.log(props.data * 100);
      const useThis = [{ 'name': 'Score', 'uv': props.data * 100 }]
      // console.log(useThis);
    //   const data = props.data
    return (
      <div className='mini-container'>

        <ResponsiveContainer width="100%" aspect={1}>
            <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={useThis}>
            <RadialBar
                minAngle={15}
                label={{ position: 'insideStart', fill: '#fff' }}
                background
                clockWise
                dataKey="uv"
            />
            <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
            </RadialBarChart>
        </ResponsiveContainer>

        </div>
    );
        
    
}