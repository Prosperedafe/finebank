import right from '../../../../assets/chevrons-right.svg';
import figma from '../../../../assets/Figma.svg';
import adobe from '../../../../assets/Adobe.svg';

export const Bill = () => {
    return (
        <section className="bill">
            <div className="bills_heading">
                <h3>Upcoming Bill</h3>
                <button>
                    <span>View All</span><img src={right} alt="" />
                </button>
            </div>
            <div className="bills">
                <div>
                    <div style={{ textAlign: 'center', background: 'rgba(210, 210, 210, 0.25)', borderRadius: '8px', padding: '10px 8px' }}>
                        <p style={{ fontSize: '.85rem', fontWeight: '500', color: '#666666', marginBottom: '7px' }}>May</p>
                        <p style={{ fontSize: '1.3rem', fontWeight: '800', color: '#191919' }}>15</p>
                    </div>
                    <div>
                        <img src={figma} alt="figma" />                        <p style={{ fontSize: '1rem', fontWeight: '700', color: '#525256', margin: '5px 0' }}>Figma - Monthly</p>
                        <p style={{ fontSize: '.8rem', fontWeight: '500', color: '#9F9F9F' }}>Last Charge - 14 May, 2022</p>
                    </div>
                    <button>
                        $150
                    </button>
                </div>
                <div className="divider"></div>
                <div>
                    <div style={{ textAlign: 'center', background: 'rgba(210, 210, 210, 0.25)', borderRadius: '8px', padding: '10px 8px' }}>
                        <p style={{ fontSize: '.85rem', fontWeight: '500', color: '#666666', marginBottom: '7px' }}>Jun</p>
                        <p style={{ fontSize: '1.3rem', fontWeight: '800', color: '#191919' }}>16</p>
                    </div>
                    <div>
                        <img src={adobe} alt="adobe" />                        <p style={{ fontSize: '1rem', fontWeight: '700', color: '#525256', margin: '5px 0' }}>Adobe - Yearly</p>
                        <p style={{ fontSize: '.8rem', fontWeight: '500', color: '#9F9F9F' }}>Last Charge - 17 Jun, 2023</p>
                    </div>
                    <button>
                        $559
                    </button>
                </div>
            </div>
        </section>
    )
}