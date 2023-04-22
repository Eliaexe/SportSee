import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

export default function Statistic (props) {

    const data = props.data
    const valueData = data.data
    const kindData = data.kind
    let useThis = []
    valueData.forEach(e => {
        useThis.push({'value': e.value, 'kind': kindData[e.kind]})
    });

// console.log(useThis);

    return (
        <div className='mini-container'>
            <h3>Stats</h3>
            <ResponsiveContainer width="100%" aspect={1}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={useThis}>
                <PolarGrid />
                <PolarAngleAxis dataKey="kind" />
                <PolarRadiusAxis />
                <Radar name="Stats" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
  }

