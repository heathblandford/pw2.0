const faker = require('faker');

let name = faker.name.findName();
let email = faker.internet.email();

export default (req, res) => {
    if(req.method == "GET") {
        res.setHeader("Content-Type", "application/json");
        res.statusCode = 200;
        res.end(JSON.stringify({ name: name, email: email }))
    }
}