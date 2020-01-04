import Layout from "../components/Layout";
import Head from "next/head";

export default function Index() {
    return (
        <Layout>
            <Head>
                <title>
                    Heath Blandford | Exactly who you were looking for...
                </title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Roboto"
                    rel="stylesheet"
                />
            </Head>
            <h1 className="main-title">Hey👋 I'm Heath!</h1>
            <div className="flex-container aboutMe">
                <div className="quik-about container info-card">
                    <div className="image">
                        <img
                            src="/good-me.jpg"
                            alt="a nice picture of me"
                            id="good-me"
                        />
                    </div>
                    <div className="info">
                        <p>
                            I'm a Petroleum Engineer by education (B.S. in
                            Petroluem Engineering from Marietta College in 2016){" "}
                            <br />
                            <br />A Mechanical Design Engineer by Profession{" "}
                            <br />
                            <br /> And a Web Developer by Passion.
                        </p>
                        <p>In my free time, I like to do a few things:</p>
                        <ul>
                            <li>3D Print</li>
                            <li>
                                Play video games (although I'm pretty bad at
                                most of them)
                            </li>
                            <li>Cook</li>
                        </ul>
                        <p>📍 Currently in: Cincinnati, OH</p>

                        <p>Things I love:</p>
                        <ul>
                            <li>JavaScript</li>
                            <li>NodeJS</li>
                            <li>Consumer Technology</li>
                            <li>Hip Hop and House music</li>
                            <li>Keyboards</li>
                        </ul>
                    </div>
                    <div className="bottom-socials">
                        <a href="https://www.twitter.com/whoisheath_">
                            <img src="twitter.svg" alt="twitter" />
                        </a>
                        <a href="https://www.linkedin.com/in/heathblandford">
                            <img src="linkedin.svg" alt="linkedin" />
                        </a>
                        <a href="https://www.github.com/heathblandford">
                            <img src="github.svg" alt="github" />
                        </a>
                        <a href="https://www.last.fm/user/cloolis">
                            <img src="lastfm.svg" alt="lastfm" />
                        </a>
                        <a href="https://www.instagram.com/whoisheath_">
                            <img src="instagram.svg" alt="instagram" />
                        </a>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .main-title {
                    font-family: "Roboto", sans-serif;
                    font-size: 3.5em;
                    text-align: center;
                }
                .flex-container {
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: center;
                }
                .container {
                    box-shadow: 2px 2px 5px #333;
                    display: grid;
                    grid-template-columns: 50% 50%;
                    grid-template-rows: 90% 100px;
                    grid-template-areas:
                        "top top"
                        "bot bot";
                    padding: 50px;
                    width: 50vw;
                    min-height: 500px;
                    margin: 20px;
                }
                .image > img {
                    object-fit: cover;
                    width: 100%;
                    max-height: 100%;
                }
                .bottom-socials {
                    text-align: center;
                    grid-area: bot;
                    justify-self: stretch;
                    align-self: center;
                    width: 100%;
                }
                .bottom-socials img {
                    height: 50px;
                    width: 50px;
                    padding: 10px;
                }
                .info-card {
                    background: white;
                    font-family: "Roboto", sans-serif;
                }
                .info {
                    padding: 0px 25px;
                }
                .info > p {
                    margin: 0;
                }
                @media (max-width: 1100px) {
                    .container {
                        padding: 10px;
                        width: 80vw;
                        grid-template-columns: 100%;
                        grid-template-rows: 600px auto auto;
                        grid-template-areas:
                            "one"
                            "two"
                            "three";
                    }
                    .info {
                        grid-area: two;
                    }
                    .info > p {
                        margin: 16px 0px;
                    }
                    .bottom-socials {
                        grid-area: three;
                    }
                    .bottom-socials img {
                        height: 30px;
                        width: 30px;
                    }
                }
                @media (max-width: 415px) {
                    .container {
                        padding: 10px;
                        width: 80vw;
                        grid-template-columns: 100%;
                        grid-template-rows: 200px auto auto;
                        grid-template-areas:
                            "one"
                            "two"
                            "three";
                    }
                    .info {
                        grid-area: two;
                    }
                    .info > p {
                        margin: 16px 0px;
                    }
                    .bottom-socials {
                        grid-area: three;
                    }
                    .bottom-socials img {
                        height: 30px;
                        width: 30px;
                    }
                }
            `}</style>
        </Layout>
    );
}
