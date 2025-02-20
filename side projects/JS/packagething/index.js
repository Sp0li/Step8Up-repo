const { getUserRepos } = require("./github");

// TODO: Enter your GitHub username
const gitHubUser = "Sp0li";

getUserRepos(gitHubUser).then((repos) => {
  console.log(repos);
});
