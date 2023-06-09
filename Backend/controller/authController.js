const Seller = require("../models/Seller");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// seller Registration
const sellerRegistration = async (req, res, next) => {
  const { email, businessName, password } = req.body;

  try {
    // Check if the email is already registered
    const existingSeller = await Seller.findOne({ email });
    if (existingSeller) {
      return res.status(400).json({ error: "Email is already registered" });
    }

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // Create a new seller
    const newSeller = new Seller({
      email,
      businessName,
      password: passwordHash,
    });
    await newSeller.save();

    return res.status(200).json({ msg: "Registration successful" });
  } catch (err) {
    next(err);
  }
};

// Seller SignIn
const sellerSignin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await Seller.findOne({ email: email });
        if (!user) return res.status(400).json({ msg: "User does not exist. " });
    
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });
    
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        const data = {
          email : user.email,
          businessName : user.businessName,
          id: user._id,
        }
        return res.cookie("token", token, {
          httpOnly: true,
        })
        .status(200)
        .json({
          msg: "logIn sucessfully",
          data: data,
          token: token
        });
      } catch (err) {
        next(err);
      }
};

module.exports = {
  sellerRegistration,
  sellerSignin
}

