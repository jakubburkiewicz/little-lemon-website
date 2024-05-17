import TestimonialsEntry from "./Entry"

const testimonials = [
    {
        rating: 5,
        authorName: 'John Doe',
        authorNickname: 'johndoe',
        authorAvatarUrl: '/johndoe.png',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        rating: 4,
        authorName: 'Jane Doe',
        authorNickname: 'janedoe',
        authorAvatarUrl: '/janedoe.png',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor,'
    },
    {
        rating: 3,
        authorName: 'John Smith',
        authorNickname: 'johnsmith',
        authorAvatarUrl: '/johnsmith.png',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor,'
    },
    {
        rating: 2,
        authorName: 'Jane Smith',
        authorNickname: 'janesmith',
        authorAvatarUrl: '/janesmith.png',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies bibendum, nunc nunc.'
    }
]

const Testimonials = () => (
    <section className="testimonials">
        <header className="container testimonials__header">
            <h1 className="testimonials__heading">Testimonials</h1>
        </header>

        <div className="container testimonials__entries">
            {
                testimonials.map( ( testimonial, index ) => (
                    <TestimonialsEntry
                        key={ index }
                        { ...testimonial }
                    />
                ) )
            }
        </div>
    </section>
)

export default Testimonials