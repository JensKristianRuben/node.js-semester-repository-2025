import { MongoClient } from 'mongodb';

const url = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(url);

const dbName = "games_libary";

await client.connect();

const games_libary = client.db(dbName);

export default {
    games: games_libary.collection("games"),
    games_characters: games_libary.collection("game_characters")
};