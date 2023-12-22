import mysql from "mysql";
import pool from "../sql/connection.js";

const getAccount = async (req, res) => {
  const action = "GET Account";
  // const { tenant: schema } = req.query;

  const sql = `SELECT * FROM zenith.account;`;

  try {
    const results = await sqlQueryProm(sql);
    return res.json(results[0]);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};

// Utilities ================================

const sqlQueryProm = (sql) => {
  return new Promise((resolve, reject) => {
    pool.query(sql, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

export { getAccount };
