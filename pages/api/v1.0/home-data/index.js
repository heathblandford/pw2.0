export default (req, res) => {
    if(req.method == "GET") {
        res.setHeader("Content-Type", "application/json");
        res.statusCode = 200;
        res.end(JSON.stringify({ api: "yeet, this is for posting home temp data"}))
    }
}