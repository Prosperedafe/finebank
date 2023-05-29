import './overview.css';
import { FC } from "react";
import { Bill } from './components/goals/bill';
import { Goals } from './components/goals/goals';
import { Expenses } from './components/statistics/expenses';
import { Statistics } from './components/statistics/statistics';
import { Transaction } from './components/statistics/transaction';
import { PagesHeader } from "../../components/dashboard/header";
import { TotalBalance } from "./components/goals/totalBalance";

const OverView: FC = () => {

    return (
        <>
            <PagesHeader />
            <section className='overview'>
                <div className='overview_revenues'>
                    <TotalBalance />
                    <Goals />
                    <Bill />
                </div>
                <div className="transactions">
                    <Transaction />
                    <div className='stats'>
                        <Statistics />
                        <Expenses />
                    </div>
                </div>
            </section>
        </>
    )
}

export default OverView;