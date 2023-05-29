import './plans.css'
import url from '../../../../assets/url.svg';
import mastercard from '../../../../assets/Mastercard-Logo 1.svg';
import left from '../../../../assets/left.svg';
import right from '../../../../assets/right.svg';

export const TotalBalance = () => {
    return (
        <>
            <section className="total_balance">
                <h3>
                    Total Balance
                </h3>
                <div>
                    <div className='balance'>
                        <h4>$240,399</h4>
                        <p>All Accounts</p>
                    </div>
                    <div className='account_type'>
                        <div>
                            <p style={{ fontSize: '.9rem', fontWeight: '500', color: 'rgba(255, 255, 255, 0.7)' }}>Account Type</p>
                            <p style={{ fontSize: '1rem', fontWeight: '600', color: '#fff', margin: '.4rem 0' }}>Credit Card</p>
                            <p style={{ fontSize: '.9rem', fontWeight: '500', color: 'rgba(255, 255, 255, 0.7)' }}>**** **** **** 2598</p>
                        </div>
                        <div>
                            <img src={mastercard} alt="logo" />
                            <p style={{ display: 'flex', alignItems: 'center', gap: '.7rem' }}>
                                <span style={{ fontSize: '1rem', fontWeight: '600', color: '#fff' }}>$25000</span>
                                <img src={url} alt="url" />
                            </p>
                        </div>
                    </div>
                    <div className='navigation'>
                        <button>
                            <img src={left} alt="" />
                            <span style={{ color: '#D1D1D1' }}>Previous</span>
                        </button>
                        <div>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>
                        <button>
                            <span>Next</span>
                            <img src={right} alt="" />
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}