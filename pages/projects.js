import Layout from "../components/Layout";
import Head from "next/head";

export default function Projects() {
    return (
        <Layout>
            <Head>
                <title>Heath Blandford | Projects & API Info</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <div id="websites">
                <h1>Websites</h1>
                <ul>
                    <li>
                        This website! whb.sh is built with NextJS and will also
                        house the middleware and routing for my future APIs
                    </li>
                    <ul>
                        <li>Hosted on Zeit with styled components</li>
                    </ul>
                    <li>
                        <a href="#">
                            <img
                                src="/stlwarehouse.png"
                                id="stlwarehouse"
                                alt="STLWarehouse Landing Page"
                            />
                        </a>
                    </li>
                    <ul>
                        <li>The new place for all things Maker</li>
                        <li>The initial idea is to have people be able to upload, download, and view 3D Printing Files, but have a much better experience with search and keeping a lit of favorited/liked projects on an account by account basis</li>
                        <li>Using Google Cloud SQL (MySQL) for database</li>
                        <li>React Frontend with Material UI, NodeJs backend, SQL database and AWS S3 for files</li>
                        <li>**This is my current big project, and is still very much a work in progress**</li>
                    </ul>
                    <li>
                        <a href="https://quirky-mahavira-6e1270.netlify.com/">
                            <img
                                src="/disappointing.png"
                                id="disappointing"
                                alt="Disappointing 30 under 30 landing page"
                            />
                        </a>
                    </li>
                    <ul>
                        <li>Built with React on the frontend</li>
                        <li>
                            Using MongoDB, Mongoose, and Express on the backend
                        </li>
                        <li>
                            Frontend hosted on Netlify, with backend on Heroku
                        </li>
                    </ul>
                    <li>
                        <a href="https://www.findpourdecisions.com">
                            <img
                                src="/pourdecisions.png"
                                id="pourdecisions"
                                alt="find pour decisions landing page"
                            />
                        </a>
                    </li>
                    <ul>
                        <li>Built with the MERN Stack</li>
                        <li>Frontend hosted on Netlify, Backend on Heroku</li>
                    </ul>
                    <li>
                        <a href="https://www.heathblandford.com">
                            <img
                                src="/heathblandford.com"
                                id="old-personal-site"
                                alt="my old personal site"
                            />
                        </a>
                    </li>
                    <ul>
                        <li>Made with GatsbyJS and pure CSS</li>
                    </ul>
                </ul>
            </div>
            <div id="hobbyProjects">
                <h1>Hobby Projects</h1>
                <ul>
                    <li>
                        <a href="https://github.com/heathblandford/apex-pyReader">
                            Apex End-of-Match data to Google Sheet
                        </a>
                        <ul>
                            <li>
                                Python script that inputs data into a Google
                                Sheet of mine and my friends Apex Legends
                                End-of-Match performance data.
                            </li>
                            <li>
                                We are a bunch of nerds that just like to see
                                data, so we like to track it.
                            </li>
                            <li>
                                For this script, I take a screenshot of the end
                                of game summary screen, then use pyTesseract to
                                turn it into a string of all the text, and then
                                use a bunch of array splicing to find my data,
                                and my friends data.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="https://github.com/heathblandford/bme680_arduinohuzzah32">
                            Arudino + BME680 + Losant IoT Platform
                        </a>
                        <ul>
                            <li>
                                <img
                                    src="/losant.png"
                                    id="losant"
                                    alt="losant home air monitor dashboard page"
                                />
                            </li>
                            <li>
                                Soldered Sensor to Adafruit Huzzah 32
                                featherwing
                            </li>
                            <li>Designed and 3D printed a housing</li>
                            <li>Code on Github</li>
                        </ul>
                    </li>
                    <li>
                        <a href="https://github.com/heathblandford/the-pomo-timer">
                            The Pomo Timer
                        </a>
                        <ul>
                            <li>
                                <img
                                    src="/pomo-timer.png"
                                    id="pomo"
                                    alt="The Pomo Timer UI"
                                />
                            </li>
                            <li>
                                Built with ElectronJS, Vanilla JS, and Vanilla
                                CSS
                            </li>
                            <li>Following semver and releasing on Github</li>
                            <li>Currently Only for Windows</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </Layout>
    );
}
