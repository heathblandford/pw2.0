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
            <div className="image-gallery">
                <img src="/good-me.jpg" alt="a nice picture of me" id='good-me' />
                <img src="/yung-me.jpg" alt="young me" id='young-me' />
                <img src="/walkin-me.jpg" alt="walking me" id='walking-me' />
            </div>
            <style jsx>{`
                p {
                    color: blue;
                }
                #good-me {
                    height: 400px;
                    width: 550px;
                }
                #yung-me {
                    height: 400px;
                    width: 550px;
                }
                img {
                    border-radius: 60%;
                }
            `}</style>
        </Layout>
    );
}
