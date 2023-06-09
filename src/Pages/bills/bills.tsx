import { PagesHeader } from "../../components/dashboard/header";
import './bills.css';
import Figma from './asesst/Figma.svg';
import Adobe from './asesst/Adobe.svg';

const Bills = () => {
    return (
        <>
            <PagesHeader />
            <section className="bills">
                <h2>Upcoming Bills</h2>
                <div className="bill-intro">
                    <table>
                        <thead>
                            <tr>
                                <th>Due Date</th>
                                <th>Logo</th>
                                <th>Item Description</th>
                                <th>Last Charge</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <button className="month">May <p className="number">15</p></button>
                                </td>
                                <td>
                                    <img src={Figma} alt="figma" />
                                </td>
                                <td>
                                    <h5>Figma - Yearly Plan</h5>
                                    <p>For advanced security and more flexible controls,
                                        the Professional plan helps you
                                        scale design processes company-wide.</p>
                                </td>
                                <td>
                                    14 May, 2022
                                </td>
                                <  td>
                                    <button className="amount">$150</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button className="month">June <p className="number">16</p></button>
                                </td>
                                <td>
                                    <img src={Adobe} />
                                </td>
                                <td>
                                    <h5>Adobe Inc - Yearly plan</h5>
                                    <p>For advanced security and more flexible controls,
                                        the Professional plan helps you scale
                                        design processes company-wide.</p>
                                </td>
                                <td>17 Jun, 2022</td>
                                <td>
                                    <button className="amount">$559</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}
export default Bills