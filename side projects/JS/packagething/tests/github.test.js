// github.test.js
const axios = require("axios");
const { getUserRepos } = require("../github");

// TODO: what's the difference between jest.mock and jest.spyOn?
// Mock Axios
jest.mock("axios");

describe("getUserRepos", () => {
  test("should return the list of repos for a valid user", async () => {
    const username = "testuser";
    const repos = [
      { name: "repo1", full_name: "testuser/repo1" },
      { name: "repo2", full_name: "testuser/repo2" },
    ];

    // Mock Axios get request
    axios.get.mockResolvedValue({ data: repos });

    const result = await getUserRepos(username);

    expect(result).toEqual(repos);
    expect(axios.get).toHaveBeenCalledWith(
      `https://api.github.com/users/${username}/repos`
    );
  });

  test("should throw an error if username is not provided", async () => {
    await expect(getUserRepos()).rejects.toThrow("Username is required");
  });

  test("should throw an error if the request fails", async () => {
    const username = "invaliduser";

    // Mock Axios get request to throw an error
    axios.get.mockRejectedValue(new Error("Request failed"));

    await expect(getUserRepos(username)).rejects.toThrow(
      `Failed to fetch repos for user: ${username}`
    );
  });
});