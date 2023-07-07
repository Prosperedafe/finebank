import "../App.css";
import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <section className="error_page">
            <h1>Page not found</h1>
            <p>The requested page does not exist. <br /> <Link to="/">Back to Home</Link> </p>
        </section>
    )
}