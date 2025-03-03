// import all models
const Post = require("./post");
const Category = require("./category");
const User = require("./user");

Post.belongsTo(Category, {
  foreignKey: "categoryId",
  as: "category",
});

Post.belongsTo(User, {
  foreignKey: "userID",
  as: "user",
});


Category.hasMany(Post, {
  foreignKey: "categoryId",
  as: "posts",
});

User.hasMany(Post, {
  foreignKey: "userID",
  as: "posts",
});

module.exports = {
  Post,
  Category,
  User,
};
