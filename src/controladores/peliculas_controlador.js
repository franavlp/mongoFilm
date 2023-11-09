import { connectToCluster } from './../bd/index.js';

// async function id(req, res) {
//     let id = req.body.id;
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
    let id = req.body.name;
    let mongoClient;
    let find = "";
    try {
        mongoClient = await connectToCluster();
        const db = mongoClient.db('Peliculas');
        const collection = db.collection('Peliculas');
        find = await collection.find({name: id}).toArray()
        console.log(find);
    } finally {
    }
    res.send(find)
}

async function director(req, res) {
    let id = req.body.director;
    let mongoClient;
    let find = "";
    try {
        mongoClient = await connectToCluster();
        const db = mongoClient.db('Peliculas');
        const collection = db.collection('Peliculas');
        find = await collection.find({director: id}).toArray()
    } finally {
        // await mongoClient.close();
    }
    res.send(find)
}

async function gender(req, res) {
    let id = req.body.gender;
    let mongoClient;
    let find = "";
    try {
        mongoClient = await connectToCluster();
        const db = mongoClient.db('Peliculas');
        const collection = db.collection('Peliculas');
        find = await collection.find({gender: id}).toArray()
    } finally {
    }
    res.send(find)
}
async function releasedate(req, res) {
    let id = req.body.releasedate;
    console.log(id);
    let mongoClient;
    let find = "";
    try {
        mongoClient = await connectToCluster();
        const db = mongoClient.db('Peliculas');
        const collection = db.collection('Peliculas');
        find = await collection.find({realese_date: id}).toArray()
    } finally {
    }
    res.send(find)
}
async function duration(req, res) {
    let id = req.body.duration;
    let mongoClient;
    let find = "";
    try {
        mongoClient = await connectToCluster();
        const db = mongoClient.db('Peliculas');
        const collection = db.collection('Peliculas');
        find = await collection.find({duration: id}).toArray()
        console.log(find);
    } finally {
    }
    res.send(find)
}
export { name, director, gender, releasedate, duration }