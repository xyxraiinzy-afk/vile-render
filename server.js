import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors({ origin: "https://vile.lat" }));

app.get("/api/user", async (req, res) => {
  const response = await fetch("http://noel.hidencloud.com:24580/api/user");
  const data = await response.json();
  res.json(data);
});

app.listen(10000, () => console.log("Proxy running on port 10000"));
