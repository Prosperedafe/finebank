import './transaction.css';
import gamepad from './assests/gamepad.svg';
import Trasnport from './assests/Trasnport.svg';
import { PagesHeader } from '../../components/dashboard/header';
import { FC, useState } from "react";


const transaction: Array<object> = [
  {
    img: gamepad,
    text: 'GTR 5',
    name: "Gadget & Gear",
    date: "17 May, 2023",
    role: "Credit Card",
    price: "$160.00",
  },
  {
    img: gamepad,
    text: "Polo Shirt",
    name: "XL fashions",
    date: "17 May, 2023",
    role: "Credit Card",
    price: "$20.00",
  },
  {
    img: Trasnport,
    text: "Biriyani",
    name: "Hajir Biriyani",
    date: "17 May, 2023",
    role: "Credit Card",
    price: "$30.00",
  },
  {
    text: "Movie ticket",
    img: gamepad,
    name: "inbox",
    date: "17 May, 2023",
    role: "Credit Card",
    price: "$15.00",
  },
  {
    text: "Taxi fare",
    img: Trasnport,
    name: "Uber",
    date: "17 May, 2023",
    role: "Credit Card",
    price: "$1 0.00",
  },
  {
    text: "Pizza",
    img: Trasnport,
    name: 'Pizza Hit',
    date: "17 May, 2023",
    role: "Credit Card",
    price: "$20.00",
  },
  {
    text: 'Keyboard',
    img: gamepad,
    name: 'Gadget & Gear',
    date: "17 May, 2023",
    role: "Credit Card",
    price: "$30.00",
  },
]
export const Transaction: FC = () => {

  const [tab, setTab] = useState<number>(1);

  return (
    <>
      <PagesHeader />
      <section className='transaction'>
          <h2>Recent Transaction</h2>
        <div className="main">
          <hgroup>
            <button onClick={() => setTab(1)} className={tab === 1 ? 'current' : ''}>All</button>
            <button onClick={() => setTab(2)} className={tab === 2 ? 'current' : ''}>Revenue</button>
            <button onClick={() => setTab(3)} className={tab === 3 ? 'current' : ''}>Expenses</button>
          </hgroup>
        </div>
        <div className='transacted'>
          <table>
            <thead>
              <tr>
                <th>
                  Items
                </th>
                <th>
                  Shop Name
                </th>
                <th>
                  Date
                </th>
                <th>
                  Payment Method
                </th>
                <th>
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {transaction.map((transaction: object | any, index: number) => {
                return (
                  <tr key={index}>
                    <td className="items">
                      <img src={transaction.img} alt={transaction.text} />
                      <span>{transaction.text}</span>
                    </td>
                    <td><span>{transaction.name}</span></td>
                    <td><span>{transaction.date}</span></td>
                    <td><span>{transaction.role}</span></td>
                    <td><span>{transaction.price}</span></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <div className='more'>
            <button className='load-more'>Load More</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Transaction;