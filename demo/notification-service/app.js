const express = require("express");
const app = express();

app.use(express.json());

app.post("/event", async (req, res, next) => {
  console.log("Notification received!", req.body);
  console.log("Old data", req.body.event.data.old);
  console.log("New data", req.body.event.data.new);
  res.json({ success: true });
});

app.post("/action", async (req, res, next) => {
  console.log("Notification received!", req.body);
  res.json({ success: true });
});

app.listen(4000, () => console.log("Server is running on port 4000"))
