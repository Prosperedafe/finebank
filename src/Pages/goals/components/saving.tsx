import '../goal.css';
import drop from '../assests/drop.svg';
import award from '../../../assets/Award.svg';
import graph from '../../../assets/Graph.svg';
import target from '../../../assets/octicon_goal-16.svg';
import { AdjustBtn } from "../goal";

export const Saving = () => {
    return (
        <div>
            <div className="goals__saving__heading">
                <h4>Savings Goal</h4>
                <button>
                    <span>01 May ~ 31 May </span>
                    <img src={drop} alt="" />
                </button>
            </div>
            <div className="target">
                <div className="targets">
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '5px' }}>
                        <img src={award} alt="" />
                        <div>
                            <p style={{ color: '#878787', fontSize: '.8rem' }}>Target Achieved</p>
                            <p style={{ color: '#191919', fontSize: '1rem', fontWeight: '700', marginTop: '5px' }}>$12,500</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '5px' }}>
                        <img src={target} alt="" />
                        <div>
                            <p style={{ color: '#878787', fontSize: '.8rem' }}>This month Target</p>
                            <p style={{ color: '#191919', fontSize: '1rem', fontWeight: '700', marginTop: '5px' }}>$20,000</p>
                        </div>
                    </div>
                </div>
                <div className="graph">
                    <img src={graph} alt="" />
                    <div>
                        <p>$0</p>
                        <p>$12k</p>
                        <p>$20k</p>
                    </div>
                    <p>Target vs Achivement</p>
                </div>
            </div>
            <AdjustBtn content='Adjust Goal' />
        </div>
    )
}