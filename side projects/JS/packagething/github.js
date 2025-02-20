// github.js
const axios = require("axios");

// Function to retrieve a list of a user's repos from GitHub
async function getUserRepos(username) {
  if (!username) {
    throw new Error("Username is required");
  }

  const url = `https://api.github.com/users/${username}/repos`;

  try {
    const response = await axios.get(url);
    return response.data; // List of repos
  } catch (error) {
    throw new Error(`Failed to fetch repos for user: ${username}`);
  }
}

module.exports = { getUserRepos };