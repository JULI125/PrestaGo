import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import user_no_register from '../models/presta';

export const collections: { user_no_register?: mongoDB.Collection<user_no_register>} = {};

export async function connectToDatabase () {
    dotenv.config();
 
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING);
            
    await client.connect();
        
    const db: mongoDB.Db = client.db(process.env.DB_NAME);
   
    const user_no_registerCollection = db.collection<user_no_register>(process.env.USER_COLLECTION_NAME);
 
  collections.user_no_register = user_no_registerCollection;
       
         console.log(`Successfully connected to database: ${db.databaseName} and collection: ${user_no_registerCollection.collectionName}`);
         
 }