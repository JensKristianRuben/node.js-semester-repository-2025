import { Router } from "express";
import db from "../database/connection.js";

const router = Router();

router.post("/api/users", async (req, res) => {
  const { username, role } = req.body;
  const { lastID } = await db.run(`INSERT INTO users (username, role) VALUES (?, ?);`, [
    username,
    role,
  ]);

  console.log(lastID);

  res.status(201).send({data: lastID});
});

export default router;
