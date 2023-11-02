import { connectToCluster } from './bd/index.js';

async function id(req, res) {
    let id = req.params.id;
    let mongoClient;
    let find = "";
    try {
        mongoClient = await connectToCluster();
        const db = mongoClient.db('Peliculas');
        const collection = db.collection();
        find = collection.find({id}).toArray()
    } finally {
        await mongoClient.close();
    }
    res.send(find)
}
function name(req, res) {
    let id = req.params.id;

    res.send()
}

function director(req, res) {
    let id = req.params.id;

    res.send()
}

function gender(req, res) {
    let id = req.params.id;

    res.send()
}
function releasedate(req, res) {
    let id = req.params.id;

    res.send()
}
function duration(req, res) {
    let id = req.params.id;

    res.send()
}
export default { id, name, director, gender, releasedate, duration }