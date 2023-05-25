import './style.css';
import notification from '../../assets/notification.svg';
import right from '../../assets/chevrons-right.svg';
import { Search } from "./dashboardComp";
import { FC, useState } from 'react';

export const PagesHeader: FC = () => {

    const [visible] = useState<string>(window.location.pathname);

    return (
        <header className='pages_header'>
            <div className='name'>
                {visible === '/' ? <h2>Hello Tanzir</h2> : ''}
                <img src={right} alt="" />
                <p>May 19 2023</p>
            </div>
            <div className='notifications'>
                <img src={notification} alt="notification" />
                <Search placeholder='Search here' />
            </div>
        </header>
    )
}