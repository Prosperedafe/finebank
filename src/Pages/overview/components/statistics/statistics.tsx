import arrowdown from '../../assets/arrow-down.svg';

export const Statistics = () => {
    return (
        <section className="statistics">
            <h3>Statistics</h3>
            <div>
                <div className="statistics_filter">
                    <h4><span>Weekly Comparison</span><img src={arrowdown} alt="" /></h4>
                    <div>
                        <button>
                            <span></span>This week
                        </button>
                        <button>
                            <span></span>Last Week week
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}