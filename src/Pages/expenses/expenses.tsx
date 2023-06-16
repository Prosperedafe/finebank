import './expenses.css';
import drop from './assets/drop.svg';
import graph from './assets/Graph.svg';
import housing from './assets/housing.svg';
import arrowup from './assets/uparrow.svg';
import { PagesHeader } from '../../components/dashboard/header';

const expenses: Array<object> = [
    {
        icon: housing,
        title: 'Housing',
        price: '$250.00',
        percent: '15%',
        arrow: arrowup,
        compare: 'Compare to last month',
        expense1: 'House Rent',
        expense2: 'Parking',
        price2: '$230.00',
        price3: '$20.00',
        date: '17 May 2023',
        date2: '17 May 2023',
    },
    {
        icon: housing,
        title: 'Housing',
        price: '$250.00',
        percent: '15%',
        arrow: arrowup,
        compare: 'Compare to last month',
        expense1: 'House Rent',
        expense2: 'Parking',
        price2: '$230.00',
        price3: '$20.00',
        date: '17 May 2023',
        date2: '17 May 2023',
    },
    {
        icon: housing,
        title: 'Housing',
        price: '$250.00',
        percent: '15%',
        arrow: arrowup,
        compare: 'Compare to last month',
        expense1: 'House Rent',
        expense2: 'Parking',
        price2: '$230.00',
        price3: '$20.00',
        date: '17 May 2023',
        date2: '17 May 2023',
    },
    {
        icon: housing,
        title: 'Housing',
        price: '$250.00',
        percent: '15%',
        arrow: arrowup,
        compare: 'Compare to last month',
        expense1: 'House Rent',
        expense2: 'Parking',
        price2: '$230.00',
        price3: '$20.00',
        date: '17 May 2023',
        date2: '17 May 2023',
    },
    {
        icon: housing,
        title: 'Housing',
        price: '$250.00',
        percent: '15%',
        arrow: arrowup,
        compare: 'Compare to last month',
        expense1: 'House Rent',
        expense2: 'Parking',
        price2: '$230.00',
        price3: '$20.00',
        date: '17 May 2023',
        date2: '17 May 2023',
    },
    {
        icon: housing,
        title: 'Housing',
        price: '$250.00',
        percent: '15%',
        arrow: arrowup,
        compare: 'Compare to last month',
        expense1: 'House Rent',
        expense2: 'Parking',
        price2: '$230.00',
        price3: '$20.00',
        date: '17 May 2023',
        date2: '17 May 2023',
    },
]

const Expenses = () => {

    return (
        <>
            <PagesHeader />
            <section className="expenses">
                <div className="expenses__comparison">
                    <h3>Expenses Comparison</h3>
                    <div>
                        <div className="expenses__comparison__heading"><h4><span>Monthly Comparison</span><img src={drop} alt="" /></h4>
                            <div>
                                <button>This Week</button>
                                <button>Last Week</button>
                            </div>
                        </div>
                        <img src={graph} alt="graph" />
                    </div>
                </div>
                <h3 style={{ margin: '2rem 0 1rem 0' }}>Expenses Breakdown</h3>
                <div className='expenses__breakdown'>
                    {expenses.map((expense: any, index: number) => {
                        return (
                            <div key={index}>
                                <div className='expenses__breakdown__heading'>
                                    <div className='col-1'>
                                        <img src={expense.icon} alt={expense.name} />
                                        <div>
                                            <h4>{expense.title}</h4>
                                            <p>{expense.price}</p>
                                        </div>
                                    </div>
                                    <div className='col-2'>
                                        <p className='percent'>{expense.percent} <img src={expense.arrow} alt="" /> </p>
                                        <p>{expense.compare}</p>
                                    </div>
                                </div>
                                <div className='expenses__breakdown__body'>
                                    <div className='col col-1'>
                                        <p>{expense.expense1}</p>
                                        <div>
                                            <p style={{ textAlign: 'right' }}>{expense.price2}</p>
                                            <p className='date'>{expense.date}</p>
                                        </div>
                                    </div>
                                    <div className='col col-2'>
                                        <p>{expense.expense2}</p>
                                        <div>
                                            <p style={{ textAlign: 'right' }}>{expense.price3}</p>
                                            <p className='date'>{expense.date2}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Expenses;