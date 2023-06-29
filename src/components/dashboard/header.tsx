import './style.css';
import notification from '../../assets/notification.svg';
import right from '../../assets/chevrons-right.svg';
import { Search } from "./dashboardComp";
import { FC, useState } from 'react';

export const PagesHeader: FC = () => {

    const [visible] = useState<string>(window.location.pathname);
    const authName = JSON.parse(localStorage.getItem("fb/fn/") as string)
    let newDate = new Date()
    let date = newDate.getDate();
    let year = newDate.getFullYear();
    const month = newDate.toLocaleString('default', { month: 'long' });

    return (
        <header className='pages_header'>
            <div className='name'>
                {visible === '/' ? <h2>Hello {authName}</h2> : ''}
                <img src={right} alt="" />
                <p>{`${month} ${date} ${year}`}</p>
            </div>
            <div className='notifications'>
                <img src={notification} alt="notification" />
                <Search placeholder='Search here' />
            </div>
        </header>
    )
}