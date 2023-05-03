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

    const order = ["intensity", "speed", "strength", "endurance", "energy", "cardio"];

    useThis.sort((a, b) => {
        return order.indexOf(a.kind) - order.indexOf(b.kind);
    });

    return (
        <div className='mini-container statistics-chart-container'>
            <ResponsiveContainer width="100%" aspect={0.95}>
                <RadarChart cx="48%" cy="50%" outerRadius="65%" data={useThis}>
                    <PolarGrid gridType="polygon" radialLines={false} strokeWidth='2'/>                    
                    <PolarAngleAxis dataKey="kind" axisLine={false}  tick={{ fill: "white", fontSize: 12 }}/>
                    <Radar name="Stats" dataKey="value" stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}
