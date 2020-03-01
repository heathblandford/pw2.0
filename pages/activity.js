import Layout from "../components/Layout";
import Head from "next/head";
import fetch from "isomorphic-fetch";
import useSWR from "swr";

const lastfmURL =
    "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=cloolis&limit=10&api_key=fc44b1cef492cd42ca8bfe7a808add86&format=json";
async function fetcher() {
    const res = await fetch(lastfmURL);
    const json = await res.json();
    return json;
}

export default function myActivity() {
    fetch(lastfmURL)
        .then(response => {
            return response.json();
        })
        .then(recentTracks => {
            for (let i = 0; i < recentTracks.recenttracks.track.length; i++) {
                let trackName = recentTracks.recenttracks.track[i]["name"];
                let artistName =
                    recentTracks.recenttracks.track[i]["artist"]["#text"];
                let ul = document.getElementById("recentTrackList");
                let li = document.createElement("li");
                li.appendChild(
                    document.createTextNode(`${trackName} by ${artistName}`)
                );
                ul.appendChild(li);
            }
        });

    return (
        <Layout>
            <Head>
                <title>Here's what I'm up to!</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Roboto"
                    rel="stylesheet"
                />
            </Head>
            <h1 className="main-title">My Recent Activity</h1>
            <div className="activities">
                <div className="twitter">
                    <a
                        className="twitter-timeline"
                        data-dnt="true"
                        data-theme="dark"
                        href="https://twitter.com/whoisheath_?ref_src=twsrc%5Etfw"
                    >
                        Tweets by whoisheath_
                    </a>{" "}
                    <script
                        async
                        src="https://platform.twitter.com/widgets.js"
                        charset="utf-8"
                    ></script>
                    <h6>coming soon...</h6>
                </div>
                <div className="recently-listened">
                    <h3>Recent songs:</h3>
                    <ol id="recentTrackList"></ol>
                </div>
            </div>
            <style jsx>
                {`
                    .main-title {
                        font-family: "Roboto", sans-serif;
                        font-size: 3.5em;
                        text-align: center;
                    }
                    .activities {
                        font-family: "Roboto", sans-serif;
                        font-size: 1.2em;
                        margin: 0 auto;
                        padding: 50px;
                        width: 80vw;
                        grid-gap: 30px;
                        display: grid;
                        grid-template-columns: 50% 50%;
                        grid-template-rows: auto;
                        grid-template-areas: "one two";
                    }

                `}
            </style>
        </Layout>
    );
}
