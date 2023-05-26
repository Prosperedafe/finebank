import './overview.css';
import { FC } from "react";
import { Bill } from './components/bill';
import { Goals } from './components/goals';
import { Statistics } from './components/statistics';
import { Transaction } from './components/transaction';
import { PagesHeader } from "../../components/dashboard/header";
import { TotalBalance } from "./components/totalBalance";

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
                    <div>
                        <Statistics />
                    </div>
                </div>
            </section>
        </>
    )
}

export default OverView;