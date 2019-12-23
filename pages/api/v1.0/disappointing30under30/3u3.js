export default (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.end(JSON.stringify({ api: "30 under 30 yeet" }));
};
