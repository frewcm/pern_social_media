import pool from "../db/db.js";
import express from "express";
const router = express.Router();

router.post("/login-user", async (req, res) => {
  try {
    const { first_name, last_name, username } = req.body;
    const loginUser = await pool.query(
      "SELECT first_name, last_name, username FROM user_account WHERE username = $1 VALUES ($1,$2,$3)",
      [username, first_name, last_name]
    );
    res.json("user login");
  } catch (err) {
    console.error(err.message);
  }
});

export default router;
