import './register.css';
import google from '../../assets/Google.svg';
import { FC } from "react";
import { eye } from "react-icons-kit/feather/eye";
import { Logo } from "../../components/asset";
import { Link } from 'react-router-dom';
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { useState } from 'react';

export const Login: FC = () => {

    const [type, setType] = useState<string>("password");
    const [icon, setIcon] = useState<any>(eyeOff);

    const handleToggle = () => {
        if (type === "password") {
            setIcon(eye);
            setType("text");
        } else {
            setIcon(eyeOff);
            setType("password");
        }
    };

    const handleSubmit = (e: any) => {
        e.preventDefault()
    }

    return (
        <section className="login">
            <Logo />
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email Address</label><br />
                <input type="email" placeholder="johndeo@gmail.com" />
                <div className='password_label'>
                    <label htmlFor="password">Email Address</label>
                    <Link to='/forgotpassword'>Forgot Password?</Link>
                </div>
                <div className='password'>
                    <input type={type} placeholder="password" />
                    <span onClick={handleToggle}>
                        <Icon icon={icon} size={18} />
                    </span>
                </div>
                <label htmlFor="checked">
                    <input type="checkbox" name="" id="" />
                    <span className="checkmark"></span>
                    Keep me signed in
                </label>
                <button type="submit">Login</button>
            </form>
            <p><span></span><small>or sign up with</small><span></span></p>
            <button className='google-btn'>
                <img src={google} alt="Google logo icon" />
                <span>Continue with Google</span>
            </button>
            <Link to='/signup'>Create an account</Link>
        </section>
    )
}