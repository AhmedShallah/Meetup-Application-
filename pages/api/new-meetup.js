import {MongoClient} from "mongodb"

async function handler(req, res){
    if(req.method === 'POST'){
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://shallah:rPrFqknl8vOghdQ6@cluster0.xf9eaiw.mongodb.net/meetups?retryWrites=true&w=majority')
        const db = client.db();

        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({meesage: 'Meetup Inserted !' })
    }
}

export default handler;

