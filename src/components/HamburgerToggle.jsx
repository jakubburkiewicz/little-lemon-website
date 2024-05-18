import HambugerIcon from "../icons/HamburgerIcon"

const HamburgerToggle = props => (
    <button
        aria-label="Menu"
        type="button"
        className={ props.className }
        onClick={ props.onClick }
    >
        <HambugerIcon />
    </button>
)

export default HamburgerToggle