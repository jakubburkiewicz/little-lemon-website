import { NavLink } from "react-router-dom"

const Nav = props => (
    <nav
        aria-label="Primary navigation"
        { ...props }
    >
        <ul className="navList">
            <li className="navList__item">
                <NavLink
                    className={ ( { isActive } ) => isActive ? 'navList__link navList__link--active' : 'navList__link' }
                    to={ '/' }
                >Home</NavLink>
            </li>

            <li className="navList__item">
                <NavLink
                    className={ ( { isActive } ) => isActive ? 'navList__link navList__link--active' : 'navList__link' }
                    to={ '/about' }
                >About</NavLink>
            </li>

            <li className="navList__item">
                <NavLink
                    className={ ( { isActive } ) => isActive ? 'navList__link navList__link--active' : 'navList__link' }
                    to={ '/menu' }
                >Menu</NavLink>
            </li>

            <li className="navList__item">
                <NavLink
                    className={ ( { isActive } ) => isActive ? 'navList__link navList__link--active' : 'navList__link' }
                    to={ '/reservations' }
                >Reservations</NavLink>
            </li>

            <li className="navList__item">
                <NavLink
                    className={ ( { isActive } ) => isActive ? 'navList__link navList__link--active' : 'navList__link' }
                    to={ '/order-online' }
                >Order online</NavLink>
            </li>

            <li className="navList__item">
                <NavLink
                    className={ ( { isActive } ) => isActive ? 'navList__link navList__link--active' : 'navList__link' }
                    to={ '/login' }
                >Login</NavLink>
            </li>
        </ul>
    </nav>
)

export default Nav