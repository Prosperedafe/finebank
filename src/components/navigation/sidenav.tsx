import './sidenav.css';
import logo from '../../assets/FINEbank.IO.svg';
import links from './links';
import logout from './icons/Logout.svg';
import dp from './icons/profile.png';
import options from './icons/options.svg';
import { NavLink } from 'react-router-dom';

const SideNav = () => {
    return (
        <nav>
            <div>
                <img src={logo} alt="logo" />
                <ul>
                    {links.map((link: object | any, index: number) => {
                        return (
                            <li key={index}>
                                <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={link.path}>
                                    <img src={link.icon} alt="icon" />
                                    <span>
                                        {link.name}
                                    </span>
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
                <button className='logout'>
                    <img src={logout} alt="logout" />
                    <span>Logout</span>
                </button>
                <div className="profile">
                    <img className='dp' src={dp} alt="display profile" />
                    <div>
                        <p className='name'>Tanzir Rahman</p>
                        <p className='view'>View profile</p>
                    </div>
                    <img className='options' src={options} alt="options" />
                </div>
            </div>
        </nav>
    )
}

export default SideNav;