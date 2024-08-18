const { MongoClient, ServerApiVersion } = require("mongodb");


let db;
 const connectDB = async () => {
    if (db) {
        return db
    }
    try {

        const URI = `mongodb+srv://${NEXT_PUBLIC_USER_NAME}:${NEXT_PUBLIC_PASSWORD}@cluster0.zdajqzn.mongodb.net/`;
        const client = new MongoClient (URI, {
            serverApi : {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true
            },
        });
        db = await client.db("nextJsOne");
        return db
         
    } catch (error) {
        console.log(error);
        
    }
 }