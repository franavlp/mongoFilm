import { connectToCluster } from './../bd/index.js';

async function id(req, res) {
    let id = req.params.id;
    let mongoClient;
    let find = "";
    try {
        mongoClient = await connectToCluster();
        const db = mongoClient.db('Peliculas');
        const collection = db.collection('Peliculas');
        find = collection.find({id: {$eq: id}}).toArray()
    } finally {
        await mongoClient.close();
    }
    res.send(find)
}
async function name(req, res) {
    let id = req.params.id;
    let mongoClient;
    let find = "";
    try {
        mongoClient = await connectToCluster();
        const db = mongoClient.db('Peliculas');
        const collection = db.collection('Peliculas');
        find = collection.find({name: {$eq: id}}).toArray()
    } finally {
        await mongoClient.close();
    }
    res.send(find)
}

async function director(req, res) {
    let id = req.params.id;
    let mongoClient;
    let find = "";
    try {
        mongoClient = await connectToCluster();
        const db = mongoClient.db('Peliculas');
        const collection = db.collection('Peliculas');
        find = collection.find({director: {$eq: id}}).toArray()
    } finally {
        await mongoClient.close();
    }
    res.send(find)
}

async function gender(req, res) {
    let id = req.params.id;
    let mongoClient;
    let find = "";
    try {
        mongoClient = await connectToCluster();
        const db = mongoClient.db('Peliculas');
        const collection = db.collection('Peliculas');
        find = collection.find({gender: {$eq: id}}).toArray()
    } finally {
        await mongoClient.close();
    }
    res.send(find)
}
async function releasedate(req, res) {
    let id = req.params.id;
    let mongoClient;
    let find = "";
    try {
        mongoClient = await connectToCluster();
        const db = mongoClient.db('Peliculas');
        const collection = db.collection('Peliculas');
        find = collection.find({release_date: {$eq: id}}).toArray()
    } finally {
        await mongoClient.close();
    }
    res.send(find)
}
async function duration(req, res) {
    let id = req.params.id;
    let mongoClient;
    let find = "";
    try {
        mongoClient = await connectToCluster();
        const db = mongoClient.db('Peliculas');
        const collection = db.collection('Peliculas');
        find = collection.find({duration: {$eq: id}}).toArray()
    } finally {
        await mongoClient.close();
    }
    res.send(find)
}
export { id, name, director, gender, releasedate, duration }