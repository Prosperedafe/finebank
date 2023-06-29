import './assets.css';
import google from '../assets/Google.svg';
import logo from '../assets/logo.svg';
import { FC } from "react";

interface attributes {
    content?: string;
    onClick?: any;
    disabled?: any
}

interface inputs {
    onBlur: any;
    value: any;
    id: string
    onChange: any;
    className: string;
    type: any;
    onClick?: any;
    placeholder: string;
    name: string
}

export const Logo = () => {
    return (
        <img className='logo' src={logo} alt="logo" />
    )
}

export const SignBtn = (props: attributes) => {
    return (
        <button type='submit' className='sign-btn' disabled={props.disabled}>
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

export const Input: FC<inputs> = ({ onBlur, value, id, onChange, className, type, placeholder, name }) => {
    return (
        <input autoComplete='on' className={`form__input ${className}`} onBlur={onBlur} value={value} name={name} id={id} onChange={onChange} type={type} placeholder={placeholder} />
    )
}
