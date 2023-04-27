import express from "express";
import db from "../db/conn.mjs";

const router = express.Router();

router.get("/", async (req, res) => {
  let collection = await db.collection("data");
  let results = await collection.find({})
    .toArray();

  res.send(results).status(200);
});

router.get("/latest", async (req, res) => {
  let collection = await db.collection("data");
  let results = await collection.find({})
    .limit(1).sort({$natural:-1}).toArray()

  res.send(results).status(200);
});

export default router;