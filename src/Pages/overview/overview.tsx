import './overview.css';
import { FC } from "react";
import { TotalBalance } from "./plans";
import { PagesHeader } from "../../components/dashboard/header";

const OverView: FC = () => {

    return (
        <>
            <PagesHeader />
            <section className='overview'>
                <TotalBalance />
            </section>
        </>
    )
}

export default OverView;