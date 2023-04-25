import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import "../styles/Statistic.css"

export default function Statistic (props) {

    const data = props.data
    const valueData = data.data
    const kindData = data.kind
    let useThis = []
    valueData.forEach(e => {
        useThis.push({'value': e.value, 'kind': kindData[e.kind]})
    });

    return (
        <div className='mini-container statistics-chart-container'>
            <h3>Stats</h3>
            <ResponsiveContainer width="100%" aspect={1}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={useThis}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="kind" axisLine={false} />
                    <Radar name="Stats" dataKey="value" stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}
