import drop from '../assests/drop.svg';
import Graph from '../assests/graphed.svg';
import { Month } from '../../../components/components';

export const Summary = () => {
    return (
        <div className="goals__saving__summary">
            <div className="goals__saving__summary__heading">
                <div className='goals__saving__summary__heading__drop' >
                    <h4>Saving Summary</h4>
                    <button><span>Mar 2022</span><img src={drop} alt="" /></button>
                </div>
                <Month content1='This month' content2='Same period last month' />
            </div>
            <img src={Graph} alt="graph" />
        </div>
    )
}