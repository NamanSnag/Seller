const Seller = require("../models/Seller");
const Inventory = require("../models/Inventory");

const storeInfo = async (req, res, next) => {
    const sellerId = req.user.id;
    try {
      const { address, gst, image, storeTimings } = req.body;
  
      const seller = await Seller.findByIdAndUpdate(
        sellerId,
        {
          storeInfo: {
            address: address || seller.storeInfo.address,
            gst: gst || seller.storeInfo.gst,
            image: image || seller.storeInfo.image,
            storeTimings: storeTimings || seller.storeInfo.storeTimings,
          },
        },
        { new: true }
      );
  
      if (!seller) {
        return res.status(404).json({ error: "Seller not found" });
      }
  
      return res
        .status(200)
        .json({ message: "Store information saved successfully" });
    } catch (error) {
      next(error);
    }
  };

  const addProduct = async (req, res, next) => {
    const sellerId = req.user.id;
    try {
        const { category, subCategory, productName, MRP, SP, quantity, images } = req.body;
        
    } catch (error) {
        next(error);
    }
  }
  

module.exports = {
  storeInfo: storeInfo,
};
