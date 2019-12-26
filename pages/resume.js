import Layout from "../components/Layout";
import Head from "next/head";

export default function Resume() {
    return (
        <Layout>
            <Head>
                <title>Heath Blandford | Resume</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <div className="languages">
                <h3>Languages</h3>
                <hr />
                <ul>
                    <li>JavaScript</li>
                    <ul>
                        <li>NodeJs</li>
                        <li>NextJs</li>
                        <li>React</li>
                        <li>Express</li>
                    </ul>
                    <li>Python</li>
                    <li>SQL</li>
                    <li>REST API development</li>
                </ul>
            </div>
            <div className="work-experience">
                <h3>Work Experience</h3>
                <hr />
                <ul>
                    <li><strong>Tata Consultancy Services,</strong> 2017-Present</li>
                    <ul>
                        <li>Mechanical Design Engineer, on contract with Ethicon</li>                        
                    </ul>
                </ul>
            </div>
        </Layout>
    );
}
