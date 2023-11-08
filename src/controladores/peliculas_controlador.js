import { connectToCluster } from './../bd/index.js';

// async function id(req, res) {
//     let id = req.params.id;
//     let mongoClient;
//     let find = "";
//     try {
//         mongoClient = await connectToCluster();
//         // console.log(mongoClient)
//         const db = mongoClient.db('Peliculas');
//         // console.log(db);
//         const collection = db.collection('Peliculas');
//         // console.log(collection);
//         find =  await collection.find({'id': id}).toArray()
//         console.log("hola", find);
//     } finally {
//         // await mongoClient.close();
//     }
//     res.send(find)
// }
async function name(req, res) {
    let id = req.params.id;
    let mongoClient;
    let find = "";
    try {
        mongoClient = await connectToCluster();
        const db = mongoClient.db('Peliculas');
        const collection = db.collection('Peliculas');
        find = collection.find({name: id}).toArray()
    } finally {
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
        find = collection.find({director: id}).toArray()
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
        find = collection.find({gender: id}).toArray()
    } finally {
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
        find = collection.find({release_date: id}).toArray()
    } finally {
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
        find = collection.find({duration: id}).toArray()
    } finally {
    }
    res.send(find)
}
export { name, director, gender, releasedate, duration }