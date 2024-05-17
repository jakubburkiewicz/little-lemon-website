const About = () => (
    <article className="about">
        <div className="container">
            <div className="about__texts">
                <h1>Little Lemon</h1>

                <h2>Chicago</h2>

                <p>
                    Little&nbsp;Lemon is a&nbsp;charming neighborhood bistro that serves simple food and classic cocktails in a&nbsp;lively but casual&nbsp;environment.<br />
                    The restaurant features a&nbsp;locally-sourced menu with daily&nbsp;specials.
                </p>
            </div>

            <div className="about__images">
                <img
                    className="about__image"
                    src="/MarioAndAdrianA.jpg"
                    alt="lemon"
                />

                <img
                    className="about__image"
                    src="/MarioAndAdrianB.jpg"
                    alt="lemon"
                />
            </div>
        </div>
    </article>
)

export default About