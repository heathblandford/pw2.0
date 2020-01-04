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
            <div className="websites">
                <div className="disappointing-section">
                    <a href="https://quirky-mahavira-6e1270.netlify.com/">
                        <img
                            src="/disappointing.png"
                            alt="Disappointing 30 under 30 landing page"
                        />
                    </a>
                    <ul>
                        <li>Built with React on the frontend</li>
                        <li>
                            Using MongoDB, Mongoose, and Express on the backend
                        </li>
                        <li>
                            Frontend hosted on Netlify, with backend on Heroku
                        </li>
                    </ul>
                </div>
                <div className="stlwarehouse-section">
                    <a href="#">
                        <img src="/stlwarehouse.png" alt="STLWarehouse" />
                    </a>
                    <ul>
                        <li>The new place for all things Maker</li>
                        <li>
                            The initial idea is to have people be able to
                            upload, download, and view 3D Printing Files, but
                            have a much better experience with search and
                            keeping a list of favorited/liked projects on an
                            account by account basis
                        </li>
                        <li>Using Google Cloud SQL (MySQL) for database</li>
                        <li>
                            React Frontend with Material UI, NodeJs backend, SQL
                            database and AWS S3 for files
                        </li>
                        <li>
                            **This is my current big project, and is still very
                            much a work in progress**
                        </li>
                    </ul>
                </div>
                <div className="happyhours-section">
                    <a href="https://www.findpourdecisions.com">
                        <img
                            src="/pourdecisions.png"
                            alt="find pour decisions landing page"
                        />
                    </a>
                    <ul>
                        <li>Built on the MERN Stack</li>
                        <li>
                            Frontend hosted on Netlify, Backend on Heroku, DB
                            with MongoDB Atlas
                        </li>
                    </ul>
                </div>
                <div className="old-website-section">
                    <a
                        href="https://www.heathblandford.com"
                        className="project-image"
                    >
                        <img
                            src="/heathblandford.png"
                            alt="my old personal site"
                        />
                    </a>
                    <ul>
                        <li>Made with GatsbyJS and pure CSS</li>
                        <li>
                            That's a real photo that I took while in Iceland
                        </li>
                    </ul>
                </div>
            </div>
            <style jsx>
                {`
                    .websites {
                        margin: 0 auto;
                        padding: 50px;
                        width: 80vw;
                        grid-gap: 30px; 
                        display: grid;
                        grid-template-columns: 50% 50%;
                        grid-template-rows: 50% 50%;
                        grid-template-areas:
                            "one two"
                            "three four";
                    }
                    img {
                        object-fit: cover;
                        width: 100%;
                        // max-height: 100%;
                        box-shadow: 2px 2px 4px #555;
                    }
                    @media (max-width: 700px) {
                        .websites {
                            width: 90vw;
                            padding: 0px 3px;
                            grid-template-columns: 100%;
                            grid-template-rows: 25% 25% 25% 25%;
                            grid-template-areas:
                                "one"
                                "two"
                                "three"
                                "four";
                        }
                    }
                `}
            </style>
        </Layout>
    );
}
