import db from './connection.js';


const deletedGame = await db.games.deleteOne()