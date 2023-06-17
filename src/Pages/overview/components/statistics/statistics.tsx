import './transaction.css';
import graph from '../../assets/Graph.svg';
import arrowdown from '../../assets/arrow-down.svg';
import { Month } from '../../../../components/components';

export const Statistics = () => {
    return (
        <section className="overview_statistics">
            <h3>Statistics</h3>
            <div>
                <div className="overview_statistics_filter">
                    <h4><span>Weekly Comparison</span><img src={arrowdown} alt="" /></h4>
                    <Month content1='This week' content2='Last Week' />
                </div>
                <img src={graph} className='graph' alt="graph" />
            </div>
        </section>
    )
}