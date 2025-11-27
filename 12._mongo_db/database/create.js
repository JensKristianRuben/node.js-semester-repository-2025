import db from './connection.js';

const games = await db.games.insertOne({title: "spidermand", price: 199});

console.log(games);
