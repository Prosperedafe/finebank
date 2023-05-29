import './expenses.css';
import food from '../../assets/food.svg';
import others from '../../assets/others.svg';
import housing from '../../assets/housing.svg';
import uparrow from '../../assets/Up arrow.svg';
import shopping from '../../assets/shopping.svg';
import downarrow from '../../assets/Down arrow.svg';
import arrowRight from '../../assets/arrow-right.svg';
import entertainment from '../../assets/entertainment.svg';
import transportation from '../../assets/transport.svg';

const expenses: Array<object> = [
    {
        icon: housing,
        name: 'Housing',
        price: '$250.00',
        rate: '15%*',
        arrow: uparrow,
    },
    {
        icon: food,
        name: 'Food',
        price: '$350.00',
        rate: '08%*',
        arrow: downarrow,
    },
    {
        icon: transportation,
        name: 'Housing',
        price: '$50.00',
        rate: '12%*',
        arrow: downarrow,
    },
    {
        icon: entertainment,
        name: 'Entertainment',
        price: '$80.00',
        rate: '15%*',
        arrow: downarrow,
    },
    {
        icon: shopping,
        name: 'Shopping',
        price: '$420.00',
        rate: '25%*',
        arrow: uparrow,
    },
    {
        icon: others,
        name: 'Others',
        price: '$650.00',
        rate: '15%*',
        arrow: uparrow,
    },
]

export const Expenses = () => {
    return (
        <section className="overview_expenses">
            <h3>Expenses Breakdown</h3>
            <div>
                {expenses.map((expense: object | any, index: number) => {
                    return (
                        <div className='expenses' key={index}>
                            <img src={expense.icon} alt={expense.name} />
                            <div>
                                <h4>{expense.name}</h4>
                                <p className='price'>{expense.price}</p>
                                <p className='rate'><span>{expense.rate}</span><img src={expense.arrow} alt="arrow" /></p>
                            </div>
                            <img src={arrowRight} alt="arrow" />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}