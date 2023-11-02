import { MongoClient } from 'mongodb';

export async function connectToCluster() {
    let mongoClient;
    const uri = process.env.DB_URI;
    try {
        mongoClient = new MongoClient(uri);
        console.log('Connecting to MongoDB Atlas cluster...');
        await mongoClient.connect();
        console.log('Successfully connected to MongoDB Atlas!');
 
        return mongoClient;
    } catch (error) {
        console.error('Connection to MongoDB Atlas failed!', error);
        process.exit();
    }
 }

export function connectBD() {
    const url = 'mongodb://127.0.0.1:27017/mongoFilm';
    MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    if (err) throw err;
    console.log('Conectado a la base de datos');
  
    // A partir de aquí, puedes realizar operaciones en la base de datos
    // ...
  });
  }
export async function executeStudentCrudOperations() {
    let mongoClient;
 
    try {
        mongoClient = await connectToCluster();
    } finally {
        await mongoClient.close();
    }
 }
