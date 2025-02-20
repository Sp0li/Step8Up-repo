const fs = require("fs");
const path = require("path");
const { json } = require("stream/consumers");

// Get the message from the command-line argument
/*const message = process.argv[2];

// Check if a message was provided
if (!message) {
  console.log("Please provide a message as a command-line argument.");
  process.exit(1); // Exit the process if no message is provided
}

const filePath = path.join(__dirname, "messages.json");*/
filePath = "./side projects/JS/messages.json"
// Read the contents of the file
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }
  console.log(data)
  // TODO: convert JSON to object
  obj = JSON.parse(data);
  // TODO: push the message to the object
  obj.push("message")
  // TODO: convert object back to JSON so you can write it back to the file
  json2 = JSON.stringify(obj)
  // Write the message to message.txt
  fs.writeFile(filePath, json2, (err) => {
    if (err) {
      console.error("Error writing the messages to the file:", err);
      return;
    }
    console.log("Message written to message.txt successfully!");

    // Read the contents of the file
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading the file:", err);
        return;
      }
      console.log("Content of messages.json:");
      console.log(data);
    });
  });
});