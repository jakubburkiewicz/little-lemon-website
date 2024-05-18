import { Link } from "react-router-dom"
import SpecialsEntry from "./Entry"

const specials = [
    {
        imageUrl: "/specialimage.jpg",
        heading: "Special 1",
        price: "$10",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies bibendum, nunc nunc.",
        href: "/menu"
    },
    {
        imageUrl: "/specialimage.jpg",
        heading: "Special 2",
        price: "$15",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies bibendum, nunc nunc.",
        href: "/menu"
    },
    {
        imageUrl: "/specialimage.jpg",
        heading: "Special 3",
        price: "$20",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies bibendum, nunc nunc.",
        href: "/menu"
    }
]

const Specials = () => {
    return (
        <section
            aria-labelledby="specialsHeading"
            className="specials"
        >
            <header className="container specials__header">
                <h1
                    id="specialsHeading"
                    className="specials__heading"
                >Specials</h1>

                <Link
                    aria-label="Online Menu"
                    to="/menu"
                    className="button button--primary"
                >Online Menu</Link>
            </header>

            <div className="container specials__entries">
                {
                    specials.map( ( special, index ) => (
                        <SpecialsEntry
                            key={ index }
                            { ...special }
                        />
                    ) )
                }
            </div>
        </section>
    )
}

export default Specials