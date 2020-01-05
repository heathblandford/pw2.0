import Link from "next/link";
import Head from "next/head";

const Header = () => (
    <div>
        <Head>
            <link
                rel="shortcut icon"
                href="/static/favicon.ico"
                type="image/x-icon"
            />
        </Head>
        <div className="headerMain">
            <Link href="/">
                <a className="main-link">Home</a>
            </Link>
            <Link href="/projects">
                <a className="main-link">Projects</a>
            </Link>
            <Link href="/contact">
                <a className="main-link">Contact Me</a>
            </Link>
            <style global jsx>{`
                .headerMain {
                    border-bottom: 2px solid #333;
                    text-align: center;
                    margin-bottom: 50px;
                    font-family: "Roboto", sans-serif;
                }
                .main-link {
                    margin-right: 15px;
                }
                .main-link:link,
                .main-link:visited {
                    border-bottom: 2px solid transparent;
                    color: black;
                    padding: 14px 25px;
                    margin-bottom: 10px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                }

                .main-link:hover,
                .main-link:active {
                    border-bottom: 2px solid black;
                }
            `}</style>
        </div>
    </div>
);

export default Header;
