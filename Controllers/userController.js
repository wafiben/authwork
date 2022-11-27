const User = require("../modelsOfProject/User");
const jwt = require("jsonwebtoken");

const regitser = async (request, response) => {
  const user = request.body;
  try {
    const foundUser = await User.findOne({ email: user.email });
    if (foundUser) {
      response.status(400).json({ msg: "user already exist you sould login" });
    } else {
      let newUser = new User({
        userName: user.userName,
        email: user.email,
        age: user.age,
        password: user.password,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, "shhhhh");
      response.status(200).json({ user: newUser, token: token });
    }
  } catch (error) {
    response.status(500).json({ msg: "error on adding user" });
  }
};
const login = async (req, res) => {
  const user = req.body;
  try {
    const foundUser = await User.findOne({ email: user.email });

    if (foundUser) {
      if (user.password === foundUser.password) {
        const token = jwt.sign({ id: foundUser._id }, "shhhhh");
        res.status(200).json({ user: foundUser, token: token });
      } else {
        res.status(400).json({ msg: "wrong password" });
      }
    } else {
      return res.status(400).json({ msg: "you must register before" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { regitser,login };
