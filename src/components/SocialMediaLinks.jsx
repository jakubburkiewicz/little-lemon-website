const SocialMediaLinks = props => (
    <ul { ...props }>
        <li>
            <a href="https://www.facebook.com">
                <img src="/facebook.svg" alt="facebook" />
            </a>
        </li>

        <li>
            <a href="https://www.x.com">
                <img src="/x.svg" alt="x" />
            </a>
        </li>

        <li>
            <a href="https://www.instagram.com">
                <img src="/instagram.svg" alt="instagram" />
            </a>
        </li>
    </ul>
)

export default SocialMediaLinks