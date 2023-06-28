import './signup.css';
import { eye } from "react-icons-kit/feather/eye";
import { Link } from 'react-router-dom';
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { GoogleBtn, Input, Logo, SignBtn } from '../../components/asset';
import { FC, useState } from 'react';

const Signup: FC = () => {

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
        <section className="signup">
            <Logo />
            <h2>Create an account</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">First Name</label>
                <Input type='text' name='name' placeholder='First name here' />
                <label htmlFor="name">Last Name</label>
                <Input type='text' name='name' placeholder='Last name here' />
                <label htmlFor="email">Email</label>
                <Input type='email' name='email' placeholder='hello@example.com' />
                <label htmlFor="password">Password</label>
                <div className='password'>
                    <Input type={type} placeholder="Password" name='password' />
                    <span onClick={handleToggle}>
                        <Icon icon={icon} size={18} />
                    </span>
                </div>
                <p className='terms'>By continuing, you agree to our <span>terms of service.</span></p>
                <SignBtn content='Sign Up' />
                <p className='rule'><span></span><small>or sign up with</small><span></span></p>
                <GoogleBtn content='Continue with Google' />
            </form>
            <p>Already have an account? <Link to='/login'>Sign in here</Link></p>
        </section>
    )
}

export default Signup