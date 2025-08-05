// server.js

import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.post("/confess-your-feelings", (req, res) => {
  const { from, to, message } = req.body;

  if (message && message.toLowerCase().includes("like")) {
    return res.status(404).json({
      error: "Endpoint doesn't exist. She never saw you that way.",
    });
  }

  res.status(200).json({
    success: true,
    response: "Confession received, but... it's complicated.",
  });
});

app.listen(port, () => {
  console.log(`💔 Server running on http://localhost:${port}`);
});
