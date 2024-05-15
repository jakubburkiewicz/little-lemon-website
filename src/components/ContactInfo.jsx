const ContactInfo = props => (
    <address { ...props }>
        <span>123 Main St</span><br />
        <span>Chicago, IL 60654</span><br />
        <span>United States</span><br />
        <a href="https://maps.app.goo.gl/GizDF1MKwJWWYomP6">Get Directions</a><br />
        <br />
        <a href="mailto:littlelemon@example.com">littlelemon@example.com</a><br />
        <a href="tel:+1234567890">(123) 456-7890</a>
    </address>
)

export default ContactInfo