import pool from "../db/db.js";
import express from "express";
const router = express.Router();

router.post("/create-user", async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      username,
      date_of_birth,
      gender,
      country,
      city,
    } = req.body;
    const newUser = await pool.query(
      "INSERT INTO user_account(first_name,last_name,username,date_of_birth,gender,country,city) VALUES($1,$2,$3,$4,$5,$6,$7)",
      [first_name, last_name, username, date_of_birth, gender, country, city]
    );
    res.json(newUser.rows);
  } catch (err) {
    console.error(err.message);
  }
});

export default router;
