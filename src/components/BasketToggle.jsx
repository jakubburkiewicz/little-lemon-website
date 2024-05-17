const BasketToggle = props => (
    <button
        type="button"
        className={ props.className }
        onClick={ props.onClick }
    >
        <img
            className="basketToggle__icon"
            src="/Basket.svg"
            alt="basket"
        />
    </button>
)

export default BasketToggle