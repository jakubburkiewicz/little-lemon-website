const TestimonialsEntry = ( {
    rating,
    authorName,
    authorNickname,
    authorAvatarUrl,
    review
} ) => (
    <article
        aria-labelledby="testimonialsEntryHeading"
        className="testimonialsEntry"
    >
        <div className="testimonialsEntry__rating">
            {
                Array.from( { length: rating }, ( _, index ) => (
                    <span
                        key={ index }
                        aria-hidden="true"
                        className="testimonialsEntry__star"
                    >★</span>
                ))
            }
        </div>

        <div className="testimonialsEntry__author">
            <img
                src={ authorAvatarUrl }
                alt={ `Avatar of ${ authorName }` }
                className="testimonialsEntry__avatar"
            />

            <h4
                id="testimonialsEntryHeading"
                className="testimonialsEntry__name"
            >{ authorName }</h4>

            <span className="testimonialsEntry__nickname">@{ authorNickname }</span>
        </div>

        <p className="testimonialsEntry__review">{ review }</p>
    </article>
)

export default TestimonialsEntry