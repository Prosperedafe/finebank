import './sidenav.css';
import logo from '../../assets/FINEbank.IO.svg';
import links from './links';
import { NavLink } from 'react-router-dom'

const SideNav = () => {
    return (
        <nav>
            <div>
                <img src={logo} alt="logo" />
                <ul>
                    {links.map((link: object | any, index: number) => {
                        return (
                            <li key={index}>
                                <NavLink to={link.path}>
                                    <img src={link.icon} alt="icon" />
                                    {link.name}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default SideNav;