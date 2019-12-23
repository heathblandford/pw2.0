import Layout from "../components/Layout";
import Head from "next/head";

export default function docs() {
    return (
        <Layout>
            <Head>
                <title>
                    Contact me... or don't I don't care
                </title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <form>
                Name:<br/>
                <input type="text" name="firstname" autoFocus /><br/>

                Email:<br/>
                <input type="email" name="email" /><br/>

                Message:<br/>
                <textarea rows="4" cols="32"/>
                <br />
                <button type="submit">Contact Me</button>
            </form>
        </Layout>
    );
}
