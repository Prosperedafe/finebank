import { FC } from 'react';
import '../styles/welcome.css';

export const Welcome: FC = () => {
    return (
        <section id="welcome">
            <div>
                <h1>
                    <span>
                        Welcome
                        to the <br />
                    </span>
                    Finebank - Financial Management <br /> Dashboard
                </h1>
                <p>This file is totally free for education purpose, for commercial licence please contact me on below address.</p>
                <svg width="201" height="2" viewBox="0 0 201 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" width="200" height="2" fill="#878787" />
                </svg>
                <p>Contact me if you need to design your
                    custom project
                </p>
                <a href="mailto:saeefalmahmud@gmail.com">saeefalmahmud@gmail.com</a>
            </div>
        </section>
    )
}