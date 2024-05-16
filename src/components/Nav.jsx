const Nav = props => (
    <nav { ...props }>
        <ul className="navList">
            <li className="navList__item">
                <a
                    className="navList__link"
                    href="/"
                >Home</a>
            </li>

            <li className="navList__item">
                <a
                    className="navList__link"
                    href="/about"
                >About</a>
            </li>

            <li className="navList__item">
                <a
                    className="navList__link"
                    href="/menu"
                >Menu</a>
            </li>

            <li className="navList__item">
                <a
                    className="navList__link"
                    href="/reservations"
                >Reservations</a>
            </li>

            <li className="navList__item">
                <a
                    className="navList__link"
                    href="/order-online"
                >Order online</a>
            </li>

            <li className="navList__item">
                <a
                    className="navList__link"
                    href="/login"
                >Login</a>
            </li>
        </ul>
    </nav>
)

export default Nav