export default (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.end(JSON.stringify({ api: "this is how we return stuff from the api :)" }));
};
