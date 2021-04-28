const Users = require("../models/user.model");

const authAdmin = async (req, res, next) => {
  try {
    //Get user information by ID
    const user = await Users.findOne({
      _id: req.user.id,
    });

    if (user.role === 0)
      return res.status(400).json({ msg: "Admin resources access denied" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
