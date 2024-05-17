import { useState } from "react"

import HamburgerToggle from "./HamburgerToggle"
import Nav from "./Nav"
import BasketToggle from "./BasketToggle"

const Header = props => {
    const [ navExpanded, setNavExpanded ] = useState( false )

    const handleNavToggle = () => {
        setNavExpanded( !navExpanded )
    }

    return (
        <header { ...props }>
            <div className="container">
                <HamburgerToggle
                    className="button button--toggle headerNavToggle"
                    onClick={ handleNavToggle }
                />

                <img
                    className="headerLogo"
                    src="/Logo.svg"
                    alt="logo"
                />

                <Nav
                    className={ `headerNav ${ navExpanded && 'headerNav--expanded' }` }
                />

                <BasketToggle
                    className="button button--toggle headerBasketToggle"
                />
            </div>
        </header>
    )
}

export default Header