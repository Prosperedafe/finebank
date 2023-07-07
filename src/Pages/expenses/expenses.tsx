import './expenses.css';
import drop from './assets/drop.svg';
import food from "./assets/food.svg";
import graph from './assets/Graph.svg';
import others from "./assets/others.svg";
import housing from './assets/housing.svg';
import arrowup from './assets/uparrow.svg';
import shopping from "./assets/shopping.svg";
import { Month } from '../../components/components';
import transport from "./assets/transport.svg";
import entertainment from "./assets/entertainment.svg";
import { PagesHeader } from '../../components/dashboard/header';
import downArrow from "./assets/Down arrow.svg";

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
        icon: food,
        title: 'Grocery',
        price: '$350.00',
        percent: '08%',
        arrow: downArrow,
        compare: 'Compare to last month',
        expense1: 'Grocery',
        expense2: 'Restaurant bill',
        price2: '$230.00',
        price3: '$120.00',
        date: '17 May 2023',
        date2: '17 May 2023',
    },
    {
        icon: transport,
        title: 'Transportation',
        price: '$50.00',
        percent: '12%',
        arrow: downArrow,
        compare: 'Compare to last month',
        expense1: 'Taxi Fare',
        expense2: 'Metro Card bill',
        price2: '$30.00',
        price3: '$20.00',
        date: '17 May 2023',
        date2: '17 May 2023',
    },
    {
        icon: entertainment,
        title: 'Entertainment',
        price: '$80.00',
        percent: '15%',
        arrow: downArrow,
        compare: 'Compare to last month',
        expense1: 'Movie ticket',
        expense2: 'iTunes',
        price2: '$30.00',
        price3: '$50.00',
        date: '17 May 2023',
        date2: '17 May 2023',
    },
    {
        icon: shopping,
        title: 'Shopping',
        price: '$250.00',
        percent: '25%',
        arrow: arrowup,
        compare: 'Compare to last month',
        expense1: 'Shirt',
        expense2: 'Jeans',
        price2: '$230.00',
        price3: '$190.00',
        date: '17 May 2023',
        date2: '17 May 2023',
    },
    {
        icon: others,
        title: 'Others',
        price: '$50.00',
        percent: '23%',
        arrow: arrowup,
        compare: 'Compare to last month',
        expense1: 'Donation',
        expense2: 'Gift',
        price2: '$30.00',
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
                        <div className="expenses__comparison__heading">
                            <h4><span>Monthly Comparison</span><img src={drop} alt="" /></h4>
                            <Month content1='This week' content2='Last Week' />
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