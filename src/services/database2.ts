import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import score from '../models/presta2';

export const collection: { score?: mongoDB.Collection<score>} = {};

export async function connectDatabase() {
    dotenv.config();
 
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING);       
    await client.connect();     
    const db2: mongoDB.Db = client.db(process.env.DB_NAME);  
    const scoreCollection = db2.collection<score>(process.env.USER_COLLECTION_NAMES);
    
    collection.score = scoreCollection;       
    console.log(`Successfully connected to database: ${db2.databaseName} and collection: ${scoreCollection.collectionName}`);
}