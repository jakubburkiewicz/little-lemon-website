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
        <header
            aria-label="Header"
            { ...props }
        >
            <div className="container">
                <HamburgerToggle
                    aria-label="Toggle navigation"
                    className="button button--toggle headerNavToggle"
                    onClick={ handleNavToggle }
                />

                <img
                    className="headerLogo"
                    src="/Logo.svg"
                    alt="Little Lemon logo"
                />

                <Nav
                    aria-label="Main Navigation"
                    className={ `headerNav ${ navExpanded && 'headerNav--expanded' }` }
                />

                <BasketToggle
                    aria-label="Toggle basket"
                    className="button button--toggle headerBasketToggle"
                />
            </div>
        </header>
    )
}

export default Header