import BasketIcon from "../icons/BasketIcon"

const BasketToggle = props => (
    <button
        type="button"
        className={ props.className }
        onClick={ props.onClick }
    >
        <BasketIcon />
    </button>
)

export default BasketToggle