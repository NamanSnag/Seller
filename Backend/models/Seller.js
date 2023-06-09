const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      index: true, // Add an index on the email field for faster lookup
    },
    businessName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    storeInfo: {
      address: String,
      gst: String,
      image: String,
      storeTimings: String,
    },
    inventory: [
      {
        category: String,
        subCategory: String,
        productName: String,
        MRP: Number,
        SP: Number,
        quantity: Number,
        images: String,
      },
    ],
  },
  { timestamps: true } // Enable timestamps for automatic creation of createdAt and updatedAt fields
);

sellerSchema.index({ email: 1 }); // Define index on email field

const Seller = mongoose.model('Seller', sellerSchema);

module.exports = Seller;