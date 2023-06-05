import './transaction.css';
import gamepad from './assests/gamepad.svg';
import keyboard from './assests/keyboard.png';
import plate from './assests/plate.png';
import ticket from './assests/plate.png';
import Trasnport from './assests/Trasnport.svg';
import polo from './assests/polo.svg';
import { PagesHeader } from '../../components/dashboard/header';

const transactions: Array<object> =[
    {
        img:gamepad,
        text: 'GTR 5',
        name:"Gadget & Gear",
        date: "17 May, 2023",
        role:"Credit Card",
        price:"$160.00",
    },
    {
        img: polo,
        text:"Polo Shirt",
        name:"XL fashions",
        date:"17 May, 2023",
        role:"Credit Card",
        price:"$20.00",
    },
    {
        img:plate,
        text:"Biriyani",
        name:"Hajir Biriyani",
       date:"17 May, 2023",
        role:"Credit Card",
        price:"$30.00",
    },
    {
        text:"Movie ticket",
       img:ticket,  
       name:"inbox",    
       date:"17 May, 2023",
        role:"Credit Card",
        price:"$15.00",
    },
    {
        text:"Taxi fare",
        img:Trasnport,
        name:"Uber",
        date:"17 May, 2023",
        role:"Credit Card",
        price:"$1 0.00",
    },
    {
        text:"Pizza",
        img:plate,
        name:'Pizza Hit',
        date:"17 May, 2023",
        role:"Credit Card",
        price:"$20.00",
    },
    {
        text:'Keyboard',
        img: keyboard,
        name:'Gadget & Gear',
        date:"17 May, 2023",
        role:"Credit Card",
        price:"$30.00",
    },
]


const Transaction = () =>{
    return(
    <>


    <section className='transaction'>
      <PagesHeader /> 
      <h4>Recent Transaction</h4>
      {transactions.map((transaction: object | any, index: number) =>{
          return(
            <div className='transacts'>
            <div key={index} className='transact'>
            <div className='flex-1'>
             <figure>
              <img src={transaction.img}/>
              </figure>
              <div>
                <h6>{transaction.text}</h6>
                </div>
                </div>
                <h5>{transaction.name}</h5>
                <h5>{transaction.date}</h5>
                <h5>{transaction.role}</h5>
                <h6>{transaction.price}</h6>
            </div>
            </div>
        )
    } )}
    </section>
    </>
)
}

export default Transaction;