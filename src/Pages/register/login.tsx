import './login.css';
import { FC } from "react";
import { eye } from "react-icons-kit/feather/eye";
import { Link } from 'react-router-dom';
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { useState } from 'react';
import { Input, Logo } from "../../components/asset";
import { GoogleBtn, SignBtn } from '../../components/asset';

const Login: FC = () => {

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
                <Input type='email' placeholder="johndeo@gmail.com" />
                <div className='password_label'>
                    <label htmlFor="password">Password</label>
                    <Link to='/forgotpassword'>Forgot Password?</Link>
                </div>
                <div className='password'>
                    <Input type={type} placeholder="Password" />
                    <span onClick={handleToggle}>
                        <Icon icon={icon} size={18} />
                    </span>
                </div>
                <label htmlFor="checked">
                    <input type="checkbox" name="" id="" />
                    <span className="checkmark"></span>
                    Keep me signed in
                </label>
                <SignBtn content='Login' />
            </form>
            <p><span></span><small>or sign up with</small><span></span></p>
            <GoogleBtn content='Continue with Google' />
            <Link to='/signup'>Create an account</Link>
        </section>
    )
}

export default Login;