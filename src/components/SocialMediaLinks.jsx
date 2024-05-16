const SocialMediaLinks = props => (
    <ul { ...props }>
        <li className="socialMediaLinks__item">
            <a
                className="socialMediaLinks__item"
                href="https://www.facebook.com"
            >
                <img
                    className="socialMediaLinks__logo"
                    src="/facebook.svg"
                    alt="facebook"
                />
            </a>
        </li>

        <li className="socialMediaLinks__item">
            <a
                className="socialMediaLinks__item"
                href="https://www.x.com"
            >
                <img
                    className="socialMediaLinks__logo"
                    src="/x.svg"
                    alt="x"
                />
            </a>
        </li>

        <li className="socialMediaLinks__item">
            <a
                className="socialMediaLinks__item"
                href="https://www.instagram.com"
            >
                <img
                    className="socialMediaLinks__logo"
                    src="/instagram.svg"
                    alt="instagram"
                />
            </a>
        </li>
    </ul>
)

export default SocialMediaLinks