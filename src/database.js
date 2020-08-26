import MongoClient from 'mongodb';

export async function connect() {
    try {
    const client = await MongoClient.connect('mongodb+srv://admin:admin@cluster0.3psht.mongodb.net/tasks?retryWrites=true&w=majority', {
        useUnifiedTopology: true
    })

    const db = client.db('node-restapi');
    console.log('DB is connected');
    return db;
    } catch(e) {
        console.log(e);
    }
}
