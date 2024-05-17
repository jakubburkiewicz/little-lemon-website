const HamburgerToggle = props => (
    <button
        type="button"
        className={ props.className }
        onClick={ props.onClick }
    >
        <img
            className="hamburgerToggle__icon"
            src="/hamburger.svg"
            alt="menu"
        />
    </button>
)

export default HamburgerToggle