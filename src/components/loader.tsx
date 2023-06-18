import { ScaleLoader } from 'react-spinners';

export const Loader = () => {
    return (
        <div className='scale__loader'>
            <ScaleLoader color='#299d91' />
        </div>
    )
}

import logo from '../assets/logo.svg';

export const AppLoader = () => {
    return (
        <div className='app__loader'>
            <img src={logo} alt="logo" />
        </div>
    )
}