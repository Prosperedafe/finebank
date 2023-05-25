import './style.css'
import search from '../../assets/search.svg';

interface attributes {
    content?: string;
    className?: string;
    type?: string;
    onClick?: any;
    placeholder?: string;
}

export const Search = (props: attributes) => {
    return (
        <div className='pages_search'>
            <input type="text" placeholder={props.placeholder} />
            <img src={search} alt="search" />
        </div>
    )
}