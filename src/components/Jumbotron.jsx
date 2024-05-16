import { Link } from "react-router-dom"

const Jumbotron = () => (
    <article className="jumbotron">
        <div className="container">
            <h1>Little Lemon</h1>

            <h2>Chicago</h2>

            <p>
                <img
                    className="jumbotron__image"
                    src="/restaurantfood.jpg"
                    alt="lemon"
                />

                Little&nbsp;Lemon is a&nbsp;charming neighborhood bistro that serves simple food and classic cocktails in a&nbsp;lively but casual&nbsp;environment.<br />
                The restaurant features a&nbsp;locally-sourced menu with daily&nbsp;specials.
            </p>

            <Link
                to={ '/reservations' }
                className="button button--primary"
            >Reserve a Table</Link>
        </div>
    </article>
)

export default Jumbotron