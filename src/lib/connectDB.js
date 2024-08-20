const { MongoClient, ServerApiVersion } = require("mongodb");


let db;
export const connectDB = async () => {
    if (db) {
        return db
    }
    try {

        const URI = process.env.NEXT_PUBLIC_MONGODB_URI;
        const client = new MongoClient (URI, {
            serverApi : {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true
            },
        });
        db = client.db("nextJsOne");
        return db
         
    } catch (error) {
        console.log(error);
        
    }
 };

 export default connectDB;