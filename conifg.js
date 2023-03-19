// const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const NEW_MONGO_URL = process.env.MONGO_URL;
const connectMongo = () => {
  try {
    const client = new MongoClient(NEW_MONGO_URL);
    // MongoClient.connect(NEW_MONGO_URL)
    const Moviesdata = data.db('sample_mflix').collection('movies')
    return Moviesdata;
  }
  catch (error) {
    return error
  }


};

const database = connectMongo();

exports.database = database;
