import './goal.css';
import food from './assests/food.png';
import edit from './assests/edit.svg';
import other from './assests/other.svg';
import Housing from './assests/Housing.svg';
import shopping from './assests/shopping.svg';
import { Saving } from "./components/saving";
import { Summary } from "./components/summary";
import entertainment from './assests/entertainment.svg';
import transportation from './assests/transportation.svg';
import { PagesHeader } from "../../components/dashboard/header";

interface content {
    content: string
}

export const AdjustBtn = (props: content) => {
    return (
        <button className="goals__adjust"><span>{props.content}</span><img src={edit} alt="" /></button>
    )
}

const goals: Array<object> = [
    {
        name: "Housing",
        img: Housing,
        price: "$250.00",
    },
    {
        name: "Food",
        img: food,
        price: "$250.00",
    },
    {
        name: "Transportation",
        img: transportation,
        price: "$250.00",
    },
    {
        name: "Entertainment",
        img: entertainment,
        price: "$250.00",
    },
    {
        name: "Shopping",
        img: shopping,
        price: "$250.00",
    },
    {
        name: "Others",
        img: other,
        price: "$250.00",
    },
]

const Goals = () => {
    return (
        <>
            <PagesHeader />
            <section className="goals">
                <h3>Goals</h3>
                <div className="goals__saving">
                    <Saving />
                    <div style={{ overflowX: "scroll", maxWidth: "100%" }}>
                        <Summary />
                    </div>
                </div>
                <section className="goals__expenses__category">
                    <h3>Expenses Goals by Category</h3>
                    <div>
                        {goals.map((goal: any, index: number) => {
                            return (
                                <div className="goals__expenses__category__type" key={index}>
                                    <div>
                                        <img src={goal.img} alt={goal.name} />
                                        <div>
                                            <h5>{goal.name}</h5>
                                            <p>{goal.price}</p>
                                        </div>
                                    </div>
                                    <AdjustBtn content='Adjust' />
                                </div>
                            )
                        })}
                    </div>
                </section>
            </section>
        </>
    )
}
export default Goals;