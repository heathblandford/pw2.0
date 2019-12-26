export default (req, res) => {
    if (req.method == "GET") {
        res.setHeader("Content-Type", "application/json");
        res.statusCode = 200;
        res.end(JSON.stringify({ api: "get requests to stlwarehouse users" }));
    } else if (req.method == "POST") {
        // process post of new user to database
        res.setHeader("Content-Type", "application/json");
        res.statusCode = 200;
        res.end(JSON.stringify({ api: "post request to stlwarehouse users" }));
    }
};
