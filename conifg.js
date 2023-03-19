// const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const NEW_MONGO_URL = process.env.MONGO_URL;
console.log(NEW_MONGO_URL);
const connectMongo = async () => {
  try {
    const client = new MongoClient(NEW_MONGO_URL);
    return client;
  } catch (e) {
    return e;
  }
};

const database = connectMongo();

exports.database = database;
