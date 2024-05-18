import ContactInfo from "./ContactInfo"
import Nav from "./Nav"
import SocialMediaLinks from "./SocialMediaLinks"

const Footer = props => (
    <footer
        aria-label="Footer"
        { ...props }
    >
        <div className="container">
            <img
                className="footerLogo"
                src="/logoWhite.png"
                alt="Little Lemon logo"
            />

            <Nav
                aria-label="Footer Navigation"
                className="footerNav"
            />

            <ContactInfo
                aria-label="Contact Information"
                className="contactInfo"
            />

            <SocialMediaLinks
                aria-label="Social Media Links"
                className="socialMediaLinks"
            />
        </div>
    </footer>
)

export default Footer