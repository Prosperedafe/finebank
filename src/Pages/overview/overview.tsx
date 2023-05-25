import './overview.css';
import { FC } from "react";
import { Goals } from './components/goals';
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
                </div>
            </section>
        </>
    )
}

export default OverView;