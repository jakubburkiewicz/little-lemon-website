import Nav from "./Nav"

const Header = props => (
    <header { ...props }>
        <img src="/Logo.svg" alt="logo" />

        <Nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>

                <li>
                    <a href="/about">About</a>
                </li>

                <li>
                    <a href="/menu">Menu</a>
                </li>

                <li>
                    <a href="/reservations">Reservations</a>
                </li>

                <li>
                    <a href="/order-online">Order online</a>
                </li>

                <li>
                    <a href="/login">Login</a>
                </li>
            </ul>
        </Nav>
    </header>
)

export default Header