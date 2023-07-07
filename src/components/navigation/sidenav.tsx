import './sidenav.css';
import links from './links';
import dp from './icons/profile.png';
import options from './icons/options.svg';
import { clearStorage } from '../../utils/authRoute';
import { NavLink, Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

const logout = () => clearStorage()

export const Logo = () => {
    return (
        <>
            <svg className='logo' width="164" height="19" viewBox="0 0 164 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.841658 18H5.54566V11.376H10.5377V7.8H5.54566V4.824H12.3137V1.08H0.841658V18ZM16.2148 18H20.9188V1.08H16.2148V18ZM36.4856 1.08V10.656L30.2216 1.08H25.5176V18H30.2216V8.544L36.4856 18H41.1896V1.08H36.4856ZM56.6132 1.08H45.7892V18H56.6132V14.232H50.4932V11.184H55.8932V7.608H50.4932V4.848H56.6132V1.08ZM64.0496 6.744V0.24H61.3136V18H64.0496V16.08C64.9136 17.232 66.4736 18.216 68.6576 18.216C72.1376 18.216 74.8736 15.408 74.8736 11.328C74.8736 7.248 72.1616 4.56 68.6576 4.56C66.5696 4.56 64.9136 5.544 64.0496 6.744ZM72.0896 11.328C72.0896 14.184 70.1216 15.84 68.0576 15.84C66.0176 15.84 64.0496 14.232 64.0496 11.376C64.0496 8.544 66.0176 6.936 68.0576 6.936C70.1216 6.936 72.0896 8.472 72.0896 11.328ZM78.5872 11.328C78.5872 15.408 81.3472 18.216 84.7792 18.216C86.9872 18.216 88.5712 17.16 89.4112 16.032V18H92.1712V4.776H89.4112V6.696C88.5952 5.616 87.0592 4.56 84.8272 4.56C81.3472 4.56 78.5872 7.248 78.5872 11.328ZM89.4112 11.376C89.4112 14.232 87.4672 15.84 85.4032 15.84C83.3632 15.84 81.3952 14.184 81.3952 11.328C81.3952 8.472 83.3632 6.936 85.4032 6.936C87.4672 6.936 89.4112 8.544 89.4112 11.376ZM107.069 18H109.781V10.2C109.781 6.504 107.453 4.56 104.357 4.56C102.773 4.56 101.309 5.208 100.421 6.288V4.776H97.6848V18H100.421V10.608C100.421 8.184 101.741 6.936 103.757 6.936C105.749 6.936 107.069 8.184 107.069 10.608V18ZM115.191 18H117.927V12.312L122.823 18H126.519L120.423 11.4L126.519 4.776H122.727L117.927 10.56V0.24H115.191V18ZM133.232 16.416C133.232 15.432 132.464 14.664 131.504 14.664C130.52 14.664 129.752 15.432 129.752 16.416C129.752 17.4 130.52 18.168 131.504 18.168C132.464 18.168 133.232 17.4 133.232 16.416ZM137.653 18H142.357V1.08H137.653V18ZM163.732 9.48C163.732 4.392 159.892 0.816 155.068 0.816C150.268 0.816 146.38 4.392 146.38 9.48C146.38 14.568 150.268 18.168 155.068 18.168C159.868 18.168 163.732 14.568 163.732 9.48ZM151.18 9.48C151.18 6.816 152.62 5.136 155.068 5.136C157.492 5.136 158.956 6.816 158.956 9.48C158.956 12.096 157.492 13.8 155.068 13.8C152.62 13.8 151.18 12.096 151.18 9.48Z" fill="white" />
            </svg>
        </>
    )
}

export const LogoutLogo = () => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.33337 14.1667L12.5 10L8.33337 5.83334" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.5 10H2.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.5 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

const Options = () => {

    const [showCard, setShowCard] = useState<boolean>(false);
    const ref = useRef<HTMLImageElement & HTMLImageElement>(null);

    useOnClickOutside(ref, () => setShowCard(false));

    function useOnClickOutside(ref: any, handler: any) {
        useEffect(() => {
            const listener = (event: any) => {
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        }, [ref, handler]);
    }

    return (
        <div ref={ref} className='nav__options'>
            <img ref={ref} onClick={() => setShowCard(!showCard)} src={dp} alt="dp" />
            <div className={showCard ? "options__card show" : "options__card"}>
                <NavLink onClick={() => setShowCard(!showCard)} to="/expenses">Expenses</NavLink>
                <NavLink onClick={() => setShowCard(!showCard)} to="/goals">Goals</NavLink>
                <NavLink onClick={() => setShowCard(!showCard)} to="/settings">Settings</NavLink>
                <button onClick={logout} className='logout'>
                    <LogoutLogo />
                    <span>Logout</span>
                </button>
            </div>
        </div>
    )
}

const SideNav = () => {

    const fn = JSON.parse(localStorage.getItem("fb/fn/") as string)
    const ln = JSON.parse(localStorage.getItem("fb/ln/") as string)

    return (
        <nav>
            <div>
                <Logo />
                <ul>
                    {links.map((link: object | any, index: number) => {
                        return (
                            <li className={link.className} key={index}>
                                <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={link.path}>
                                    {link.icon}
                                    <span>
                                        {link.name}
                                    </span>
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
                <button onClick={logout} className='logout'>
                    <LogoutLogo />
                    <span>Logout</span>
                </button>
                <Link to='/settings' className="profile">
                    <div>
                        <img className='dp' src={dp} alt="display profile" />
                        <div>
                            <p className='name'>{fn} {ln}</p>
                            <p className='view'>View profile</p>
                        </div>
                        <img className='options' src={options} alt="options" />
                    </div>
                </Link>
                <Options />
            </div>
        </nav>
    )
}

export default SideNav;