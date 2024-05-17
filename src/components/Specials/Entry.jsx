import { Link } from "react-router-dom"
import ScooterIcon from "../../icons/ScooterIcon"

const SpecialsEntry = ( {
    imageUrl,
    heading,
    price,
    description,
    href
} ) => (
    <article className="specialsEntry">
        <h4 className="specialsEntry__heading">{ heading }</h4>

        <span className="specialsEntry__price">{ price }</span>

        <img
            src={ imageUrl }
            alt={ heading }
            className="specialsEntry__image"
        />

        <p className="specialsEntry__description">{ description }</p>

        <Link
            to={ href }
            className="button button--text specialsEntry__button"
        >
            <span>Order a delivery</span>

            <ScooterIcon />
        </Link>
    </article>
)

export default SpecialsEntry