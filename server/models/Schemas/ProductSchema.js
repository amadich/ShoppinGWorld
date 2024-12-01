const { Schema, model } = require("mongoose");

const ProductSchema = Schema({
      name: {
         type: String,
         required: true,
      },
      price: {
         type: Number,
         required: true,
      },
      description: {
         type: String,
         required: true,
      },
      image: {
         type: String,
         required: true,
      },
      date: {
         type: Date,
         default: Date.now,
      },
});

const Productmodel = model("products", ProductSchema);
module.exports = Productmodel;