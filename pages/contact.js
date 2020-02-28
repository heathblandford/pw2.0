import Layout from "../components/Layout";
import Head from "next/head";

export default function docs() {
    // handle submit is for sending the contact form data to my discord server
    function handleSubmit(e) {
        e.preventDefault();
        
        // set globals
        const url = process.env.DISCORD_URL;
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const message = document.querySelector("#message").value;
        
        // construct the object to send to discord
        let data = {
            content: "New Contact Alert!",
            username: "contactor",
            tts: false,
            embeds: [
                {
                    title: "Contactor Information:",
                    fields: [
                        {
                            name: "**Name**",
                            value: name,
                            inline: false
                        },
                        {
                            name: "**Email**",
                            value: email,
                            inline: false
                        },
                        {
                            name: "**Message**",
                            value: message,
                            inline: false
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
                <title>Get in Touch!</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <h1 className="title">Get in Touch</h1>
            <div className="container">
                <div className="contact-para">
                    <p>
                        The best way to contact me is{" "}
                        <a href="https://twitter.com/whoisheath_">Twitter</a>.
                        But, if you fill out the form, a notification will go
                        off in my own discord server and I'll get back to you as
                        quickly as possible!
                    </p>
                </div>
                <div className="contact-form">
                    <form
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
                            required
                        />
                        <br />
                        <label for="email">Email</label>
                        <br />
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="heath.blandford@gmail.com"
                            required
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
                            required
                        />
                        <br />
                        <div className="submitButton">
                            <button type="submit">Send it!</button>
                        </div>
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
                        font-size: 3rem;
                        text-align: center;
                        font-family: "Roboto", sans-serif;
                        margin-top: 50px;
                    }
                    .container {
                        display: flex;
                        flex-flow: column;
                        justify-content: center;
                        padding: 0px 25px;
                    }
                    .contact-para {
                        font-size: 1.2rem;
                        font-family: "Roboto", sans-serif;
                        margin: 50px auto;
                        border-bottom: 2px solid black;
                        word-break: break-word;
                    }
                    .contact-form {
                        margin: 50px auto;
                        border-radius: 2px;
                        padding: 75px;
                        box-shadow: 2px 2px 5px #333;
                        font-family: "Roboto", sans-serif;
                    }
                    .contact-form form {
                        margin-bottom: 75px;
                    }
                    .contact-form input[type="text"] {
                        width: 250px;
                        margin-bottom: 10px;
                        border-radius: 5px;
                        padding: 10px 5px;
                        font-family: "Roboto", sans-serif;
                    }
                    .contact-form input[type="text"]:focus {
                        outline: none;
                    }
                    .contact-form input[type="email"] {
                        width: 250px;
                        margin-bottom: 10px;
                        border-radius: 5px;
                        padding: 10px 5px;
                        font-family: "Roboto", sans-serif;
                    }
                    .contact-form input[type="email"]:focus {
                        outline: none;
                    }
                    .contact-form textarea {
                        padding: 10px 5px;
                        font-family: "Roboto", sans-serif;
                    }
                    .contact-form textarea:focus {
                        outline: none;
                    }
                    .contact-form button {
                        padding: 10px 15px;
                        margin-top: 30px;
                        background: transparent;
                        border: 1px solid black;
                        font-size: 1.2em;
                    }
                    .contact-form button:hover {
                        background: #666;
                        color: white;
                        border: 1px solid transparent;
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
                        .container {
                            padding: 0px;
                        }
                        .contact-para {
                            width: 80vw;
                            // margin: 0 auto;
                        }
                        .contact-form {
                            padding: 30px;
                            margin: 0 auto;
                        }
                        .contact-form input[type="text"]{
                            width: 200px;
                        }
                        .contact-form input[type="email"] {
                            width: 200px;
                        }
                        .contact-form textarea {
                            width: 200px;
                        }
                        .bottom-socials img {
                            height: 30px;
                            width: 30px;
                        }
                    }
                `}
            </style>
        </Layout>
    );
}
