import ContactInfo from "./ContactInfo"
import Nav from "./Nav"
import SocialMediaLinks from "./SocialMediaLinks"

const Footer = props => (
    <footer { ...props }>
        <img
            src="/LogoVertical.png"
            alt="logo"
        />

        <Nav />

        <ContactInfo />

        <SocialMediaLinks />
    </footer>
)

export default Footer