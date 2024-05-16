import ContactInfo from "./ContactInfo"
import Nav from "./Nav"
import SocialMediaLinks from "./SocialMediaLinks"

const Footer = props => (
    <footer { ...props }>
        <img
            className="footerLogo"
            src="/LogoVertical.png"
            alt="logo"
        />

        <Nav className="footerNav" />

        <ContactInfo className="contactInfo" />

        <SocialMediaLinks className="socialMediaLinks" />
    </footer>
)

export default Footer