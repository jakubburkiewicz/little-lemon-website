import XIcon from '../icons/XIcon'
import InstagramIcon from '../icons/InstagramIcon'
import FacebookIcon from '../icons/FacebookIcon'

const SocialMediaLinks = props => (
    <ul
        aria-label="Social Media Links"
        { ...props }
    >
        <li className="socialMediaLinks__item">
            <a
                aria-label="Facebook"
                className="socialMediaLinks__link"
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FacebookIcon />
            </a>
        </li>

        <li className="socialMediaLinks__item">
            <a
                aria-label="X (formerly Twitter)"
                className="socialMediaLinks__link"
                href="https://www.x.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <XIcon />
            </a>
        </li>

        <li className="socialMediaLinks__item">
            <a
                aria-label="Instagram"
                className="socialMediaLinks__link"
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <InstagramIcon />
            </a>
        </li>
    </ul>
)

export default SocialMediaLinks