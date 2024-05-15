import Nav from "./Nav"

const Header = props => (
    <header { ...props }>
        <img src="/Logo.svg" alt="logo" />

        <Nav />
    </header>
)

export default Header