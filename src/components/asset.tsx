import './assets.css';
import google from '../assets/Google.svg';
import logo from '../assets/logo.svg';

interface attributes {
    content?: string;
    className?: string;
    type?: string;
    onClick?: any;
    placeholder?: string;
}

interface inputs {
    className?: string;
    type?: any;
    onClick?: any;
    placeholder?: string;
    name?: string
}

export const Logo = () => {
    return (
        <img className='logo' src={logo} alt="logo" />
    )
}


export const SignBtn = (props: attributes) => {
    return (
        <button className='sign-btn'>
            {props.content}
        </button>
    )
}

export const GoogleBtn = (props: attributes) => {
    return (
        <button className='google-btn'>
            <img src={google} alt="Google logo icon" />
            <span>{props.content}</span>
        </button>
    )
}

export const Input = (props: inputs) => {
    return (
        <input className='form__input' name={props.name} type={props.type} placeholder={props.placeholder} />
    )
}