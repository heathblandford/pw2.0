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
            <div className="flex-container">
                <div className="quik-about container">
                    <div className="">
                        <img
                            src="/good-me.jpg"
                            alt="a nice picture of me"
                            id="good-me"
                        />
                    </div>
                    <div className="">
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

                <div className="something container">
                    <div>
                        <img
                            src="/yung-me.jpg"
                            alt="young me"
                            id="young-me"
                            className=""
                        />
                    </div>
                    <div className="">
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

                <div className="other-something container">
                    <div>
                        <img
                            src="/walkin-me.jpg"
                            alt="walking me"
                            id="walking-me"
                            className=""
                        />
                    </div>
                    <div className="">
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

            <style jsx>{`
                .flex-container {
                    display: flex;
                    flex-flow: row wrap;
                }
                .container {
                    display: flex;
                    flex-flow: row no-wrap;
                    justify-content: space-around;
                }
                #good-me {
                    height: 400px;
                    min-width: 600px;
                }
                #young-me {
                    height: 400px;
                    min-width: 600px;
                }
                #walking-me {
                    height: 400px;
                    min-width: 600px;
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
            `}</style>
        </Layout>
    );
}
