import Layout from "../components/Layout";
import Head from "next/head";

export default function Index() {
    return (
        <Layout>
            <Head>
                <title>Heath Blandford | Exactly who you were looking for...</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <p>
                The <strong>New</strong> heathblandford.com
            </p>
            <style global jsx>{`
                body {
                    background-image: url("/heath_waterfall.png");
                    background-repeat: no-repeat;
                }
            `}</style>
        </Layout>
    );
}
