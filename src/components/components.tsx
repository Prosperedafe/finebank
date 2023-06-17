import './component.css';

interface btnProp {
    content1: string;
    content2: string
}

export const Month = (props: btnProp) => {
    return (
        <div className="month__filter">
            <button>
                <span></span>{props.content1}
            </button>
            <button>
                <span></span>{props.content2}
            </button>
        </div>
    )
}