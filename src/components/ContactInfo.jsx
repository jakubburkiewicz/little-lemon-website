const ContactInfo = props => (
    <address
        aria-label="Contact Information"
        { ...props }
    >
        <p className="contactInfo__address">
            123 Main St<br />
            Chicago, IL 60654<br />
            United States<br />
            <a href="https://maps.app.goo.gl/GizDF1MKwJWWYomP6">Get Directions</a>
        </p>

        <dl className="contactInfo__details">
            <dt className="contactInfoDetail__label">E-mail:</dt>
            <dd className="contactInfoDetail__value">
                <a
                    className="contactInfoDetail__link"
                    href="mailto:littlelemon@example.com"
                >littlelemon@example.com</a>
            </dd>

            <dt className="contactInfoDetail__label">Phone:</dt>
            <dd className="contactInfoDetail__value">
                <a
                    className="contactInfoDetail__link"
                    href="tel:+17731234567"
                >(773) 123-4567</a>
            </dd>
        </dl>
    </address>
)

export default ContactInfo