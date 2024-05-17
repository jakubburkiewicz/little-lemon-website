import HambugerIcon from "../icons/HamburgerIcon"

const HamburgerToggle = props => (
    <button
        type="button"
        className={ props.className }
        onClick={ props.onClick }
    >
        <HambugerIcon />
    </button>
)

export default HamburgerToggle