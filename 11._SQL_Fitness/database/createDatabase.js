import db from "./connection.js";

// const deleteMode = process.argv.find(argument => argument.includes('delete'));
const deleteMode = process.argv.includes("delete");

if (deleteMode) {
  db.exec(`DROP TABLE IF EXISTS exercises`);
  db.exec(`DROP TABLE IF EXISTS users`);
}

// DDL
db.exec(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(50) UNIQUE,
    role TEXT CHECK( role IN ("ADMIN", "STAFF", "USER") )
    );
    
    CREATE TABLE exercises (
    id iNTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    difficulty INTEGER,
    created_at TEXT NOT NULL DEFAULT current_timestamp,
    updated_at TEXT NOT NULL DEFAULT current_timestamp,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users (id)    
    );
    
    `);

const DDL = `
    CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(50) UNIQUE
    role TEXT CHECK( role IN ("ADMIN", "STAFF", "USER") )
    );

    CREATE TABLE exercises (
    id iNTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    difficulty INTEGER,
    created_at TEXT NOT NULL DEFAULT current_timestamp,
    updated_at TEXT NOT NULL DEFAULT current_timestamp,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users (id)    
    );
`;

if (deleteMode) {
  db.run(`INSERT INTO users (username, role) VALUES ('Anders', 'STAFF')`);
  db.run(`INSERT INTO exercises (name, difficulty, user_id) VALUES ('sqauts', 7, 1);`);
  db.run(`INSERT INTO exercises (name, user_id) VALUES ('burpees', 1)`);
};
