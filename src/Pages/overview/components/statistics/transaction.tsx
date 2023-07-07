import './transaction.css';
import game from '../../assets/game.svg';
import polo from '../../assets/polo.svg';
import briyana from '../../assets/briyani.svg';
import taxi from '../../assets/taxi.svg';
import keyboard from '../../assets/keyboard.svg';
import right from '../../assets/right.svg';
import { FC, useState } from "react";
import { Link } from 'react-router-dom';

const all: Array<object> = [
    {
        icon: game,
        name: 'GTR 5',
        type: 'Gadget & Gear',
        price: '$160.00',
        date: '17 May 2023',
    },
    {
        icon: polo,
        name: 'Polo Shirt',
        type: 'XL fashions',
        price: '$20.00',
        date: '17 May 2023',
    },
    {
        icon: briyana,
        name: 'Biriyani',
        type: 'Hajir Biriyani',
        price: '$10.00',
        date: '17 May 2023',
    },
    {
        icon: taxi,
        name: 'Taxi Fare',
        type: 'Uber',
        price: '$12.00',
        date: '17 May 2023',
    },
    {
        icon: keyboard,
        name: 'Keyboard',
        type: 'Gadget & Gear',
        price: '$22.00',
        date: '17 May 2023',
    },
]

export const Transaction: FC = () => {

    const [tab, setTab] = useState<number>(1);

    return (
        <section className="recent_transaction">
            <header>
                <h3>Recent Transaction</h3>
                <Link to="/transaction">
                    <span>View All</span>
                    <img src={right} alt="" />
                </Link>
            </header>
            <div className="main">
                <hgroup>
                    <button onClick={() => setTab(1)} className={tab === 1 ? 'current' : ''}>All</button>
                    <button onClick={() => setTab(2)} className={tab === 2 ? 'current' : ''}>Revenue</button>
                    <button onClick={() => setTab(3)} className={tab === 3 ? 'current' : ''}>Expenses</button>
                </hgroup>
                {all.map((items: object | any, index: number) => {
                    return (
                        <div className="items" key={index}>
                            <img src={items.icon} alt="item" />
                            <div>
                                <h5>{items.name}</h5>
                                <p>{items.type}</p>
                            </div>
                            <div>
                                <h6>{items.price}</h6>
                                <p>{items.date}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}