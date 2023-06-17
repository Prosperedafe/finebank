import pen from '../../../../assets/pen.svg';
import award from '../../../../assets/Award.svg';
import graph from '../../../../assets/Graph.svg';
import target from '../../../../assets/octicon_goal-16.svg';

export const Goals = () => {
    return (
        <>
            <section className="overview__goals">
                <h3>Goals</h3>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #F3F3F3', paddingBottom: '.7rem' }}>
                        <h4><span>$20,000</span><img height='25px' src={pen} alt="pen" /></h4>
                        <p style={{ color: '#525256', fontSize: '.95rem', fontWeight: '600' }}>May, 2023</p>
                    </div>
                    <div className='goals_overview'>
                        <div className='target'>
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
                                    <p style={{ color: '#191919', fontSize: '1rem', fontWeight: '700', marginTop: '5px' }}>$12,500</p>
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
                </div>
            </section>
        </>
    )
}