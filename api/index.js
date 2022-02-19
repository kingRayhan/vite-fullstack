const express = require("express");
const path = require("path");
const app = express();

const frontendBuildPath = path.resolve(__dirname, "../dist");
app.use(express.static(frontendBuildPath));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(frontendBuildPath, "index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
