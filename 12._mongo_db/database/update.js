import db from './connection.js'

const updatedGame = await db.games.updateOne(
  { Title: "spidermand" },
  { $set: { Title: "speederman" } }
);

console.log(updatedGame);
