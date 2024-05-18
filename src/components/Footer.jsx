import ContactInfo from "./ContactInfo"
import Nav from "./Nav"
import SocialMediaLinks from "./SocialMediaLinks"

const Footer = props => (
    <footer { ...props }>
        <div className="container">
            <img
                className="footerLogo"
                src="/logoWhite.png"
                alt="logo"
            />

            <Nav className="footerNav" />

            <ContactInfo className="contactInfo" />

            <SocialMediaLinks className="socialMediaLinks" />
        </div>
    </footer>
)

export default Footer