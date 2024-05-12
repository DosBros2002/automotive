import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  brand: {
    type: String,
  },
  model: {
    type: String,
  },
  mileage: {
    type: String,
  },
});

module.exports = carSchema;
