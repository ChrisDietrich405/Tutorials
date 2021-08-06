import Chartbar from "./Chartbar"

import "./Chart.css"

const Chart = props => {
    return <div className="chart">
        {props.dataPoints.map((dataPoint => 
            <Chartbar 
            id={dataPoint.label}
            value={dataPoint.value}
            maxValue={null}
            label={dataPoint.label}
            />
            ))}
    </div>
}

export default Chart