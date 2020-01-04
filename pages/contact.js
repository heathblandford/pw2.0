import Layout from "../components/Layout";
import Head from "next/head";

export default function docs() {
    function handleSubmit(e) {
        e.preventDefault();
        // const form = document.querySelector("#contactMeForm");
        // const contactMeData = serialize(form, { hash: true });
        const url = process.env.DISCORD_URL;
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const message = document.querySelector("#message").value;
        let data = {
            // construct the object to send to discord
            content: "New Contact Alert!",
            username: "contactor",
            tts: false,
            embeds: [
                {
                    "title": "Contactor Information:",
                    "fields": [
                        {
                            "name": "**Name**",
                            "value": name,
                            "inline": false
                        },
                        {
                            "name": "**Email**",
                            "value": email,
                            "inline": false
                        },
                        {
                            "name": "**Message**",
                            "value": message,
                            "inline": false
                        }
                    ]
                }
            ]
        };
        // console.log(JSON.stringify(data));
        const req = new XMLHttpRequest();
        req.open("post", url, true); // (method, url, async)
        req.setRequestHeader("Content-Type", "application/json");
        req.send(JSON.stringify(data));
    }

    return (
        <Layout>
            <Head>
                <title>Contact me... or don't I don't care</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                 
            </Head>
            <h1 className="title">Get in Touch</h1>
            <div className="container">
                <div className="contact-para">
                    <p>
                        The best way to contact me is{" "}<a href="https://twitter.com/whoisheath_">Twitter</a>.
                        But, if you fill out the form, a notification will go
                        off in my own discord server and I'll get back to you as
                        quickly as possible!
                    </p>
                </div>
                <div className="contact-form">
                    <form
                        // action={``}
                        // method="post"
                        // target="dummyframe"
                        onSubmit={handleSubmit}
                        name="contactMeForm"
                        id="contactMeForm"
                    >
                        <label for="firstname">Your Name</label>
                        <br />
                        <input
                            id="name"
                            type="text"
                            name="firstname"
                            placeholder="Heath"
                            autoFocus
                        />
                        <br />
                        <label for="email">Email</label>
                        <br />
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="heath.blandford@gmail.com"
                        />
                        <br />
                        <label for="message">Message</label>
                        <br />
                        <textarea
                            name="message"
                            id="message"
                            rows="10"
                            cols="50"
                            placeholder="nice site dawg! want to work for us?"
                        />
                        <br />
                        <button type="submit">Contact Me</button>
                    </form>
                    <div className="bottom-socials">
                        <a href="https://www.twitter.com/whoisheath_">
                            <img src="twitter.svg" alt="twitter" />
                        </a>
                        <a href="https://www.linkedin.com/in/heathblandford">
                            <img src="linkedin.svg" alt="twitter" />
                        </a>
                        <a href="https://www.github.com/heathblandford">
                            <img src="github.svg" alt="twitter" />
                        </a>
                        <a href="https://www.last.fm/user/cloolis">
                            <img src="lastfm.svg" alt="twitter" />
                        </a>
                        <a href="https://www.instagram.com/whoisheath_">
                            <img src="instagram.svg" alt="twitter" />
                        </a>
                    </div>
                </div>
            </div>

            <style jsx>
                {`
                    .title {
                        font-size: 3.5em;
                        text-align: center;
                        font-family: 'Roboto', sans-serif;
                    }
                    .container {
                        display: flex;
                        flex-flow: column;
                        justify-content: center;
                        padding: 0px 25px;
                    }
                    .contact-para {
                        font-size: 1.2em;
                        font-family: 'Roboto', sans-serif;
                        margin: 50px auto;
                        border-bottom: 2px solid black;
                    }
                    .contact-form {
                        margin: 50px auto;
                        border-radius: 2px;
                        padding: 75px;
                        box-shadow: 2px 2px 5px #333;
                        font-family: 'Roboto', sans-serif;
                    }
                    .contact-form form {
                        margin-bottom: 75px;
                    }
                    .contact-form input[type="text"] {
                        margin-bottom: 10px;
                        border-radius: 5px;
                        padding: 10px 5px;
                    }
                    .contact-form input[type="text"]:focus {
                        outline: none;
                    }
                    .contact-form input[type="email"] {
                        margin-bottom: 10px;
                        border-radius: 5px;
                        padding: 10px 5px;
                    }
                    .contact-form input[type="email"]:focus {
                        outline: none;
                    }
                    .contact-form textarea {
                        padding: 10px 5px;
                        font-family: 'Roboto', sans-serif;
                    }
                    .contact-form textarea:focus {
                        outline: none;
                    }
                    .bottom-socials {
                        text-align: center;
                        grid-area: bot;
                        justify-self: stretch;
                        width: 100%;
                    }
                    .bottom-socials img {
                        height: 50px;
                        width: 50px;
                        padding: 10px;
                    }
                    @media (max-width: 950px) {
                        .contact-form {
                            padding: 50px;
                        }
                        .contact-form textarea {
                            width: 200px;
                        }
                    }
                `}
            </style>
        </Layout>
    );
}
