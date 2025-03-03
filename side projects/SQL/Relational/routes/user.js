// create a new router
const app = require("express").Router();

// import the models
const { User } = require("../models/index");

// Route to add a new post
app.post("/", async (req, res) => {
  try {
    const { User_name } = req.body;
    const User = await User.create({ User_name });
    res.status(201).json(User);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error adding User", error: error });
  }
});

// Route to get all posts
app.get("/", async (req, res) => {
  try {
    console.log("Getting all Users");
    const Users = await User.findAll();
    console.log(Users);
    res.json(Users);
  } catch (error) {
    res.status(500).json({ message: "Error adding Users", error: error });
  }
});

app.get("/:id", async (req, res) => {
  try {
    const User = await Post.findByPk(req.params.id);
    res.json(User);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving User" });
  }
});

// Route to update a User
app.put("/:id", async (req, res) => {
  try {
    const { name } = req.body;
    const post = await User.update(
      { name },
      { where: { id: req.params.id } }
    );
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Error updating User" });
  }
});

// Route to delete a User
app.delete("//:id", async (req, res) => {
  try {
    const User = await User.destroy({ where: { id: req.params.id } });
    res.json(User);
  } catch (error) {
    res.status(500).json({ error: "Error deleting User" });
  }
});

// export the router
module.exports = app;
