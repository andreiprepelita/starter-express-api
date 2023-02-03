import { MongoClient } from 'mongodb';

const connectToDb = () => {
    const uri =  "mongodb+srv://danut:danut@database.z8rygn4.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);

};

export { connectToDb };