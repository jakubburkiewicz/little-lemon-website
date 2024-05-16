import Nav from "./Nav"

const Header = props => (
    <header { ...props }>
        <img
            className="headerLogo"
            src="/Logo.svg"
            alt="logo"
        />

        <Nav class="headerNav" />
    </header>
)

export default Header