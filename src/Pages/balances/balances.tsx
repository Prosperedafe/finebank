import { PagesHeader } from "../../components/dashboard/header";
import './balances.css'
import mastercard from './assets/Mastercard-Logo 1.svg'
import arrow from './assets/arrow.svg'
import visa from './assets/visa.svg'

const balances: Array<object> = [
    {
        text: "Credit Card",
        role: "Master card",
        img: mastercard,
        rollNo: "3388 4556  8860 8**",
        price: "$25000",
    },
    {
        text: "Checking",
        role: "Add Banks ltd",
        img: visa,
        rollNo: "693 456  69 9****",
        price: "$25000",
    },
    {
        text: "Savings",
        role: "Brac Bank Ltd.",
        rollNo: "133 456  886 8****",
        price: "$25000",
    },
    {
        text: 'Investment',
        role: "AB Bank LTD",
        rollNo: "698 456  866 2****",
        price: "$2500",
    },
    {
        text: "Loan",
        role: "City Bank Ltd.",
        rollNo: "363 456  896 6****",
        price: "$25000",
    },
]
const Balances = () => {
    return (
        <>
            <section className="balances">
                <PagesHeader />
                <h4>Balances</h4>
                <div>
                    {balances.map((balance: object | any, index: number) => {
                        return (
                            <>
                                <div key={index} className="card">
                                    <div className="preview">
                                        <div>
                                            <h5>{balance.text}</h5>
                                        </div>
                                        <div className="cards">
                                            <div>
                                                <p>{balance.role}</p>
                                            </div>
                                            <img src={balance.img} alt="" />
                                        </div>
                                    </div>
                                    <div className="number">
                                        <h6>{balance.rollNo}</h6>
                                        <p>Account Number</p>
                                    </div>
                                    <div className="number">
                                        <h6>{balance.price}</h6>
                                        <p>Total Amount</p>
                                    </div>
                                    <div className="details">
                                        <div>
                                            <p id="remove">Remove</p>
                                        </div>
                                        <div className="detailed">
                                            <div>
                                                <button className="detail">Details</button>
                                            </div>
                                            <img src={arrow} />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                    <div className="card">
                        <div className="account">
                            <button className="add">Add Accounts</button>
                            <p>Edit Accounts</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Balances;