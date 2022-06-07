import './Chart.css';
import ChartBar from './ChartBar';

const Chart = props => {
    const amounts = props.dataPoints.map(x => x.value);
    const maxAmount = Math.max(...amounts) + 500;
    console.log(props.dataPoints)
    return <div className='chart'>
        {
            props.dataPoints.map(dataPoint => {
                return <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={maxAmount}
                    label={dataPoint.label}
                />;
            })
        }
    </div>
};

export default Chart;