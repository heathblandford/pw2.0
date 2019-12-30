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
            </Head>
            <div className="flex-container aboutMe">
                <div className="quik-about container info-card">
                    <div className="">
                        <img
                            src="/good-me.jpg"
                            alt="a nice picture of me"
                            id="good-me"
                        />
                    </div>
                    <div className="info">
                        <p>
                            This is me. I'm me. I'm definitely me. I really am
                            just filling this out so that when I'm able, I can
                            actually fill this will real info.
                        </p>
                        <p>
                            Here is some more content. I really just want to be
                            able to see if I can figure out Flexbox tonight.
                            That seems like a hard task, but I'm up to the
                            challenge!
                        </p>
                        <ul>
                            <li>Here's one thing about me</li>
                            <li>Here's another thing about me</li>
                            <li>Oh, and here's one last thing about me!</li>
                        </ul>
                    </div>
                </div>

                <div className="something container info-card">
                    <div className="info">
                        <p>
                            This is me. I'm me. I'm definitely me. I really am
                            just filling this out so that when I'm able, I can
                            actually fill this will real info.
                        </p>
                        <p>
                            Here is some more content. I really just want to be
                            able to see if I can figure out Flexbox tonight.
                            That seems like a hard task, but I'm up to the
                            challenge!
                        </p>
                        <ul>
                            <li>Here's one thing about me</li>
                            <li>Here's another thing about me</li>
                            <li>Oh, and here's one last thing about me!</li>
                        </ul>
                    </div>
                    <div>
                        <img
                            src="/yung-me.jpg"
                            alt="young me"
                            id="young-me"
                            className=""
                        />
                    </div>
                </div>

                <div className="other-something container info-card">
                    <div>
                        <img
                            src="/walkin-me.jpg"
                            alt="walking me"
                            id="walking-me"
                            className=""
                        />
                    </div>
                    <div className="info">
                        <p>
                            This is me. I'm me. I'm definitely me. I really am
                            just filling this out so that when I'm able, I can
                            actually fill this will real info.
                        </p>
                        <p>
                            Here is some more content. I really just want to be
                            able to see if I can figure out Flexbox tonight.
                            That seems like a hard task, but I'm up to the
                            challenge!
                        </p>
                        <ul>
                            <li>Here's one thing about me</li>
                            <li>Here's another thing about me</li>
                            <li>Oh, and here's one last thing about me!</li>
                        </ul>
                    </div>
                </div>
            </div>

            <style global jsx>{`
                .flex-container {
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: center;
                }
                .container {
                    display: flex;
                    flex-flow: row no-wrap;
                    margin: 50px;
                    // -webkit-box-shadow: 3px 3px 5px 6px #ccc; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
                    // -moz-box-shadow: 3px 3px 5px 6px #ccc; /* Firefox 3.5 - 3.6 */
                    // box-shadow: 3px 3px 5px 6px #ccc; /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
                    border-radius: 5px;
                }
                .aboutMe {
                    padding: 25px;
                }
                .info-card {
                    background: white;
                }
                .info {
                    margin: 25px;
                }
                #good-me {
                    height: 400px;
                    min-width: 600px;
                    border-radius: 5px;
                }
                #young-me {
                    height: 400px;
                    min-width: 600px;
                    border-radius: 5px;
                }
                #walking-me {
                    height: 400px;
                    min-width: 600px;
                    border-radius: 5px;
                }
                @media (max-width: 950px) {
                    .container {
                        flex-flow: row wrap;
                    }
                    #good-me {
                        height: 200px;
                        width: 300px;
                    }
                    #young-me {
                        height: 200px;
                        width: 300px;
                    }
                    #walking-me {
                        height: 200px;
                        width: 300px;
                    }
                }
                body {
                    background: rgb(0, 0, 0);
                    background: linear-gradient(
                        45deg,
                        rgba(0, 0, 0, 1) 0%,
                        rgba(255, 255, 255, 1) 100%
                    );
                }
            `}</style>
        </Layout>
    );
}
