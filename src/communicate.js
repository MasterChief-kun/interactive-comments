import { MongoClient } from "mongodb";

const dbUrl = "mongodb://127.0.0.1:27017/"
const dbClient = new MongoClient(dbUrl);

async function run(){
    try {
        await dbClient.connect();

        const comments = dbClient.db("comments")
        var movies = await comments.collection("comment")
        const query = { x: 1 }
        const movie = await movies.findOne(query)
        console.log(movie)
    } finally{
        await dbClient.close()
    }
}
/* CRUD API
    Create :- TODO
    Read :- TODO
    Update :- TODO
    Delete :- TODO
*/
async function 
run().catch(console.dir);